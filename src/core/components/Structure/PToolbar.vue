<script>


export const ToolbarElements = {
   TTl: {
     functional: true,
     render(h, context) {
      return   h('v-toolbar-title',
         {
           class:context.data.class
         },
         [
           context.parent.$store.state.appInstance.objectActive.name
         ]
       )
     }
   },

   TTg: {
     functional : true,
     render(h, context) {
       return h('v-app-bar-nav-icon',  {
         class: context.data.class,
         on: {
           click: ()=>context.parent.$store.commit('toogleDrawer')
         }
       }
       )
     }
  }



}

export const createToolbarProps = function (cnf) {
    return {
        height: cnf.h,
        dark:cnf.d,
        dense: cnf.e,
        color: cnf.c,
        collapse: cnf.a,
        elevation: cnf.b,
        flat: cnf.f,
        floating: cnf.g,
        light: cnf.i,
        prominent: cnf.n,
        short: cnf.r,
        tile:  cnf.o,
        src: cnf.q,
        fixed: cnf.ab
      }
}
/**
others toolbar
*/
export default {
  functional: true,

  render(h, context) {
    var cnf = context.props.cnf;

    return h('v-toolbar', {
      props: createToolbarProps(cnf)
    },
      h('StChildrenHelper', {
        props: {
          element:context.props.chldrn,
          list:true,
          structure: ToolbarElements
      }})
    );

  }
}

</script>
