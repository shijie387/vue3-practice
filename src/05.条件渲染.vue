<script setup>
    /*
      条件渲染：
          语法：v-if="数据对应的变量名" v-else，相当于Java中的if else判断
              或者使用v-show
          作用：当条件满足时才能渲染数据
          v-if和v-show的区别
            v-if当条件不满足时会删除DOM；v-show当条件不满足时不会删除DOM，只是通过CSS样式将DOM隐藏
    */
    //准备数据
    let age = 16

    </script>

<template>
    <p v-if="age >= 18">成年人</p>
    <p v-else>未成年</p>
    <p v-show="age >= 18">已成年</p>
    <p v-show="age < 18">小屁孩儿</p>
</template>
