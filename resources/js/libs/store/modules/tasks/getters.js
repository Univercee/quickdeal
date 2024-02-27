export default {
    tasks: (state) => {
      return state.tasks
    },
    taskById: (state, id) => {
      const filteredArray = state.tasks.filter(task=>{task.id == id})
      if(filteredArray.length){
        return filteredArray[0]
      }
      return null
    }
}