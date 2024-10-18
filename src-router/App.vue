<script setup>

</script>

<template>
  <div>

    <router-link to="/home">home page</router-link><br>
    <router-link to="/add">add page</router-link><br>
    <router-link to="/update">update page</router-link><br>
    <router-link to="/list">list page</router-link><br>
    <router-link to="/showAll">showAll page</router-link><br>
    <hr>
   <router-view></router-view>
   <hr>


  </div>

</template>

<style scoped>

</style>
