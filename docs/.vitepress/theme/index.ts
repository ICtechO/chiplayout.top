import { h, ref, watch, defineComponent } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { type CustomSidebarItem, getActiveDirPaths } from './utils/sidebar'

// 定义自定义组件
const CustomComponent = defineComponent({
  name: 'CustomComponent',
  setup(_, { slots }) {
    return () => h('div', { class: 'custom-component' }, slots.default?.())
  }
})

// 导入样式文件 - 注意顺序很重要
import './styles/preflight.css' // 首先加载预设样式
import './styles/tailwind.css'  // 然后是 Tailwind
import './style.css'            // 然后是默认主题样式

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义组件
    app.component('CustomComponent', CustomComponent)
  },
  Layout() {
    const route = useRoute()
    const DefaultLayout = DefaultTheme.Layout

    const activeDirPaths = ref<string[]>(getActiveDirPaths(route.path))
    watch(() => route.path, (newRoute) => {
      activeDirPaths.value = getActiveDirPaths(newRoute)
    }, { immediate: true })

    const processSidebarItems = (items: CustomSidebarItem[]): CustomSidebarItem[] => {
      return items.map(item => {
        const processedItem = { ...item }
        if (processedItem.items && processedItem.items.length) {
          processedItem.items = processSidebarItems(processedItem.items)
          const isActiveDir = activeDirPaths.value.some(activePath => 
            processedItem.fullPath?.startsWith(activePath) || processedItem.link?.startsWith(activePath)
          )
          processedItem.collapsed = !isActiveDir
        }
        return processedItem
      })
    }

    return h(DefaultLayout, null, {
      'sidebar-nav': (slotProps: {
        items: CustomSidebarItem[],
        component: any, // 插槽自带的 SidebarNav 组件（官方内部组件）
        sidebarName?: string
      }) => {
        const dynamicItems = processSidebarItems(slotProps.items)
        // 直接使用 slotProps.component（即官方 SidebarNav）
        return h(slotProps.component, {
          ...slotProps,
          items: dynamicItems
        })
      }
    })
  }
} as Theme
