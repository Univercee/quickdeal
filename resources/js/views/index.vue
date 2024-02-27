<template>
  <div class="wrapper" style="position: relative;">
    <img src="wallpaper.webp" alt="" @click="unfocus">
    <div class="icon-wrapper" :style="{backgroundColor: focused?'rgba(0,0,255,.2)':''}" @click="focus" @dblclick="open">
      <img src="taskmanager.png" alt="" class="icon">
      <p>Диспетчер<br/>задач</p>
    </div>
  </div>
</template>

<script>
import router from '../libs/router'
export default {
  data(){
    return {
      focused: false
    }
  },
  methods: {
    focus(){
      this.focused = true
    },
    unfocus(){
      this.focused = false
    },
    open(){
      router.push({name: 'taskmanager'})
    }
  }
}
</script>

<style scoped>
    img{
      width: 70vw;
      aspect-ratio: 16/9;
    }
    .icon-wrapper{
      position: absolute;
      cursor: pointer;
      border: dotted gray 1px;
      text-align: center;
      padding: 0 .3rem;
      top: 20%;
      user-select: none;
    }
    img.icon {
      height: 50px;
      width: 50px;
    }
</style>