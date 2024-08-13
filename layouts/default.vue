<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <Nuxt-link to="/" class="font-bold">Nuxt First</Nuxt-link>
                <ul class="flex gap-4">
                    <li><Nuxt-link to="/"> HOME </Nuxt-link>  </li>
                    <li><Nuxt-link to="/about"> ABOUT </Nuxt-link>  </li>
                    <li><Nuxt-link to="/products" class="btn"> PRODUCTS </Nuxt-link>  </li>   
                </ul>
            </nav>
        </header>

       <!-- nuxt makes this the output/default of the 'pages' content like the products, index, about -->
        <div class="container mx-auto p-4">
            <slot />
        </div>

    </div>
</template>

<style scoped>

    .router-link-exact-active {
        color:aqua;
    }
    p {
        margin: 20px 0;
    }
    
</style>