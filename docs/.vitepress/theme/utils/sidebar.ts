import type { DefaultTheme } from 'vitepress/theme'

export interface CustomSidebarItem extends DefaultTheme.SidebarItem {
  text: string
  link?: string
  items?: CustomSidebarItem[]
  collapsed?: boolean
  fullPath?: string
}

// 只保留浏览器端需要的函数
export function getActiveDirPaths(currentRoute: string): string[] {
  const activePaths: string[] = []
  if (!currentRoute || currentRoute === '/') return activePaths

  const routeParts = currentRoute.slice(1).split('/').filter(Boolean)
  let currentPath = ''

  for (const part of routeParts) {
    currentPath = currentPath ? `${currentPath}/${part}` : part
    if (routeParts.indexOf(part) < routeParts.length - 1) {
      activePaths.push(`/${currentPath}`)
    }
  }

  return activePaths
}