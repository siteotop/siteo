

import FunctionalShareWindow from './Functional/ShareWindow.vue';

export default {
    functional: true,
    props: {
      shareWindow: {
        type: Boolean,
        default: false
      },

      sharing: {
        type: Boolean,
        default: false
      },

      structure: {
          type: Array,
          default: function() {
            return [];
          }
      }
    },

    render(h, context) {
      console.log(' render page ');
      return h('div', [

          // pageToolbar
        /**  false? h(FunctionalPageToolbar, {props: {
            contentStructure:context.props.structure,
            hightUp: 300,
            sharing: context.props.sharing
          },
          on: {
              shareWindow: ()=>{ context.parent.shareWindow = true}
            }}):'',
*/
          ////////// Structure
          context.props.structure.map(function(element){
            return h('StChildrenHelper', {props: { element:element}})
          }),
          ////////// Structure


          //shareWindow
          context.props.shareWindow? h(FunctionalShareWindow, { on: {closeShare: ()=>{ context.parent.shareWindow = false}}}):'',



      ])



    }


}