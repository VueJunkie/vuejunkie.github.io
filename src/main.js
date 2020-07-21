import Vue from 'vue'
import AsyncComputed from 'vue-async-computed'

import App from '@/App.vue'
import vuetify from '@/plugins/vuetify';
import store from '@/store/vuex';
import router from '@/router';

Vue.use(AsyncComputed);
Vue.config.productionTip = false;

if (window.__INITIAL_STATE__) {
  // We initialize the store state with the data injected from the server
  store.replaceState(window.__INITIAL_STATE__)
}

const root = new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
});

// Wait for DOMContent
document.addEventListener('DOMContentLoaded', function () {
  // Mount the application
  root.$mount('#app');
  // Dispatch prerender in production
  if(process.env.NODE_ENV === 'production')
    document.dispatchEvent(new Event('prerender'))
});