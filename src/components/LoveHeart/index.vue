<template>
  <!-- 爱心按钮 -->
  <div class="pinkboard">
    <div :class="heartClick?'love-btn liked':'love-btn'"  id="toggle">
      <svg height="320" width="320" class="like" @click="changeClass">
        <path class="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90" fill="white" /> <!-- 80 by 70 -->
      </svg>

      <!-- DECORATIONS (quite a lot of them) -->
      <div class="dot dot-1"></div>
      <div class="dot dot-2"></div>
      <div class="dot dot-3"></div>
      <div class="dot dot-4"></div>
      <div class="dot dot-5"></div>
      <div class="dot dot-6"></div>
      <div class="dot dot-7"></div>
      <div class="dot dot-8"></div>

      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-1">
        <path class="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>
      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-2">
        <path class="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>
      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-3"><path class="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>
      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-4"><path class="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>

      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-5"><path class="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>
      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-6"><path class="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>
      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-7"><path class="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>
      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-8"><path class="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>

      <svg height="110" width="110" viewBox="0 0 320 320" class="fly fly-1"><path class="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>
      <svg height="110" width="110" viewBox="0 0 320 320" class="fly fly-2"><path class="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoveHeart',
    data(){
       return{
          heartClick:false
       }
    },
    methods:{
        changeClass(e){
          this.heartClick = true
          setTimeout(()=>{
            this.heartClick = false
          },1000)
        }
      }
  }
</script>

