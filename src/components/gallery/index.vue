<template>
  		<div class="cinema"  >
  			<canvas id="cinema" class="time-rule"></canvas>
  		</div>
</template>

<script>
  import { ge1doot } from './ge1doot.js';
  import { cinema } from './index.js'

  export default{
    name:'Gallery',
    mounted(){
      this.$nextTick(()=> {
        console.log(ge1doot)
        // DOM 更新了
        cinema(ge1doot)
      })

    }
  }
</script>

<style>
</style>
