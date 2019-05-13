import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { sortBy } from 'lodash';   
Vue.use(sortBy);

import Vuex from 'vuex';
Vue.use(Vuex);

Vue.config.productionTip = false;

//register vuex store
import { store } from './store';
Vue.use(store);   

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');



