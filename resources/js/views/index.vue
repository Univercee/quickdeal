<template>
  <div class="wrapper wrapper-index" style="position: relative;">
    <img src="computer.png" alt="" class="computer">
    <img src="wallpaper.webp" alt="" @click="unfocus" class="wallpaper">
    <div class="icon-wrapper" :style="{backgroundColor: focused?'rgba(0,0,255,.2)':''}" @click="focus" @dblclick="open">
      <img src="taskmanager.png" alt="" class="icon">
      <p style="font-size: 1.5vw;">Task<br/>manager</p>
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
    img.wallpaper{
      position: absolute;
      width: 35vw;
      aspect-ratio: 4/3;
      top: 14%;
    }
    img.computer{
      width: 70vw;
    }
    .icon-wrapper{
      position: absolute;
      cursor: pointer;
      border: dotted gray 1px;
      text-align: center;
      padding: 0 .3vw;
      top: 20%;
      user-select: none;
    }
    img.icon {
      width: 5vw;
      aspect-ratio: square;
    }
</style>