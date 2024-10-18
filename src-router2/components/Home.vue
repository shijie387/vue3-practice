<script setup>
import {useRouter} from 'vue-router'
let router = useRouter()

let username = window.sessionStorage.getItem('username')

function logout(){
  window.sessionStorage.removeItem("username")
  router.push("/login")
}
</script>

<template>
  <div>
    <h1>home page</h1>
    <h3>welcome {{username}} login</h3>

    <button @click="logout()">log out</button>
  </div>
</template>

<style scoped>

</style>
