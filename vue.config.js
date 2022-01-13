// vue.config.js
/*
const path = require('path')

module.exports = {
  chainWebpack: (config) => { 
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  }
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/imports.styl'),
      ],
    })
}
*/

function buildConfig() {
  return {
    configureWebpack: () => { // config // 웹팩 파일 보기
      // console.log(config)
      if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'dev') {
        return require(`./config/vue.${process.env.NODE_ENV}.js`);
      } else {
        console.log('Wrong webpack mode. Please choices: dev or prod.')
      }
    }
  }
}

module.exports = buildConfig;