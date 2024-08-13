 export default defineEventHandler(async (event) => {

   /* // handle query params(meter)
    const { name } = useQuery(event)

    // handle the post data
    const { age } = await useBody(event)

   // api call with private key */
   const { currencyKey } = useRuntimeConfig()

   const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)
 
   return data

})

// the name of this file in the api folder dictates what the end point url is