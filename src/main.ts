import Vue from 'vue';
import App from './App.vue';
import store from './store';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;

console.group('%c环境信息', 'color: yellow');
console.warn('%c当前process：', 'color: yellow', process);
console.warn('%c当前环境：', 'color: red', process.env);
console.warn('%c当前版本：', 'color: green', process.versions);
console.groupEnd();

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
