export default {
    set(state, tasks) {   
      state.tasks = tasks
    },
    delete(state, id) {   
        state.tasks = state.tasks.filter((task)=> task.id != id)
    },
    add(state, task) {   
        state.tasks.push(task)
    },
    update(state, data){
        state.tasks.map(task => {
            if(task.id == data.id){
                task.name = data.name
                task.updated_at = data.updated_at
            }
        })
    }
}