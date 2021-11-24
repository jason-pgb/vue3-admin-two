import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import config from './config'
import axios from 'axios'
import request from './utils/request'
<<<<<<< Updated upstream
=======
import storage from './utils/storage'
import api from './api'
import store from './store/index'
>>>>>>> Stashed changes
console.log("环境变量", import.meta.env);
const app = createApp(App)

app.config.globalProperties.$request = request
<<<<<<< Updated upstream
axios.get(config.mockApi + '/login').then((res) => {
  console.log(res);
})
=======
app.config.globalProperties.$storage = storage;
app.config.globalProperties.$api = api;
// axios.get(config.mockApi + '/login').then((res) => {
//   console.log(res);
// })
>>>>>>> Stashed changes

app.use(router).use(ElementPlus).use(store).mount('#app')






