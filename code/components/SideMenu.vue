<template>
   <div class="sidebar" :class="this.active? 'active' : 'inactive'">
      <div class="panel">
         <nuxt-link v-for="e in links" :key="e.name" :to="e.route">{{ e.name }}</nuxt-link>

         <div class="my-10">
            <social-media theme="light"></social-media>
         </div>
         <div class="motto">
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
   props: [ 'active' ],
   data: () => ({
      links: [
         { route: "/blog", name: "Blog" },
         { route: "/about", name: "About" }
      ]
   })
})
</script>

<style scoped>
.sidebar {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
}

.panel a {
   display: block;
}

.panel a:hover {
   font-weight: 600;
}

.panel a.active-link {
   font-weight: 600;
   pointer-events: none;
   color: #D1D5DB;
}

.panel a:not(:last-of-type) {
   margin-bottom: 15px;
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
   height: 100%;
   z-index: 99;
   padding: 100px;
   max-width: 560px;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   left: -560px;
}

.sidebar.inactive .panel {
   animation: slide-out 0.5s ease;
   left: -560px;
}

.sidebar.active .panel {
   animation: slide-in 0.25s ease;
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