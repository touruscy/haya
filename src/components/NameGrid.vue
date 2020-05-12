<template>
  <div class="container">
    <div class="left-radius"></div>
    <div class="left">{{leftName}}</div>
    <div class="right">{{rightName}}</div>
    <div class="right-radius"></div>

  </div>
</template>

<script>
  export default {
    name: 'NameGrid',
    data(){
      return{
        leftName:"蔡  渊",
        rightName:"钟晓静"
      }
    }
  }
</script>

<style scoped>
  .container{
    display: flex;
  }
  .left,
  .right{
    height: 40px;
    line-height: 40px;
    width: 150px;
   font-size: 30px;
   font-family: selfFont;
   font-weight: bolder;

  }
  .left-radius,
  .right-radius{
    height: 40px;
    width: 50px;

  }
  .left-radius{
    border-radius: 50% 0 0 50%;
  }
  .right-radius{
    border-radius:  0 50% 50% 0;
  }
  .left,
  .left-radius{
    background-color: skyblue;
    text-align: left;
  }
  .right,
  .right-radius{
    background-color: #ffaaff;
    text-align: right;

  }
</style>
