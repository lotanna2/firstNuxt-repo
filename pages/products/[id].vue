<template> <!-- product details page -->
    <div> <!-- below, second way to override the universal metatag for a page -->
      <head> 
         <Title> First Nuxt - {{ product.title }} </Title>
         <meta name="description" :content="product.description">
      </head>
       <ProductDetails :product="product"/> <!-- passing product as a prop-->
    </div>
</template> 

<script setup>
   const { id } = useRoute().params
   const uri = 'https://fakestoreapi.com/products/' + id // uniform Reasource Identifier for the product id

   // fetch the product 
   const { data: product } = await useFetch(uri, {key: id}) // adding a uniq 'key' so the useFetch fetches the ID description for each new id(product)

   if (!product.value ) { // if not product.value, throw an error with the function 'createError'
      throw createError ({ statusCode: 404, statusMessage: 'product not found', fatal: true })
   } // it passes the error we created as a prop to the error page & 'FATAL: true' property object forces the application to show the error message

   definePageMeta({
    layout: 'products' 
   })
</script> <!-- this page is using the product layout -->

<style scoped>

</style>

<!-- useRoute routs through the different id parameters-->
  