<script setup>
    /*
      文本渲染
          语法：v-text="数据对应的变量名"或v-html="数据对应的变量名"
          作用：可以将Js中的数据渲染到DOM的成对出现的标签体中
          v-text和v-html的区别
            v-html可以解析HTML标签，v-text不可以解析HTML标签
    */
    //准备数据
    let message = "测试文本渲染"
    let msg = "<font color='red'>我要红</font>"
    </script>

<template>
<div>
    <span style="color: red;" v-text="message"></span>
    <p v-text="message"></p>
    <h1 v-text="message"></h1>
    <div v-html="message"></div>
    <!-- 测试v-text和v-html的区别 -->
    <p v-text="msg"></p>
    <p v-html="msg"></p>
</div>
</template>
