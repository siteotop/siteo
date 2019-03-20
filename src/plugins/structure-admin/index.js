
import DesignSettingsNavigation from './Navigation.vue';
import * as SettingsBlocks from './Blocks';
import {helperComponents} from './_helper/components'
import {allowChildrenList} from './validator/allowChildren';


export default {

  name: 'siteo-plugin-structure-admin',

  install:function (Vue) {
      // register some component which needed for create settings navigation drawer
      Vue.component('siteo-plugin-structure-admin', DesignSettingsNavigation);

      // add all settings blocks to components;
      var $componentsHelper = helperComponents(Vue);
      for (var name in SettingsBlocks ) {
        SettingsBlocks[name].StructureAdminHelper = $componentsHelper;
        Vue.component(name, SettingsBlocks[name]);
      }
  }


}
