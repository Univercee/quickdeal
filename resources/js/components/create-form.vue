<template>
    <form @submit.prevent="submit" class="w-100">
        <div class="d-flex w-100">
            <input class="flex-grow-1" type="text" id="name" name="name" v-model="name" required>
            <button type="submit"><i class="fa-solid fa-plus"></i></button>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            name: ""
        }
    },
    
    methods: {
        ...mapActions('tasks', [
            'CREATE'
        ]),
        submit(){
            this.CREATE({
                name: this.name
            })
        }
    }
}
</script>

<style scoped>
    button {
        background: #eee;
        border: solid rgb(133, 133, 133) 1px;
        margin-left: -1px;
        transition: background .1s;
    }
    button:hover{
        background: #aaa;
    }
</style>