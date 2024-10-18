<script setup>
import {defineEmits} from 'vue'

const emits = defineEmits(["sendMenu"])

function send(data){
  emits("sendMenu",data)
}

</script>

<template>
  <div>
   <ul>
    <li @click="send('M1')">M1</li>
    <li @click="send('M2')">M2</li>
    <li @click="send('M3')">M3</li>
    <li @click="send('M4')">M4</li>
   </ul>
  </div>
  
</template>

<style scoped>

</style>
