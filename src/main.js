import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import localizeFilter from './filters/localize.filter';

Vue.config.productionTip = false;

Vue.filter('localize', localizeFilter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
