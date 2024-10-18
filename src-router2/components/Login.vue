<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
let router = useRouter()

let username = ref('')
let password = ref('')

function login(){
  if(username.value == 'root' & password.value == '123456'){
  window.sessionStorage.setItem("username", username.value)

  router.push("/home")}

  else{
    alert("invalid")
  }
}

function logout(){
  window.sessionStorage.removeItem("username")
  router.push("/login")
}

</script>

<template>
  <div>
    account: <input type="text" v-model="username"> <br>
    password: <input type="text" v-model="password"> <br>

    <button @click="login()">login</button>
    
  </div>
</template>

<style scoped>

</style>
