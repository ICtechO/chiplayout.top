import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter' 
// 引入官方主题类型，确保 SidebarItem 与官方对齐（可选但推荐）
import type { DefaultTheme } from 'vitepress/theme'

// 1. 关键：修改 SidebarItem 类型，继承官方类型并保留自定义逻辑
// （或直接使用官方 DefaultTheme.SidebarItem，确保包含 collapsed 属性）
interface SidebarItem extends DefaultTheme.SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
  // 新增官方折叠属性：true=默认折叠，false=默认展开，不写则继承全局默认
  collapsed?: boolean
}

// 文档根目录
const docsDir = path.resolve(__dirname, '../')

// 处理文件名，去除以.分隔的前缀
function processFileName(name: string): string {
  const parts = name.split('.')
  return parts.length > 1 ? parts.slice(1).join('.') : name
}

// 从Markdown文件中获取frontmatter的title
function getFrontmatterTitle(filePath: string): string | null {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(content)
    return data.title || null
  } catch (error) {
    console.error(`解析文件${filePath}的frontmatter失败:`, error)
    return null
  }
}

// 2. 递归生成侧边栏配置：新增 collapsed 配置
function generateSidebar(dir: string, base: string = ''): SidebarItem[] {
  const sidebar: SidebarItem[] = []
  const fullDir = path.join(docsDir, dir)
  
  if (!fs.existsSync(fullDir)) {
    return sidebar
  }
  
  const items = fs.readdirSync(fullDir, { withFileTypes: true })
  items.sort((a, b) => a.name.localeCompare(b.name))
  
  for (const item of items) {
    if (item.name.startsWith('.')) continue
    
    const fullPath = path.join(fullDir, item.name)
    const relativePath = path.join(dir, item.name)
    const linkPath = base ? `/${base}/${relativePath}` : `/${relativePath}`
    
    if (item.isDirectory()) {
      // 递归处理子目录
      const children = generateSidebar(relativePath, base)
      if (children.length > 0) {
        sidebar.push({
          text: processFileName(item.name),
          items: children,
          // 3. 配置官方折叠属性：这里设置为 true（默认折叠），可根据需求修改
          // （官方默认：未设置时继承 themeConfig.sidebarMenuExpanded 全局配置，默认 false=展开）
          collapsed: true 
        })
      }
    } else if (item.isFile() && item.name.endsWith('.md')) {
      let fileName = item.name.replace('.md', '')
      if (fileName === 'index') {
        continue
      }
      
      const frontmatterTitle = getFrontmatterTitle(fullPath)
      const displayText = frontmatterTitle || processFileName(fileName)
      
      sidebar.push({
        text: displayText,
        link: linkPath.replace('.md', '')
        // 文件项无需 collapsed（仅目录项支持）
      })
    }
  }
  
  return sidebar
}

// 生成完整的侧边栏配置
const sidebar = {
  '/': generateSidebar('')
}

export default defineConfig({
  base: '/',
  title: '你的文档标题',
  description: '你的文档描述',
  
  themeConfig: {
    sidebar: sidebar,
    // 4. 可选：全局侧边栏折叠配置（优先级低于目录项的单独 collapsed 设置）
    // sidebarMenuExpanded: false, // 全局默认展开（true=默认折叠，false=默认展开）
    
    nav: [
      { text: '首页', link: '/' }
    ]
  }
})