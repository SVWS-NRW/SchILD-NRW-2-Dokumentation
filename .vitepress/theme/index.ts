import DefaultTheme from 'vitepress/theme'
import { defineAsyncComponent } from 'vue'
import Layout from './Layout.vue'
import { updateReferenceSelection } from './reference-state'
import './style.css'
import './accents.css'
import './print.css'
import { installPrintLayout } from './print.mjs'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    app.component('SectionPrintBook', defineAsyncComponent(() => import('./SectionPrintBook.vue')))
    app.component('ImageCatalog', defineAsyncComponent(() => import('./ImageCatalog.vue')))
    if (typeof window === 'undefined') return
    const disposePrintLayout = installPrintLayout()
    import.meta.hot?.dispose(disposePrintLayout)
    updateReferenceSelection(window.location.href)
    const previous = router.onAfterRouteChanged
    router.onAfterRouteChanged = async (to) => {
      await previous?.(to)
      updateReferenceSelection(to)
    }
  }
}
