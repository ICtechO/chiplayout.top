---
date: 2025-08-17 04:35:48
title: vuepress 图片卡片转vitepress
createTime: 2025/02/25 23:00:42
permalink: /program/puhng
categories:
  - python
tags:
  - python
  - imagecard
  - imgcard
  - vuepress
  - vitepress
coverImg: https://img.onedayxyy.cn/images/TeekCover/15.webp
---
>根据Map table， 批量把 VuePress <ImageCard .../> 替换为 VitePress ::: imgCard ... :::

## Map Table

| VuePress 原写法        | 映射到 VitePress 写法                    |
| ------------------- | ----------------------------------- |
| `<imageCard`        | `::: imgCard` + 换行 + \`\`\`\`yaml\` |
| `image="xxx"`       | `- img: xxx`                        |
| `title="xxx"`       | `name: xxx`                         |
| `description="xxx"` | `desc: xxx`                         |
| `author="xxx"`      | `author: xxx`                       |
| `date="xxx"`        | **忽略（不写入）**                         |
| `/>`                | \`\`\`\` + 换行 + `:::`               |

## Script
```py
#!/usr/bin/env python3
"""
跳过目录：public、.vitepress
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SKIP_DIRS = {"public", ".vitepress"}

# 正则：匹配 <ImageCard ... /> 整体
IMAGE_CARD_RE = re.compile(
    r'<ImageCard\b(.*?)\s*/>',
    re.IGNORECASE | re.DOTALL
)

# 属性正则：捕获 key="value" 或 key='value'
ATTR_RE = re.compile(
    r'(\w+)\s*=\s*(["\'])(.*?)\2',
    re.IGNORECASE
)

# 属性映射表
ATTR_MAP = {
    'image': '- img',
    'title': '  name',
    'description': '  desc',
    'author': '  author',
    # date -> 丢弃
}


def should_skip(path: Path) -> bool:
    """判断路径是否包含需要跳过的目录"""
    return any(part in SKIP_DIRS for part in path.parts)


def convert_one(md_file: Path) -> None:
    text = md_file.read_text(encoding='utf-8')

    def replacer(match: re.Match) -> str:
        raw_attrs = match.group(1)
        props = {}
        for k, _, v in ATTR_RE.findall(raw_attrs):
            mapped = ATTR_MAP.get(k.lower())
            if mapped:          # 忽略未映射或 date
                props[mapped] = v

        yaml_lines = []
        for k, v in props.items():
            yaml_lines.append(f'{k}: {v}')

        # 合成块
        block = (
            '::: imgCard\n'
            '```yaml\n' +
            '\n'.join(yaml_lines) + '\n' +
            '```\n' +
            ':::\n'
        )
        return block

    new_text, count = IMAGE_CARD_RE.subn(replacer, text)
    if count:
        md_file.write_text(new_text, encoding='utf-8')
        print(f'Updated: {md_file}  ({count} tag(s))')


def main():
    for md in ROOT.rglob('*.md'):
        if not should_skip(md):
            convert_one(md)


if __name__ == '__main__':
    main()
```

# 使用方法

1. 保存脚本为 `convert_imagecard_v2v.py`，放到需要扫描的根目录。
2. 终端执行：

```bash
python3 convert_imagecard_v2v.py
```

3. 脚本会就地修改所有 `.md`，并在终端列出已处理文件。

# 检查并更正特殊