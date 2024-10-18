<script setup>
import HelloWorld from './components/HelloWorld.vue'

import firstTest from './01.插值表达式.vue'


let message = "test2 attr rendering"
let imgUrl = "https://wx2.sinaimg.cn/bmiddle/bf976b12gy1g4owum66jfg208c064tin.gif"
</script>

<template>

  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <HelloWorld msg="Vite + Vue" />
  </div> -->
  <div>

    <input type="text" v-bind:value="message" /> <br>
    <input type="text" :value="message" /> <br>
    <div v-bind:id="message">div tag</div>
    
    <img v-bind:src="imgUrl" alt="这是蔡徐坤" />
    <img :src="imgUrl" alt="这是蔡徐坤" />



  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
