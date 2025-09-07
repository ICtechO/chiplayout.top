---
date: 2025-08-17 04:35:48
title: 刷新date值为createTime
createTime: 2025/02/25 23:00:42
permalink: /program/t2q8e
categories:
  - python
tags:
  - python
  - vitepress
  - date
  - createTime
coverImg: https://img.onedayxyy.cn/images/TeekCover/15.webp
---
>所有数据经历了wordpress XML -- python --> md --> vuepress --> vitepress
从vitepress的目录copy到vitepress后，frontmatter在原有createTime的基础上加了一行date, 导致所有文章显示的创建时间是copy时间， 通过`python`脚本将 `date`值改的和 `createTime` 一致
## 功能
- 递归扫描当前目录下所有 `.md` 文件；
- 跳过任何路径中包含 `attachments` 或 `.vitepress` 的目录；
- 读取 frontmatter（只识别 `---` 包裹的第一段 YAML）；
- 如果存在 `createTime: 2011-07-30T08:02:00.000Z` 这种格式，则在 **同一 frontmatter 中新增或覆盖**  
  `date: 2011-07-30 08:02:00`（去掉毫秒，T→空格）；
- 其余内容（包括空行、注释、其他字段）全部保持原样；
- 就地写回文件，并打印已修改的文件路径。
## Script

```python
#!/usr/bin/env python3
"""
fix_frontmatter_date.py
在 frontmatter 中根据 createTime 生成/覆盖 date 字段
跳过目录：public、.vitepress
"""

import re
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SKIP_DIRS = {"public", ".vitepress"}

# 匹配 frontmatter 的正则：非贪婪、DOTALL 让 . 匹配换行
FRONT_MATTER_RE = re.compile(r'^---\n(.*?)\n---\n', re.DOTALL)

# 捕获 createTime 值
CREATE_TIME_RE = re.compile(r'^createTime:\s*(.+)$', re.MULTILINE)


def should_skip(path: Path) -> bool:
    return any(part in SKIP_DIRS for part in path.parts)


def normalize_time(create_time_str: str) -> str:
    """
    把 ISO-8601 时间（可能带 Z 或 ±HH:MM）转换为 'YYYY-MM-DD HH:MM:SS'
    """
    try:
        # dateutil 更健壮，但只用标准库
        dt = datetime.fromisoformat(create_time_str.replace("Z", "+00:00"))
        return dt.strftime("%Y-%m-%d %H:%M:%S")
    except Exception:
        # 无法解析则原样返回，脚本会跳过
        return None


def process_one(md_file: Path) -> None:
    text = md_file.read_text(encoding="utf-8")

    match = FRONT_MATTER_RE.match(text)
    if not match:
        return  # 无 frontmatter

    front_raw = match.group(1)

    ct_match = CREATE_TIME_RE.search(front_raw)
    if not ct_match:
        return  # 无 createTime

    new_date_val = normalize_time(ct_match.group(1).strip())
    if new_date_val is None:
        return  # 格式异常，跳过

    # 替换或新增 date 字段
    # 1) 已存在 date: 行 -> 替换
    new_front, sub_count = re.subn(
        r'^date:.*$', f"date: {new_date_val}", front_raw, flags=re.MULTILINE
    )
    if sub_count == 0:
        # 2) 不存在 -> 在 frontmatter 末尾插入
        new_front = front_raw.rstrip() + f"\ndate: {new_date_val}\n"

    # 拼回全文
    new_text = text.replace(match.group(0), f"---\n{new_front}\n---\n", 1)

    if new_text != text:
        md_file.write_text(new_text, encoding="utf-8")
        print(f"Updated: {md_file}")


def main():
    for md in ROOT.rglob("*.md"):
        if not should_skip(md):
            process_one(md)


if __name__ == "__main__":
    main()
```

## 使用方法  
1. 把脚本放在项目根目录（与需扫描的 `.md` 同级或上一级）。  
2. 终端运行：

```bash
python3 fix_frontmatter_date.py
```

脚本会跳过 `attachments` 与 `.vitepress`，其余 `.md` 文件按需更新。