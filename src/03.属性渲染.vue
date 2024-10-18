<script setup>
    /*
      属性渲染
          语法：v-bind:属性名="数据的变量名"
              简写：:属性名="数据的变量名"
          作用：可以将Js中的数据渲染到DOM的标签的属性中
    */
    //准备数据
    let message = "测试属性渲染"
    
    //设置图片地址
    let imageUrl = "https://wx2.sinaimg.cn/bmiddle/bf976b12gy1g4owum66jfg208c064tin.gif"
    </script>

<template>
<div>
    文本框：<input type="text" v-bind:value="message" /><br>
    文本框：<input type="text" :value="message" /><br>
    <div v-bind:id="message">这是div标签</div>
    <img v-bind:src="imageUrl" alt="这是蔡徐坤" />
    <img :src="imageUrl" alt="这是蔡徐坤" />
</div>
</template>
