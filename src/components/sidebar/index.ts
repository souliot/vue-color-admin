import { App } from 'vue'

import Sidebar from './src/sidebar.vue'

Sidebar.install = (app: App): void => {
  app.component(Sidebar.name, Sidebar)
}

export default Sidebar
