<script setup>
  import {onBeforeMount,onMounted,onBeforeUpdate,onUpdated,ref}  from 'vue'
    /*
      生命周期钩子函数：
          onBeforeMount：DOM挂载之前
          onMounted：DOM挂载之后
          onBeforeUpdate：DOM更新之前
          onUpdated：DOM更新之后
          
          
    */
    //准备数据
    let data = ref("测试钩子函数")
   
   let changeData = ()=>{
    data.value = "New Value"
   }

   let dataSpan = ref()
   //挂载之前执行的钩子函数
   onBeforeMount(()=>{
      //获取DOM中的span标签
      let spanEle = document.getElementById("mySpan")
      console.log(spanEle)
   })

   //挂载之后执行的钩子函数
   onMounted(()=>{
      //获取DOM中的span标签
      // let spanEle = document.getElementById("mySpan")
      // console.log(spanEle)
      //获取span标签中的文本值
      // let spanText = spanEle.innerText
      // console.log(spanText);
      //获取span标签中的文本值
      console.log(dataSpan.value.innerText)
   })

   //DOM更新之前执行的钩子函数
   onBeforeUpdate(()=>{
      //获取span标签中的文本值
      console.log("onBeforeUpdate钩子函数中获取的span标签中的文本值："+dataSpan.value.innerText)
   })

   //DOM更新之后执行的函数
   onUpdated(()=>{
      //获取span标签中的文本值
      console.log("onUpdated钩子函数中获取的span标签中的文本值："+dataSpan.value.innerText)
   })

</script>

<template>
  <span style="color: red;" id="mySpan" ref="dataSpan">JS中的数据是：{{ data }}</span><br>
  <button @click="changeData">改变Js中data的值</button>
</template>
