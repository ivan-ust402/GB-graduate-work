import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createHead } from '@unhead/vue';
const head = createHead();

createApp(App)
  .use(store)
  .use(router)
  .use(head)
  .mount('#app')
