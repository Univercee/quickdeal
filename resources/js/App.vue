<template>
    <router-view v-if="init"></router-view>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return {
            init: false
        }
    },
    created(){
        this.FETCH_ALL().then(data=>{
            this.init = true
        })
    },
    methods: {
        ...mapActions('tasks', [
            'FETCH_ALL'
        ]),
    }
}
</script>

<style>

</style>