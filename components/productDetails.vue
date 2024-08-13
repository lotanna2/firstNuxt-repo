<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" alt="product image" class="mx-auto my-7">
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ product.title }}</h2>
                <p class="text-xl my-7"> price - ${{ product.price }}</p> <!-- adding the dollar sign for the price -->
                <h3 class="font-bold border-b-2"></h3>
                <p class="mb-7"> {{ product.description }} </p>
                <button class="btn flex">
                    <i class="material-icon mr-2">add_shopping_cart</i> <!-- the shopping icon name -->
                    <span> Add to cart </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style scoped> 
 img {
    max-width: 400px;
 }
</style>