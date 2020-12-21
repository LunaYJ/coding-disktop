// Module
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueI18n from 'vue-i18n';
import { index as messages } from '@/configs/languages';
import { Ajax } from '@/utils/Ajax';

// StyleSheet
import '@fortawesome/fontawesome-free/css/all.css';

console.group('%c环境信息', 'color: yellow');
console.warn('%c当前process：', 'color: yellow', process);
console.warn('%c当前环境：', 'color: red', process.env);
console.warn('%c当前版本：', 'color: green', process.versions);
console.groupEnd();

Vue.config.productionTip = false;
Vue.prototype.$ajax = Ajax;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zh',
  messages,
});
new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
