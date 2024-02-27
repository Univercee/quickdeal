<template>
    <table>
        <thead>
            <tr>
                <th>Название</th>
                <th>Дата создания</th>
                <th>Последнее обновление</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="task in tasks">
                <td><input type="text" v-model="task.name" :disabled="!editModeEnabled(task.id)"></td>
                <td>{{ formatDate(task.created_at) }}</td>
                <td>{{ formatDate(task.updated_at) }}</td>
                <td style="width:5rem">
                    <i v-if="!editModeEnabled(task.id)" class="fa-solid button fa-pen-to-square" @click="enableEditMode(task.id)"></i>
                    <div v-else class="d-flex justify-content-center" style="gap:.2rem">
                        <i class="fa-solid button fa-xmark text-danger" @click="cancelEdit(task.id)"></i>
                        <i class="fa-solid button fa-check text-success" @click="submitEdit(task)"></i>
                    </div>
                </td>
                <td><delete-form :id="task.id"></delete-form></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data(){
        return {
            edit: []
        }
    },
    computed:{
        ...mapGetters('tasks', [
            'tasks'
        ]),
    },
    methods:{
        ...mapActions('tasks', [
            'UPDATE'
        ]),
        formatDate(datetime){
            let options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
            let date = new Date(datetime)
            return date.toLocaleDateString("en-US", options)
        },
        enableEditMode(id){
            this.edit.push(id)
        },
        editModeEnabled(id){
            return this.edit.includes(id)
        },
        cancelEdit(id){
            this.edit = this.edit.filter(el => el != id)
        },
        submitEdit(task){
            this.UPDATE(task)
            this.cancelEdit(task.id)
        }
    }
}
</script>

<style scoped>
    th, td {
        padding: 15px;
        text-align: center;
    }
    tr:nth-child(even) {
        background-color: #CCC;
    }
    tr:nth-child(odd) {
        background-color: #FFF;
    }
    .button{
        opacity: .8;
    }
    .button:hover{
        opacity: 1;
        cursor: pointer;
    }
</style>