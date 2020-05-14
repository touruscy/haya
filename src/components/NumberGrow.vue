<template>
<div class="number-grow-warp">
 <span ref="numberGrow" :data-time="time" class="number-grow" :data-value="value">0</span>
 </div>
</template>
<script>
export default {
 props: {
  time: {
   type: Number,
   default: 2
  },
  value: {
   type: Number,
   default: 0
  },
  delayTime:{
    type:Number,
    default:0
  }
 },
 methods: {
  numberGrow (ele) {
   let _this = this
   let step = (_this.time * 1000) / (_this.value *10)
   let current = 0
   let start = 0
   let t = setInterval(function () {
    start += 1
    if (start > _this.value) {
     clearInterval(t)
     start = _this.value
     t = null
    }
    if (current === start) {
     return
    }
    current = start
    ele.innerHTML = current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, '$1,')
   }, step)
  }
 },
 mounted () {
  if(this.value!=0){
    setTimeout(()=>{
      this.numberGrow(this.$refs.numberGrow)
    },this.delayTime*1000)
   }
 }
}
</script>
<style>
.number-grow-warp{
 transform: translateZ(0);
}
.number-grow {
 font-family: Arial-BoldMT;
 background-image: -webkit-linear-gradient(left,#0083C3,#03CAFC);
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
 letter-spacing:5px
}
</style>
