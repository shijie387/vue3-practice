<script setup>
import {definedPerson} from '../store/store.js'
let person = definedPerson()

</script>

<template>
  <div>
    operate data

    name: <input type="text" v-model="person.username">
    age: <input type="text" v-model="person.age">
    <span>{{person.getAge}}</span>
    <hr>
    hobbies:
    <br>
    sing<input type="checkbox" value="sing" v-model="person.hobbies">
    dance<input type="checkbox" value="dance" v-model="person.hobbies">
    yoga<input type="checkbox" value="yoga" v-model="person.hobbies">
    swim<input type="checkbox" value="swim" v-model="person.hobbies">
    <hr>

    <button @click="person.doubleAge()">double age</button><br>

    <button @click="person.$reset()">reset as default</button><br>

    <button @click="person.$patch({username:'atm',age:22,hobbies:['yoga','swim']})">change to atm</button>

    

    <hr>  
    {{person}}
  </div>
</template>

<style scoped>

</style>
