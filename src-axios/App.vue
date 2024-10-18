<script setup>
import axios from 'axios'
import {ref,reactive} from 'vue'

let message = reactive({
  "code":1,
  "content":"111"
})


async function getMsg2() {
  let {data} = await getMsg()
  Object.assign(message,data) 
}

function getMsg(){
  let promise = axios({
    method:"get",
    url:"https://api.uomg.com/api/rand.qinghua",
    data:{
    },
    params:{
      format:'json',
      username:"zhangsan"
    }
  })

  promise.then(
  function(response){
    Object.assign(message,response.data)
  }
)}

</script>

<template>
  <div>
    <h1 v-text="message.content"></h1>
    <button @click="getMsg()">change</button>

  </div>
</template>

<style scoped>

</style>
