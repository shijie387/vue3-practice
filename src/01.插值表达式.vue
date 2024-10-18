<script setup>
    /*
      插值表达式
          语法：{{数据对应的变量名}}
          作用：可以将Js中的数据渲染到DOM的任意位置，可以不借助于标签，比较灵活
          插值表达式中还可以进行运算及调用函数
    */
    //准备数据
    let message = "测试插值表达式"
    let age = 18
    //声明一个函数
    let fun = ()=>{
      return "fun函数的返回值"
    }


    let mymsg = "mymsg test"
    let myage = 18
    let myfun = ()=>{
        return "result of this fun"
    }
    </script>

<template>

    <div>
    {{ message }}
    <span style="color: red;">{{ message }}</span>
    <p>{{ message }}</p>
    <h1>{{ message }}</h1>
    <div>{{ age >= 18 ? "已成年" :"小屁孩儿" }}</div>
    <h2>{{ fun() }}</h2>



    {{myfun}}
    {{myage >= 18? "yes":"no"}}
    {{mymsg}}
    </div>
</template>
