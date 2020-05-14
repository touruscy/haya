<template>

  <div class="container">
    <!-- leave-active-class="animated shake" -->
    <transition
      name="fade"
      enter-active-class="animate__animated animate__fadeInDown"

    >
      <div class="text-box" v-show="show">
        <span>{{ flow_one }}</span>
      </div>
    </transition>
    <template
      v-for="item in flowOther"
    >
    <transition
      name="fade"
      :enter-active-class="item.delayClass"

    >
      <div class="text-box" v-show="show">
        <span>{{ item.text1}}</span>
        <NumberGrow v-if="item.num && show" :value="item.num" :time="item.flowTime" :delayTime="item.delayTime"></NumberGrow>
        <span ref="newTime">{{ item.text2}}</span>
      </div>
    </transition>
    </template>

  </div>

</template>

<script>
  import 'animate.css';
  import NumberGrow from '@/components/NumberGrow.vue'
  import { getDiff,writeCurrentDate } from '@/utils/tools.js'
  export default {
    name:'TextScoll',
    components:{
      NumberGrow
    },
    data(){
      return {
        show:false,
        flow_one:'四年一轮回，八年一生爱',
        flowOther:[
          {
            text1:'2011年9月1号，我们相识',
            text2:'',
            delayClass:'animate__animated animate__fadeInDown animate__slow animate__delay-2s',
            num:'',
            flowTime:5,
            delayTime:2
          },
          {
            text1:'2015年2月13号，我们相处',
            text2:'',
            delayClass:'animate__animated animate__fadeInDown animate__slow animate__delay-4s',
            num:'',
            flowTime:5,
            delayTime:4
          },
          {
            text1:'2019年2月12号，我们相爱',
            text2:'',
            delayClass:'animate__animated animate__fadeInDown animate__slow animate__delay-6s',
            num:'',
            flowTime:5,
            delayTime:6
          }
        ]
      }
    },
    methods:{
      set_data(){
        let flowOther = this.flowOther
        let time = [new Date('2011/09/01'),new Date('2015/02/15'),new Date('2019/2/12')]
        let date = new Date()
        let time_list = writeCurrentDate()
        for(let i=0; i< flowOther.length;i++){
            let item = flowOther[i]
            item.num = getDiff(time[i],date)
            let text2 = '天'
            if(i>0){
              text2 = i==1? `天${time_list[0]}小时` : `天${time_list[0]}小时${time_list[1]}分钟`

            }
            item.text2 = text2
        }
        this.flowOther = flowOther

        this.show = true
      }
    },

    mounted(){
      this.set_data()

      // 设置得到当前日期的函数的执行间隔时间，每1000毫秒刷新一次。
      setInterval(()=>{
        let time_list = writeCurrentDate()
        let objList = this.$refs.newTime
        objList.forEach((ele,i)=>{
          if(i>0){
            let text2 = i==1? `天${time_list[0]}小时` : `天${time_list[0]}小时${time_list[1]}分钟`
            ele.innerHTML = text2
          }

        })
      },3600);
    }

  }

</script>

<style scoped>
  .text-box{

        font-style: oblique;
        font-family: cursive;
        font-weight: bold;
        font-size: 26px;
        background-image: -webkit-linear-gradient(left,#0083C3,#03CAFC);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding: 5px;
        display: inline-flex;
        align-items:baseline
    }
   .animate__animated.animate__delay-6s {
     -webkit-animation-delay: calc(1s * 6);
     animation-delay: calc(1s * 6);
     -webkit-animation-delay: calc(var(--animate-delay) * 6);
     animation-delay: calc(var(--animate-delay) * 6);
   }
   .container{
     display: flex;
     flex-direction: column;
     align-items: center;
   }
</style>
