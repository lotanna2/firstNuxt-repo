<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products"> <!-- v-for= is to loop through the products array and naming the array 'p' and outputting a div for each one  -->
                <ProductCard :product="p" /> <!-- passing in a 'product' prop-->
            </div>
        </div> 
    </div> 
</template>

<script setup> // this code can fire in the server and the browser and not all code can do that
   definePageMeta({
    layout: 'products'
   })
        // fetch 'products' is a variable
      const {data: products} = await useFetch('https://fakestoreapi.com/products') // useFetch function allowa us to fetch data from an end point

   //creating specific header tag for specific pages instead of the default global ones
  useHead ({
    title: 'Lotannas First Nuxt (Merch)',
    meta: [
        {name: 'description', content: 'Nuxt 3 Merch'}
    ]
  })

</script>

<style scoped>

</style>


<!-- getting data from an api through the script and making it available for the template-->