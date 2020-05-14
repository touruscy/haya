<template>
  <div class="app-container">
    <div class="menu">
      <Submenu />
    </div>
    <time-liver></time-liver>
    <div class="text">
       <TextScoll></TextScoll>

    </div>

  </div>
</template>

<script>
  import { httpService } from '../../config'
  import TimeLiver from '@/components/TimeLiver.vue'
  import Submenu from '@/components/Submenu.vue'
  import TextScoll from '@/components/TextScoll.vue'

  import '@/utils/effect/EffectItem.js'
  import '@/utils/effect/Effect.js'

  export default{
    name:'LoveRiverApp',
    components:{
      TimeLiver,
      Submenu,
      TextScoll
    },
    data(){
      return{
      }
    },
    methods:{
      downPhoto(){

        let effectUrl = [
          "/static/images/photoDown/xue.png",
          "/static/images/photoDown/xin.png",
          "/static/images/photoDown/a1.png",
          "/static/images/photoDown/a2.png",
          "/static/images/photoDown/a3.png",
          "/static/images/photoDown/a4.png",
          "/static/images/photoDown/a5.png", ]
       effectUrl.forEach((item,index)=>{
         item = httpService.baseUrl + item
         effectUrl[index] = item
         console.log(item)
       })
       console.log(effectUrl)
        // 图案下落效果

        new Effect({
        //特效图片，多张图片时传入数组，单个图片时传入字符串
        effectUrl : effectUrl,
        //特效旋转，1/true为旋转，0/false为不旋转
        rotate : 1,
        //特效方向，left/right/up/down
        direction : "up"
      	});
      }
    },
    mounted(){
      this.$nextTick(()=> {
        // DOM 更新了
        this.downPhoto()
      })

    }
  }
</script>

<style>
  .app-container{
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    border: 2px dashed #666666;

  }
  .text{
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:calc(100% - 64px);
    padding:30px
  }
</style>
