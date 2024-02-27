export default {
  FETCH_ALL(context) {
    return new Promise((resolve, reject)=>{
      axios.get('/api/tasks/')
        .then((response)=>{
          context.commit("set", response.data)
          resolve(response.data)
        })
        .catch((err)=>{
          reject(err)
        })
    })
  },
  FETCH(context, id) {
    return new Promise((resolve, reject)=>{
      axios.get('/api/tasks/'+id)
        .then((response)=>{
          resolve(response.data)
        })
        .catch((err)=>{
          reject(err)
        })
    })
  },
  CREATE(context, data) {
    return new Promise((resolve, reject)=>{
      axios.post(
        '/api/tasks/',
        data
      )
        .then((response)=>{
          const task = {
            ...data,
            id: response.data.id,
            created_at: response.data.time,
            updated_at: response.data.time
          }
          context.commit("add", task)
          resolve(response.data)
        })
        .catch((err)=>{
          reject(err)
        })
    })
  },
  UPDATE(context, data) {
    return new Promise((resolve, reject)=>{
      axios.patch(
        '/api/tasks/'+data.id,
        data
      )
        .then((response)=>{
          const time = response.data.time
          data.updated_at = time
          context.commit("update", data)
          resolve(time)
        })
        .catch((err)=>{
          reject(err)
        })
    })
  },
  DELETE(context, id) {
    return new Promise((resolve, reject)=>{
      axios.delete('/api/tasks/'+id)
        .then((response)=>{
          context.commit("delete", id)
          resolve(response.data)
        })
        .catch((err)=>{
          reject(err)
        })
    })
  }
}