<template>
    <nav class="w-100 bg-secondary d-flex justify-content-end">
        <button class=" bg-danger" @click="close"><i class="fa-solid fa-xmark"></i></button>
    </nav>
</template>

<script>
import router from '../libs/router'
export default {
    methods: {
        close(){
            router.push({name: 'index'})
        }
    }
}
</script>

<style scoped>
    .navbar-nav{
        gap: .5rem;
    }
</style>