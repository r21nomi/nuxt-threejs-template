import { ENV_DEV } from './configs/env.development'
import { ENV_PRD } from './configs/env.production'
const environment = process.env.PROJECT_ENV || 'development'
// require() cannot find file on vercel...
const ENV =
  environment === 'local'
    ? require(`./configs/env.local.ts`).ENV_LOCAL
    : environment === 'development'
    ? ENV_DEV
    : ENV_PRD

export default {
  // ssr: true,
  mode: 'universal',
  srcDir: 'web/',
  head: {
    title: 'nuxt-threejs-template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['@/assets/style/common.styl'],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {
    // Reference: https://github.com/mnmxmx/threejs-nuxt-sample/blob/master/nuxt.config.js
    transpile: ['three'],
    extend(config) {
      config.node = {
        fs: 'empty',
      }
      if (config.module) {
        config.module.rules.push({
          test: /\.(vert|frag)$/i,
          use: ['raw-loader'],
        })
      }
    },
  },
  env: ENV,
}
