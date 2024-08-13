export default defineEventHandler(async (event) => {

const { code } = event.context.params // getting the rout parameter (the currency code which was called 'code' in the file name)
const { currencyKey } = useRuntimeConfig() // a nuxt variable 'useRuntimeConfig' which allows us to get the variables we specify 0n the config  

const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}` // added query parameters starting from ' ?'
// this is the uri for the request for the code
  // came from the documentation for the currency api
  const { data } = await $fetch(uri) 
 
  return data

})   