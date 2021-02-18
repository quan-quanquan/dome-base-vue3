import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
// import installAntD from './ant-design'

const vm = createApp(App)

// installAntD(vm)
vm
  .use(Antd)
  .use(router)
  .mount('#app')
