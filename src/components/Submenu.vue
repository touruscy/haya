<template>
  <div class="submenu-container">
  <el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  :router="true"
  @select="handleSelect"
  background-color="transparent">
  <el-submenu index="2">
      <div slot="title" class="menu-title">
          <i class="el-icon-s-home"></i>
          <span>爱的导航</span>

      </div>
      <el-menu-item
        v-for="(item,index) in title_list"
        :index="item.path">{{ item.name }}</el-menu-item>
    </el-submenu>
   </el-menu >
   </div>
</template>

<script>
  export default {
    name:"Submenu",
    data(){
      return{
        activeIndex:'1',
        title_list:[
          {
            name:'爱的长河',
            path:'/loveRiver'
          },
          {
            name:'爱的相册',
            path:'/lovePhoto'
          },
          {
            name:'爱的言语',
            path:'/loveSpeech'
          }
        ]
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style >
  .submenu-container{
    border-radius: 20px;
  }
  .menu-title{
    display: inline-block;
    font-size: 25px;
    color: white;
    font-family: selfFont;
    border-radius: 20px;

  }
  .menu-title i{
      font-size: 25px !important;
      color:white !important;

  }
  .el-submenu__icon-arrow{
    font-size: 0!important;
  }
  .el-menu-item{
    font-size: 20px;
    font-family: selfFont;
    font-weight: 600;
    text-align: center;
    border-radius: 20px;
  }
  .el-menu.el-menu--horizontal{
    border-bottom: none;
  }
</style>
