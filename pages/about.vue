<template>
    <div>
        <h2> About </h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque 
            tempora aperiam dignissimos consequatur 
            facilis tenetur quod, vero officiis illo amet.</p>  
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat suscipit mollitia id quaerat dicta 
            perspiciatis, cumque ipsa consequuntur vero similique!
        </p>  
            
        <div> {{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/GBP')
  
</script>

<style  scoped>
    h2 {
        margin-bottom: 20px;
        margin-top: 10px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>