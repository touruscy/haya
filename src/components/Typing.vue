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
        if (this.i <= this.text.length) {
            this.text2 = this.text.slice(0, this.i++) + '|';
            this.timer = setTimeout(() => {
                this.typing();
            }, 300);
        } else {
          this.text2 = this.text
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
