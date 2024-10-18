<script setup>
    /*
      列表渲染：
          语法：v-for="数据对应的变量名" 
          作用：用来遍历数组，相当于Java中的for循环
    */
    //准备数据
    let userArray = [
      {id:1,name:"蔡徐坤",age:26},
      {id:2,name:"吴亦凡",age:38},
      {id:3,name:"卢本伟",age:30},
      {id:4,name:"简自豪",age:30},
      {id:5,name:"丁真",age:22}
    ]
</script>

<template>
    <div v-if="userArray.length > 0">
      <h1>用户列表</h1>
      <table border="1" cellspacing="0" cellpadding="20">
          <tr>
            <th>索引</th>
            <th>编号</th>
            <th>姓名</th>
            <th>年龄</th>
            <th colspan="2">操作</th>
          </tr>
          <tr v-for="(user,index) in userArray">
            <td>{{ index }}</td>
            <td>{{ user.id }}</td>
            <td v-text="user.name"></td>
            <td>{{ user.age }}</td>
            <td>
              <a href="#">编辑</a>
            </td>
            <td>
              <a href="#">删除</a>
            </td>
          </tr>
      </table>
    </div>
    <div v-else>
      <h1>没有任何用户</h1>
    </div>
</template>
