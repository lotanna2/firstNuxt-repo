<!-- the names doen thave to match an it will still apply to anything inside the product folder-->

<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <Nuxt-link to="/products" class="font-bold">Nuxt First Merch</Nuxt-link>
               
            </nav>
        </header>

       <!-- output of the 'pages' content like the products, index, about -->
        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
                <ul classN="flex gap-4">
                    <li><Nuxt-link to="/"> HOME </Nuxt-link>  </li>
                    <li><Nuxt-link to="/about"> ABOUT </Nuxt-link>  </li>
                    <li><Nuxt-link to="/products"> PRODUCTS </Nuxt-link>  </li>   
                </ul>
        </footer>
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