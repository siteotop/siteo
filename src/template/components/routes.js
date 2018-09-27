import PageSchema from './PageSchema';
import PageError from './Pages/Error.vue';
import PageOrder from './Pages/Order.vue';
import PageServices from './Pages/Services.vue';
export default  [



        {
          name: "indexPage",
          path:  '/',
          component: PageSchema,
          props: true,
        },

        {
          name: "services",
          path:  '/services',
          component: PageServices,

        },

        {
          name: "order",
          path:  '/order',
          component: PageOrder,

        },

        {
          name: "admin",
          path:  '/admin',
          component:  ()=>import('../components-settings/index.vue' /* webpackChunkName: "chunk/admin" */  ),

        },
        {
          name: "PageSchema",
          path:  '/:idString-p:postId',
          component: PageSchema,
          props: true,
        },

        {
           path: "*",
           name: 'PageError',
           component: PageError,
           props: {status:404},
           meta:{},
        }
     ];
