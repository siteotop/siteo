// entry-client.js

import  { createSiteo} from './core';

import Vue from 'vue'
import VueAnalytics from 'vue-analytics'



//  add before create siteo (on SSR same)
var app = createSiteo({
    configs: window.__SITEO_CONFIG__,
    plugins: window['siteo-plugins']
});

/**
  Add Google analitics
*/
if (window.__SITEO_CONFIG__['siteo-plugin-googleanalitics']) {
    Vue.use(VueAnalytics, {
      id: window.__SITEO_CONFIG__['siteo-plugin-googleanalitics']['ui'],
      router: app.$router
    });
}


app.$router.onReady(() => {

   if (window.__INITIAL_STATE__) {
        app.$store.replaceState(window.__INITIAL_STATE__);
   } else {
    // if no window.__INITIAL_STATE__
    //all modules from store  are available after $mount()
    for( var mutation in __SITEO_INSTANCE__) {
      app.$store.commit(mutation, __SITEO_INSTANCE__[mutation]);
    }

   }

  // update theme
  if (app.$store.state.appInstance.objectActive.design) {

    app.updateVuetifyOptions(app.$store.state.appInstance.objectActive.design.Vtf);
  }
  //about  devide code client and SSR  https://bit.ly/2tnfDa4

  app.$mount('#app');
  // allow use async load in beforeMount
  app.$store.state.allowAsyncLoad = true;
})
