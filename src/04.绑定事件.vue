<script setup>
    /*
      绑定事件
          语法：v-on:事件名="函数名"
              简写：@事件名="函数名"
          作用：给DOM中的元素绑定对应的事件
          .once：事件只触发一次
          .prevent：阻止默认行为，例如：提交的按钮的默认行为是提交表单；超链接的默认行为是跳转页面
    */
    //声明函数
    //点击按钮触发的事件
    let clickMe = ()=>{
      console.log("你点我干啥")
    }
    //文本框中的内容发生变化之后触发的事件
    let changeContent = ()=>{
      console.log("文本框中的内容发生了变化")
    }
    //文本框失去焦点之后触发的事件
    let loseForce = ()=>{
      console.log("我失宠了")
    }
    //只触发一次的函数
    let onceFun = ()=>{
      console.log("我只执行一次")
    }
    //点击超链接触发的函数
    let stopJump = (event)=>{
      //阻止默认行为
      event.preventDefault()
    }
    </script>

<template>
<div>
  <!-- 绑定单击事件 -->
    <button v-on:click="clickMe">点我有惊喜</button>
    <!-- 单击事件简写 -->
    <button @click="clickMe">点我有惊喜</button><br>
    <!-- 给文本框绑定内容改变的事件 -->
    文本框：<input @change="changeContent"/><br>
    <!-- 给文本框绑定失去焦点的事件 -->
    文本框：<input @blur="loseForce" /><br>
    <!-- 测试单击事件只触发一次 -->
    <button @click.once="onceFun">点我之后单击事件只触发一次</button><br>
    <!-- 去尚硅谷官网 -->
    <a href="http://www.atguigu.com" target="_blank">尚硅谷官网</a><br>
    <!-- 阻止超链接的跳转（默认行为） -->
    <a href="http://www.atguigu.com" target="_blank" @click.prevent="">使用.prevent阻止去尚硅谷官网</a><br>
    <!-- 使用原生Js的方式阻止默认行为 -->
    <a href="http://www.atguigu.com" target="_blank" @click="stopJump($event)">使用原生JS阻止去尚硅谷官网</a><br>

</div>
</template>
