// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CKEditor from '@ckeditor/ckeditor5-vue';
//导入全局样式 
import './assets/css/global.css'
import VueParticles from 'vue-particles'  

import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use( CKEditor );
Vue.use(VueParticles)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
