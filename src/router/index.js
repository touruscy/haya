import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

import App from '@/pages/App.vue'
import LoveRiverApp from '@/pages/LoveRiverApp/index.vue'
import LovePhotoApp from '@/pages/LovePhotoApp/index.vue'
import LoveSpeechApp from '@/pages/LoveSpeechApp/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:App},
    {
      path: '/loveRiver',
      name: 'loveRiver',
      component: LoveRiverApp
    },
    {
      path: '/lovePhoto',
      name: 'lovePhoto',
      component: LovePhotoApp
    },
    {
      path: '/loveSpeech',
      name: 'loveSpeech',
      component: LoveSpeechApp
    }
  ]
})