<style >

  .love-btn{
  	z-index: 999
  }
  svg.like {
    position: absolute;
    z-index: 10;
    top: calc(50vh + 45px);
    left: calc(50vw - 160px);
    border-radius: 100%;
    -webkit-transform: scale(0.3);
            transform: scale(0.3);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    box-shadow: 0 0 250px rgba(0, 0, 0, 0.2);
    background: #dc2525;
    cursor: pointer;
  }

  svg.fly {
    position: absolute;
    top: calc(50vh + 145px);
    left: calc(50vw - 55px);
    fill: #18FFFF;
  }

  svg.h {
    position: absolute;
    z-index: 8;
    top: calc(50vh + 175px);
    left: calc(50vw - 20px);
    fill: #fbff00;
  }
  svg.h.h-5, svg.h.h-6, svg.h.h-7, svg.h.h-8 {
    fill: #00ffb8;
  }

  div.dot {
    width: 12px;
    height: 12px;
    background: white;
    position: absolute;
    z-index: 9;
    border-radius: 100%;
    top: calc(50vh + 189px);
    left: calc(50vw - 6px);
  }
  div.dot:before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 100%;
    top: -20px;
    left: 2px;
    position: absolute;
    background: white;
  }
  div.dot:after {
    content: "";
    width: 11px;
    height: 11px;
    border-radius: 100%;
    top: -160px;
    left: 2px;
    position: absolute;
    background: white;
    display: none;
  }


  .love-btn.liked svg.like {
    -webkit-animation: blink 1s forwards;
            animation: blink 1s forwards;
  }
  .love-btn.liked svg.fly.fly-1 {
    -webkit-animation: fly-1 1s 0.1s;
            animation: fly-1 1s 0.1s;
  }
  .love-btn.liked svg.fly.fly-2 {
    -webkit-animation: fly-2 1s 0.1s;
            animation: fly-2 1s 0.1s;
  }
  .love-btn.liked svg.h {
    transition: margin cubic-bezier(0.165, 0.84, 0.44, 1) 1.4s, fill 0.2s 1s, opacity 0.2s 1.2s, -webkit-transform 0.2s 1s;
    transition: margin cubic-bezier(0.165, 0.84, 0.44, 1) 1.4s, transform 0.2s 1s, fill 0.2s 1s, opacity 0.2s 1.2s;
    transition: margin cubic-bezier(0.165, 0.84, 0.44, 1) 1.4s, transform 0.2s 1s, fill 0.2s 1s, opacity 0.2s 1.2s, -webkit-transform 0.2s 1s;
    opacity: 0;
  }
  .love-btn.liked svg.h.h-5, .love-btn.liked svg.h.h-6, .love-btn.liked svg.h.h-7, .love-btn.liked svg.h.h-8 {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
    fill: white;
  }
  .love-btn.liked svg.h.h-1 {
    margin-top: -200px;
  }
  .love-btn.liked svg.h.h-2 {
    margin-left: 200px;
  }
  .love-btn.liked svg.h.h-3 {
    margin-top: 200px;
  }
  .love-btn.liked svg.h.h-4 {
    margin-left: -200px;
  }
  .love-btn.liked svg.h.h-5 {
    margin-top: -140px;
    margin-left: 140px;
  }
  .love-btn.liked svg.h.h-6 {
    margin-top: 140px;
    margin-left: 140px;
  }
  .love-btn.liked svg.h.h-7 {
    margin-top: -140px;
    margin-left: -140px;
  }
  .love-btn.liked svg.h.h-8 {
    margin-top: 140px;
    margin-left: -140px;
  }
  .love-btn.liked div.dot {
    opacity: 0;
    -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
    background: #00e5ff;
    transition: opacity 0.5s 1s, background 0.1s 0.2s, -webkit-transform 1s;
    transition: transform 1s, opacity 0.5s 1s, background 0.1s 0.2s;
    transition: transform 1s, opacity 0.5s 1s, background 0.1s 0.2s, -webkit-transform 1s;
  }
  .love-btn.liked div.dot:after {
    display: block;
  }
  .love-btn.liked div.dot.dot-2 {
    -webkit-transform: rotate(45deg) translateY(-100px);
            transform: rotate(45deg) translateY(-100px);
  }
  .love-btn.liked div.dot.dot-3 {
    -webkit-transform: rotate(90deg) translateY(-100px);
            transform: rotate(90deg) translateY(-100px);
  }
  .love-btn.liked div.dot.dot-4 {
    -webkit-transform: rotate(135deg) translateY(-100px);
            transform: rotate(135deg) translateY(-100px);
  }
  .love-btn.liked div.dot.dot-5 {
    -webkit-transform: rotate(180deg) translateY(-100px);
            transform: rotate(180deg) translateY(-100px);
  }
  .love-btn.liked div.dot.dot-6 {
    -webkit-transform: rotate(225deg) translateY(-100px);
            transform: rotate(225deg) translateY(-100px);
  }
  .love-btn.liked div.dot.dot-7 {
    -webkit-transform: rotate(270deg) translateY(-100px);
            transform: rotate(270deg) translateY(-100px);
  }
  .love-btn.liked div.dot.dot-8 {
    -webkit-transform: rotate(305deg) translateY(-100px);
            transform: rotate(305deg) translateY(-100px);
  }
  @-webkit-keyframes blink {
    10% {
      -webkit-transform: scale(0.42);
              transform: scale(0.42);
      background: #8815b7;
    }
    100% {
      background: #e01f4f;
    }
  }

  @keyframes blink {
    10% {
      -webkit-transform: scale(0.42);
              transform: scale(0.42);
      background: #8815b7;
    }
    100% {
      background: #e01f4f;
    }
  }
  @-webkit-keyframes fly-1 {
    25% {
      margin: -100px 0 0 100px;
    }
    75% {
      margin: 100px 0 0 -100px;
      z-index: 5;
    }
    100% {
      z-index: 11;
    }
  }
  @keyframes fly-1 {
    25% {
      margin: -100px 0 0 100px;
    }
    75% {
      margin: 100px 0 0 -100px;
      z-index: 5;
    }
    100% {
      z-index: 11;
    }
  }
  @-webkit-keyframes fly-2 {
    25% {
      margin: -100px 0 0 -100px;
    }
    75% {
      margin: 100px 0 0 100px;
      z-index: 5;
    }
    100% {
      z-index: 11;
    }
  }
  @keyframes fly-2 {
    25% {
      margin: -100px 0 0 -100px;
    }
    75% {
      margin: 100px 0 0 100px;
      z-index: 5;
    }
    100% {
      z-index: 11;
    }
  }
</style>
