
export default {

    


    computed: {

        pageMenu() {
          var page_menu = [];
          _PRERENDER.content.map(function(section) {

              if (section._props._na) {
                  page_menu.push( {title: section._props._na, href: '#'+section._props._id  });
              }

          })
          return page_menu;
        }


    },



    render(h ) {

        var self = this;
        return h('div',  [
            // toolbar for Page
            h( self.$root.$options.componentsPage['PageToolbar'], {props: {items:this.pageMenu}}),
           // sections for Page
          _PRERENDER.content.map(function(section) {
              return h(self.$root.$options.componentsPage[section._n], { props: section._props  }  )
            })
      ]
      )

    }

}