import { defineConfig } from 'vitepress'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

// 修正路径计算：
// __dirname 是当前 config.mts 所在目录（.vitepress）
// 向上跳转 1 层到 docs 目录
const srcDir = path.resolve(__dirname, '../')
//console.log('修正后的 srcDir:', srcDir)

// 在服务器端预先生成侧边栏配置
interface CustomSidebarItem {
  text: string
  link?: string
  items?: CustomSidebarItem[]
  collapsed?: boolean
  fullPath?: string
}

function processFileName(name: string): string {
  const parts = name.split('.')
  return parts.length > 1 ? parts.slice(1).join('.') : name
}

function getFrontmatterData(filePath: string): { title: string | null, permalink: string | null } {
  try {
    if (!fs.existsSync(filePath)) return { title: null, permalink: null }
    const content = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(content)
    return { 
      title: data.title || null,
      permalink: data.permalink || null
    }
  } catch (error) {
    return { title: null, permalink: null }
  }
}

// 保留旧函数以兼容现有代码
function getFrontmatterTitle(filePath: string): string | null {
  const data = getFrontmatterData(filePath)
  return data.title
}

// 修复递归生成侧边栏的函数，避免路径重复
function generateSidebar(dir: string = ''): CustomSidebarItem[] {
  const sidebar: CustomSidebarItem[] = []
  const fullDir = path.join(srcDir, dir)
  
  if (!fs.existsSync(fullDir)) {
    return sidebar
  }
  
  let items: fs.Dirent[] = []
  try {
    items = fs.readdirSync(fullDir, { withFileTypes: true })
  } catch (error) {
    return sidebar
  }
  
  items.sort((a, b) => a.name.localeCompare(b.name))
  
  for (const item of items) {
    if (item.name.startsWith('.')) {
      continue
    }
    
    const itemFullPath = path.join(fullDir, item.name)
    const itemRelativePath = path.join(dir, item.name).replace(/\\\\/g, '/')
    
    if (item.isDirectory()) {
      // 递归处理子目录，但不传递base参数
      const children = generateSidebar(itemRelativePath)
      
      if (children.length > 0) {
        const indexMdPath = path.join(itemFullPath, 'index.md')
        const sidebarItem: CustomSidebarItem = {
          text: processFileName(item.name),
          items: children,
          collapsed: true
        }
        
        // 只有当目录中存在 index.md 文件时，才添加链接
        if (fs.existsSync(indexMdPath)) {
          // 检查 index.md 是否有 permalink
          const indexData = getFrontmatterData(indexMdPath)
          const dirLink = indexData.permalink || `/${itemRelativePath}/index`
          sidebarItem.link = dirLink
          sidebarItem.fullPath = dirLink
        } else {
          // 仍然保留 fullPath 用于折叠状态管理，但不设置实际链接
          sidebarItem.fullPath = `/${itemRelativePath}`
        }
        
        sidebar.push(sidebarItem)
      }
    } else if (item.isFile() && item.name.endsWith('.md')) {
      const fileName = item.name.replace('.md', '')
      if (fileName === 'index') {
        continue
      }
      
      // 获取 frontmatter 数据，包括标题和 permalink
      const frontmatterData = getFrontmatterData(itemFullPath)
      const displayText = frontmatterData.title || processFileName(fileName)
      
      // 使用 permalink 或默认文件路径作为链接
      const defaultLink = `/${itemRelativePath.replace(/\.md$/, '')}`
      const fileLink = frontmatterData.permalink ? frontmatterData.permalink : defaultLink
      
      sidebar.push({
        text: displayText,
        link: fileLink,
        fullPath: fileLink
      })
    }
  }
  
  return sidebar
}

// 预生成侧边栏配置
const sidebarConfig: Record<string, CustomSidebarItem[]> = {
  '/': generateSidebar()
}

// 调试输出
//console.log('侧边栏配置示例:', 
//   JSON.stringify(sidebarConfig['/'].slice(0, 2), null, 2)
// )

// 收集所有文件的 permalink 映射关系
function collectPermalinks(): Record<string, string> {
  const permalinks: Record<string, string> = {}
  
  function processDir(dir: string = '') {
    const fullDir = path.join(srcDir, dir)
    
    if (!fs.existsSync(fullDir)) {
      return
    }
    
    try {
      const items = fs.readdirSync(fullDir, { withFileTypes: true })
      
      for (const item of items) {
        if (item.name.startsWith('.') || item.name === 'node_modules' || item.name === 'dist') {
          continue
        }
        
        const itemFullPath = path.join(fullDir, item.name)
        const itemRelativePath = path.join(dir, item.name).replace(/\\\\/g, '/')
        
        if (item.isDirectory()) {
          processDir(itemRelativePath)
        } else if (item.isFile() && item.name.endsWith('.md')) {
          const frontmatterData = getFrontmatterData(itemFullPath)
          if (frontmatterData.permalink) {
            // 确保permalink是有效的路由路径，不以斜杠开头或结尾
            const permalink = frontmatterData.permalink
              .replace(/^\//, '')
              .replace(/\/$/, '')  // 移除结尾的斜杠
              .replace(/\.md$/, '')
            
            // 确保源文件路径正确，不以斜杠开头，保留.md扩展名
            const relativePath = itemRelativePath
              .replace(/^\//, '')
            
            // 只添加有效的路由映射，排除可能冲突的路径
            if (permalink && relativePath && !permalink.includes('.') && !relativePath.includes('@')) {
              permalinks[permalink] = relativePath
            }
          }
        }
      }
    } catch (error) {
      console.error(`Error processing directory ${dir}:`, error)
    }
  }
  
  processDir()
  return permalinks
}

const permalinkMap = collectPermalinks()
//console.log('Permalink mappings:', permalinkMap)

export default defineConfig({
  rewrites: Object.fromEntries(
    Object.entries(permalinkMap).map(([permalink, filePath]) => {
      // 确保permalink不以斜杠开头，并添加.md后缀
      const cleanPermalink = permalink.replace(/^\//, '')
      const sourcePath = `${filePath.replace(/\\/g, '/')}`
      const targetPath = `${cleanPermalink}.md`
      console.log('Rewrite mapping:', sourcePath, '->', targetPath)
      return [sourcePath, targetPath]
    })
  ),
  base: '/',
  srcDir: srcDir,
  title: '我的文档库',
  description: '基于 VitePress 自动生成侧边栏+动态折叠',
  


  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-') || tag === 'CustomComponent'
      }
    }
  },

  themeConfig: {
    nav: [{ text: '首页', link: '/' }],
    sidebar: sidebarConfig,
    outline: 'deep',
    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: '最后更新时间',
    }
  },

  vite: {
    resolve: {
      alias: [
        { find: '@docs', replacement: srcDir }
      ]
    },
    server: {
      fs: {
        allow: [srcDir]
      }
    }
  }
})