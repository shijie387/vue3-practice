<script setup>
  import {ref,reactive}  from 'vue'
    /*
      响应式：JS中的数据变DOM也变，Vue2默认就是响应式的，Vue3默认不是响应式的，需要使用ref或reactive函数将数据变成响应式的
          数据通过ref或reactive包装后将变成ref对象或reactive对象
          ref和reactive的区别
            1.ref可以包装基本类型（字符串、数字、布尔类型等）和引用类型（数组、对象）；reactive只能包装引用类型
            2.ref包装的数据在JS中如何要获取或设置值需要加.value，在DOM中不需要加.value；reactive包装的数据在JS和DOM中都不需要添加.value
            3.ref包装的对象对象和对象的属性都是响应式的；reactive包装的对象，对象不是响应式的，对象的属性式响应式的
          
    */
    //准备数据
    let count = ref(35)
    let totalCount = reactive(100)
    let refObj = ref({
      name:"蔡徐坤",
      age:28
    })
    let reactiveObj = reactive({
      name:"吴亦凡",
      age:38
    })

    //准备函数
    let changeRefValue = ()=>{
      //修改count的值
      count.value = 350
    }
    let changeReactiveValue = ()=>{
      //修改totalCount的值
      totalCount = 1000
    }
    let changeRefObj = ()=>{
      //修改refObj的值
      refObj.value = {
        name:"ikun",
        age:26
      }
    }
    let changeReactiveObj = ()=>{
      //修改reactiveObj的值
      reactiveObj = {
        name:"吴签",
        age:36
      }
    }
    let changeRefObjAttr = ()=>{
      refObj.value.name = "坤坤"
    }
    let changeReactiveObjAttr = ()=>{
      reactiveObj.name = "吴签"
    }

</script>

<template>
   <p>班级总人数：{{ count }}</p>
   <p>全校总人数：{{ totalCount }}</p>
   <p>使用ref包装的对象：{{ refObj }}</p>
   <p>使用reactive包装的对象：{{ reactiveObj }}</p>
   <button @click="changeRefValue">修改使用ref包装基本类型数据</button><br>
   <button @click="changeReactiveValue">修改使用reactive包装基本类型数据</button><br>
   <button @click="changeRefObj">修改使用ref包装的对象</button><br>
   <button @click="changeReactiveObj">修改使用reactive包装的对象</button><br>
   <button @click="changeRefObjAttr">修改使用ref包装的对象的属性</button><br>
   <button @click="changeReactiveObjAttr">修改使用reactive包装的对象的属性</button><br>

</template>
