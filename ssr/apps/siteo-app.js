const fs = require('fs');
const { createBundleRenderer } = require('vue-server-renderer');
const generateTemplateError = require('../errors/template');
const template = fs.readFileSync('./ssr/template/index.ssr.html', 'utf-8');
const serverBundle = require('../../dist/assets/vue-ssr-server-bundle.json')
const clientManifest = require('../../dist/assets/vue-ssr-client-manifest.json')
const renderer = createBundleRenderer(serverBundle, {
  /* about options https://ssr.vuejs.org/ru/api/#template  **/
  inject:false,
  runInNewContext:false, // рекомендуется false
  template, // (опционально) шаблон страницы
  clientManifest, // (опционально) манифест клиентской сборки
  shouldPreload:(file, type) => {
    // тип определяется на основе расширения файла.
    // https://fetch.spec.whatwg.org/#concept-request-destination
    if (type === 'script' || type === 'style') {
     return true
   }
    return false;
  },
  shouldPrefetch: (file, type) => {
    return false;
  }

})

const httpApi = require('../helper/http-api.js');

//const {ErrorInstanse} = require('../errors/ErrorInstanse.js');

/**


*/
module.exports=function (req, res, baseUrl, path) {
  //console.log(req);

  //console.log(req._parsedUrl);
  /**
    Example for Express: #1https://siteo-dev.com/pr2019/services/   #2https://siteo-dev.com/pr2019/services/?sdf=34

    req.originalUrl = '/pr2019/services/'  &  '/pr2019/services/?sdf=34'
    req.baseUrl = '/pr2019'   &   '/pr2019'
    req.hostname= 'siteo-dev.com'
    baseUrl = '/pr2019'
    path = '/services/'
  */
  var  context = {
    path: path,
    query: req.query,
    configs_frontend: {
      baseUrl: baseUrl||"/",
      lang: 'en',
      lp: true,  // need landing for turn of routes when websites not found
      host: req.hostname
    },
  };


  httpApi( '/apps', {host:req.hostname, path:baseUrl} ).then(response=>{

    if (!response.data.instance) {
        generateTemplateError(res, 'API_NO_CONTENT_JSON' ,context.configs_frontend );
        return 0;
    }

    context.configs_frontend = {...context.configs_frontend,  ...response.data.configs };
    //context.configs_frontend.lang = response.data.instance.data.lang;
    context.instance = response.data.instance;


    if (!context.instance._id) {
        generateTemplateError(
          res,
          {
            status: 404,
            ssr_error_code: 'APP_INSTANCE_NOT_VALID' ,
            response_data_api:   context.instance
          },
          context.configs_frontend );
        return 0;
      }

    renderer.renderToString(context, (err, html) => {
      if (err) {
        console.log(err);
          generateTemplateError(res, err ,context.configs_frontend );
        } else {
          res.type('html');
          // We need status code for html page if routing is PageError
          //console.log(context.state);
          if (context.state.srvPageErr) {
            res.status(404).end(html);
          } else {
            res.end(html);
          }

      }
    });

  }).catch(function(error) {

    var err={};
    // catch axios errors
    if (!error.response) {
      err={ssr_error_code: 'AXIOS_ERR_INNER_'+error.code };
    } else {
       // catch response errors (if axios has response)

       err = { ssr_error_code: 'AXIOS_ERR_RESPONSE' , response_data_api: error.response.data};

       //Why 200? private video on youtube response with 200 Ok status.
       //Website can disabled and enabled
       if (["ApiAppsDisabled", "ApiAppsNoTemplateId"].indexOf(error.response.data.error_code) !==-1) {
         err.status = 404;
       } else {
         err.status = error.response.status;
       }

    }
    generateTemplateError(res, err , context.configs_frontend );
  });

}
