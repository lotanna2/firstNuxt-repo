<template> <!-- block card for each product item on the product section-->
    <div class="card text-center"> 
        <img :src="product.image" alt="product thumb" class="thumb"> <!-- using the : to pass in the product.image function -->
        <p class="font-bold text-gray-500 m-4 truncate"> <!-- truncate adds a 3 dot at th end of a line if it goes over it -->
       {{ product.title }}
        </p>
        <NuxtLink :to="`/products/${product.id}`"> 
            <p class="btn my-4">
                View Details
            </p>

        </NuxtLink>
    </div>
</template>
 
<script setup> // destructuring a prop from the product/index
    const { product } = defineProps ([ 'product'])
</script>

<style scoped>
    .thumb {
        max-height: 120px;
        max-width: 70%;
        margin: 0 auto;
    }

</style>