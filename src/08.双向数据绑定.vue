<script setup>
  import {ref,reactive}  from 'vue'
    /*
      双向数据绑定：JS中的数据变DOM变，DOM变JS中的数据也跟着变
          语法：v-model:value="数据对象的变量名"
            简写：v-model="数据对象的变量名"，在Vue3中只能使用简写
            注意：双向的数据绑定只能使用在可以手动修改属性值的标签中，例如：input标签.select标签
          
          
    */
    //准备数据
    let data = ref("测试双向的数据绑定")
   
   let changeData = ()=>{
    data.value = "New Value"
   }
</script>

<template>
  <span style="color: red;">JS中的数据是：{{ data }}</span><br>
  <!-- 单向的数据绑定 -->
    文本框：<input :value="data"/><br>
    <!-- 双向的数据绑定 -->
     文本框：<input v-model="data"/><br>
    <button @click="changeData">修改JS中的数据</button>

</template>
