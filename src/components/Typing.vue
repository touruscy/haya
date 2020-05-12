<template>
  <div class="typing-container">
     {{text2}}
  </div>
</template>

<script>
  export default {
    name: 'Typing',
    props:{
       text:{
         type:String,
         default:''
       }
    },
    data () {
      return {
         i: 0,
         timer: 0,
         text2: "",

      }
    },
    watch: {
      text(newV,oldV){
        this.typing();
      }
    },
    methods: {
      typing() {
        console.log(this.text)
        if (this.i <= this.text.length) {
            this.text2 = this.text.slice(0, this.i++) + '_';
            this.timer = setTimeout(() => {
                this.typing();
            }, 300);
        } else {
            clearTimeout(this.timer)
        }
      }
    },
    mounted() {
      this.typing();
    },
    updated(){
      
    }
  }
  </script>

<style>
  .typing-container{
    font-family: selfFont;
    font-size: 30px;
  }
</style>
