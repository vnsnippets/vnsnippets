<template>
      <div class="panel" :class="this.active? 'active' : 'inactive'">
         <div class="navigation">
            <router-link to="/blog">Blog</router-link>
            <router-link to="/about">About</router-link>

            <div class="mt-5">
               <social-media theme="light"></social-media>
            </div>
            <div class="motto mt-5">
               <p>Playground and stuff</p>
            </div>
         </div>
      </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialMedia from './SocialMedia.vue'
export default Vue.extend({
   components: { SocialMedia },
   props: [ 'active' ]
})
</script>

<style scoped>
.navigation a {
   display: block;
   margin-bottom: 10px;
}

.panel {
   font-family: 'Merriweather', sans-serif;
   overflow-y: auto;
   background-color: #111827;
   color: #F3F4F6;
   text-align: center;
   position: fixed;
   left: 0;
   top: 0;
   height: 100vh;
   z-index: 10;
   padding: 100px;
   max-width: 560px;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   left: -560px;
}

.panel.inactive {
   animation: slide-out 2s ease;
   left: -560px;
}

.panel.active {
   animation: slide-in 1.5s ease;
   left: 0;
}

@keyframes slide-in {
  0% {
   opacity: 0;  
   left: -560px;  
  }
  100% {
   left: 0px;
   opacity: 1;
  }
}


@keyframes slide-out {
  0% {
     left: 0;
    opacity: 1;   
  }
  100% {
     transform: translateX(-560px);
    opacity: 0;
  }
}
</style>