<template>
<nav>   
   <div class="max-w-7xl mx-auto p-4 pb-5">
      <div class="relative items-center">
         <div class="flex items-center justify-between pb-4">
            <!-- Mobile menu button-->
            <div @click="toggleBurger()" aria-controls="mobile-menu" aria-expanded="false">
               <span class="sr-only">Open main menu</span>
               <div class="plate" :class="this.toggle ? 'active' : ''">
                  <svg class="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                     <path class="line line1" d="M 50,35 H 30" />
                     <path class="line line2" d="M 50,35 H 70" />
                     <path class="line line3" d="M 50,50 H 30" />
                     <path class="line line4" d="M 50,50 H 70" />
                     <path class="line line5" d="M 50,65 H 30" />
                     <path class="line line6" d="M 50,65 H 70" />
                  </svg>
               </div>

               <!-- <svg class="h-6 w-6 burger" :class="this.toggle ? 'hidden' : 'block'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
               </svg> -->
               
               <!-- Below SVG is an X for when menu is open -->
               <!-- <svg class="h-6 w-6 burger" :class="!this.toggle ? 'hidden' : 'block'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
               </svg> -->
            </div>
            <social-media />
         </div>
         <div class="brand flex">
            <router-link class="mx-auto" to="/">
              <span class="text-gray-600">VN</span>
              <span class="text-gray-600"> | </span>
              <span class="text-gray-200"><strong>SNIPPETS</strong></span>
            </router-link>
          </div>
      </div>
   </div>
</nav>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialMedia from './SocialMedia.vue';

export default Vue.extend({
   components: { SocialMedia },
   data() {
      return { toggle: false }
   },
   methods: {
      toggleBurger: function() { this.toggle = !this.toggle }
   }
})
</script>

<style scoped>
.brand {
  font-family: 'Merriweather', sans-serif;
  font-weight: 100;
  font-size: 24px;
}

.burger.hidden,
.burger.block {
   transform: rotateX(360);
   transition: all ease-in-out 1000ms;
}

.plate {
   width: 50px;
   height: 50px;
   cursor: pointer;
   border-radius: 10px;
   transition: all ease-in-out 250ms;
}

.plate:hover {
   background-color: #111827;
   border-radius: 20px;
   transition: all ease-in-out 250ms;
}

.burger {
   filter: url(#gooeyness);
   width: 100%;
   height: 100%;
}

.x {
  transform: scale(0);
  transition: transform 400ms;
}

.line {
  fill: none;
  stroke: white;
  stroke-width: 4px;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform-origin: 50%;
  transition: stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms, transform 500ms 200ms;
}

.x .line {
  stroke-width: 5.5px;
}

.active .line {
  transition: stroke-dasharray 500ms, stroke-dashoffset 500ms, transform 500ms;
}

.active .x {
  transform: scale(1);
  transition: transform 400ms 350ms;
}

.plate .x {
  transition: transform 400ms;
}
.plate .line {
  transform-origin: 50%;
  transition: transform 400ms 100ms;
}
.active.plate .line {
  transition: transform 400ms;
}
.active.plate .line1 {
  transform: translateX(18px) translateY(-3px) rotate(-45deg) scale(.7);
}
.active.plate .line2 {
  transform: translateX(-18px) translateY(-3px) rotate(45deg) scale(.7);
}
.active.plate .line3 {
  transform: translateY(0px) rotate(45deg) scale(.7);
}
.active.plate .line4 {
  transform: translateY(0px) rotate(-45deg) scale(.7);
}
.active.plate .line5 {
  transform: translateX(18px) translateY(3px) rotate(45deg) scale(.7);
}
.active.plate .line6 {
  transform: translateX(-18px) translateY(3px) rotate(-45deg) scale(.7);
}
.active.plate .x {
  transition: transform 400ms 100ms;
  transform: scale(1);
}
</style>