---
title: 阿里云布署twikoo评论系统
date: 2025-08-29 22:16:28
permalink: /mysite/str72
categories:
  - Server
tags:
  - twikoo
  - -vitepress
coverImg: https://img.onedayxyy.cn/images/TeekCover/9.webp
---


## 1. 准备
- 购买阿里云 ECS（1 核 2 G 足够，建议 Ubuntu 22.04）
- 域名已备案并解析到这台 ECS 的公网 IP
- 开放安全组端口：入方向 TCP 8080（或自定义端口）
- 开放安全组端口：出方向 TCP 443（或自定义端口）

## 2. 安装docker 
```sh
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

## 3.

```sh
docker pull imaegoo/twikoo:latest        # 注意官方仓库是 imaegoo，不是 imagegoo
docker run -d --name twikoo -p 8080:8080 -v $(pwd)/twikoo-data:/app/data imaegoo/twikoo:latest
```



复制

```
Unable to find image 'imagegoo/twikoo:latest' locally
docker: Error response from daemon: Get "https://registry-1.docker.io/v2/": ...
```

99 % 是因为 **国内网络无法直连 Docker Hub**（被墙或超时）。  
下面给出一套在阿里云服务器上 100 % 可用的「镜像加速器」方案，照抄即可解决。


1. 一次性写入国内镜像加速器

```bash
sudo mkdir -p /etc/docker

sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn",
    "https://dockerhub.icu",
    "https://docker.1panel.live",
    "https://docker.m.daocloud.io"
  ]
}
EOF
```


2. 重载并重启 Docker
    

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```


3. 验证加速器生效

```bash
docker info | grep -A3 "Registry Mirrors"
```

如果输出里能看到刚才写入的地址，说明已生效。


「开箱即用」的双域名 Nginx 配置，两个域名指向 **完全相同的目录**，证书用 **一张 Let’s Encrypt 的多域名证书** 搞定。你复制即可用。

1. 一次性签发证书（包含两个域名）
    

bash

复制

```bash
sudo certbot --nginx -d chiplayout.net -d www.chiplayout.net -d chiplayout.top -d www.chiplayout.top
```

2. 新建 / 覆盖站点配置  
    创建或编辑 `/etc/nginx/sites-available/chiplayout`（Ubuntu）  
    或 `/etc/nginx/conf.d/chiplayout.conf`（CentOS / Alibaba Cloud Linux）：
    

nginx

复制

```nginx
# 80 统一跳转
server {
    listen 80;
    server_name chiplayout.net www.chiplayout.net chiplayout.top www.chiplayout.top;
    return 301 https://$host$request_uri;
}

# 443 共用配置
server {
    listen 443 ssl http2;
    server_name chiplayout.net www.chiplayout.net chiplayout.top www.chiplayout.top;

    # certbot 自动生成的证书路径
    ssl_certificate      /etc/letsencrypt/live/chiplayout.net/fullchain.pem;
    ssl_certificate_key  /etc/letsencrypt/live/chiplayout.net/privkey.pem;

    # 通用 SSL 优化（可选）
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;

    root /web/vitepress/dist;   # 指向你 VitePress 的 dist
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Twikoo 反向代理（如需要）
    location /twikoo/ {
        proxy_pass http://127.0.0.1:8080/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

3. 启用并加载
    

bash

复制

```bash
# Ubuntu
sudo ln -s /etc/nginx/sites-available/chiplayout /etc/nginx/sites-enabled/
# CentOS 已放在 conf.d，无需 ln

sudo nginx -t && sudo systemctl reload nginx
```

4. 自动续期
    

bash

复制

```bash
sudo certbot renew --dry-run   # 测试
# 已自动每天跑
```

完事。  
`chiplayout.net` 和 `chiplayout.top`（含 www）都会强制 HTTPS 并指向同一目录 `/web/vitepress/dist`。