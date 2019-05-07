import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { sortBy } from 'lodash';   
Vue.use(sortBy);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
