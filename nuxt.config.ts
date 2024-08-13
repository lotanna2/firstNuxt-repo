// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  // below is a variable
  app: {
    head: {
     title: 'Nuxt Lotannas First Project',
     meta: [
      { name: 'description', content: 'Everything about Nuxt 3' } // applys a meta tag/ description tag to the document
     ] ,
     link: [ // array of different style sheets
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/icons?family=Material+Icons' }
     ]
    }
  },

  runtimeConfig: { // an object which any key we add directly here would be exposed to server side routs but not the ui side
    currencyKey: process.env.CURRENCY_API_KEY // property - currencyKey & setting the value to the environment variable 'env' called currencyapikey
},

  compatibilityDate: '2024-08-06'
})