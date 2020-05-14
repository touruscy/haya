<template>
  <div class="box"  :style="{backgroundImage: 'url(' + imgBg + ')' }">
    <div class="box1">
      <ul class="box2-1">
        <template
          v-for="(item,index) in items"

        >
        <li :class="['box2-1-'+(index+1), 'boxh']"><img :src="imgCircle" />
           <span>{{ item.title}}</span>
           <p class="boxp">{{item.content}}</p>
        </li>
        </template>
      </ul>
      <div class="box2" :style="{backgroundImage: 'url(' + imgAll + ')' }" ></div>
    </div>
  </div>

</template>

<script>
  import { httpService } from '../config'
  export default {
    name:"TimeLiver",
    data(){
      return {
        imgBg:`${ httpService.baseUrl }/static/images/river/line_bg.png`,
        imgAll:`${ httpService.baseUrl }/static/images/river/line_all.png`,
        imgCircle:`${ httpService.baseUrl }/static/images/river/cicle.png`,
        items:[
          {
            title:'xxx',
            content:'xxx'
          }
        ]
      }
    }
  }
</script>

<style>
  .box{
  	width: 1207px;
  	height: 2068px;
  	display: block;
      top: 50%;
      left: 50%;
  	background-position-x: 0px;
    background-position-y: 0px;
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
  	margin: auto;
  }
  .box2{
  	width: 1207px;
      height: 0px;
      display: block;
      position: absolute;
      background-position-x: 0px;
      background-position-y: 0px;
      background-repeat-x: no-repeat;
      background-repeat-y: no-repeat;
      animation: aa 5s linear;
      animation-fill-mode: forwards;

  }
  .box2-1{
  	width: 1207px;
  	height: 2000px;
  	position: absolute;
  }
  .box2-1 span{
  	font-size: 16px;
  	color: red;
  	font-weight: 600;
  }
  .box2-1 p{
  	opacity: 0;
  	/*color: #FF0000;*/
  	color: #333333;
  	transition: all .5s linear;
  }
  .boxh img{
  	width: 17px;
  	height: 17px;
  	animation:img1 .8s infinite;
  }
  .box2-1-1,.box2-1-2,.box2-1-3,.box2-1-4,.box2-1-5{
  	position:absolute ;
  	z-index: 999;
  	opacity: 0;
  	cursor: pointer;

  }
  .boxh img:hover{
  	width: 20px;
  	height: 20px;
  }
  .boxh:hover .boxp{
  	opacity: 1;
  }
  .box2-1-1{
  	top: 14%;
  	left: 20%;
  	animation: bb1 3s ease-in-out;
  	animation-fill-mode: forwards;
  }
  .box2-1-2{
  	top: 24%;
  	left: 26%;
  	animation: bb2 5s ease-in-out;
  	animation-fill-mode: forwards;

  }
  .box2-1-3{
  	top: 34%;
  	left: 40%;
      animation: bb3 5s ease-in-out;
      animation-fill-mode: forwards;

  }
  .box2-1-4{
  	top: 48%;
  	left: 40%;
  	animation: bb4 5s ease-in-out;
  	animation-fill-mode: forwards;

  }
  .box2-1-5{
  	top: 58%;
  	left: 52%;
  	animation: bb5 5s ease-in-out;
  	animation-fill-mode: forwards;

  }
  @keyframes img1{
  	from{width: 15px; height: 15px;}
  	to{width: 20px; height: 20px;}
  }
  @keyframes bb1{
  	from{ opacity: 0;}
  	to{opacity: 1;}
  }
  @keyframes bb2{
  	from{ opacity: 0;}
  	to{opacity: 1;}
  }
  @keyframes bb3{
  	from{ opacity: 0;}
  	to{opacity: 1;}
  }
  @keyframes bb4{
  	from{ opacity: 0;}
  	to{opacity: 1;}
  }
  @keyframes bb5{
  	from{ opacity: 0;}
  	to{opacity: 1;}
  }
  @keyframes aa
  {
     0%{
     	  height: 0;
     }
     20%{
     	height: 413px;

     }
     40%{
     	height: 826px;
     }
      60%{
     	height: 1239px;
     }
      80%{
     	height: 1653px;
     }
      100%{
     	height: 2068px;
     }
  }

</style>
