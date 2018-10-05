
export default {


  functional: true,
  name: 'AppAction',
  wrapped:'v-btn',
  render(h, context) {
    var
      design = context.parent.$store.state.APP_INSTANCE.design.AppAction||{},
      actionText =  context.parent.$store.state.APP_INSTANCE.data.actionText;



    //context.data.props.icon = mobile;
    //console.log(context);
    if (context.props.small  ) {
      context.props.large = false;
    }
    return   h('v-btn', {
      props: {color: 'accent',  light:true, to: {name: 'order', params: {typeAction: 'order'}},  large: true, ...design,  ...context.props  }  ,
      //class: ['black--text'],
      on: {
        click: function (event) {
            console.log(' here send statistic for ');
           //context.parent.$router.push({name: 'order'});
        }
      }
    },
      [
        h('AppIcon', {attrs: {name:context.props.siicon||'si-order'}}),

          !context.props.hideText? actionText: '',
      ]
   )

  }
}
