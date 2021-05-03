<template>
<nav>   
   <side-menu :active="this.toggle" />
   <div class="max-w-7xl mx-auto p-4 pb-5">
      <div class="relative items-center">
         <div class="flex items-center justify-between pb-4">
            <!-- Mobile menu button-->
            <a class="burger" :class="this.toggle ? 'active' : 'inactive'" @click="toggleBurger()">
               <span></span>
               <span></span>
               <span></span>
            </a>
            <social-media theme="dark" />
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
import SideMenu from './SideMenu.vue';

export default Vue.extend({
   components: { SocialMedia, SideMenu },
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

.burger {
   display: flex;
   flex-direction: column;
   justify-content: center;
  width: 45px;
  height: 45px;
  padding: 12.5px;
  cursor: pointer;
  align-items: center;
  border-radius: 5px;
  z-index: 100;
}

.burger:hover {
   transition: all ease-in-out 250ms;
   background: #111827;
}

.burger span {
  display: block;
  width: 100%;
  border-radius: 3px;
  height: 2px;
  background: #fff;
  transition: all .3s;
  position: relative;
  margin: 0;
}

.burger.active span:nth-child(1) {
  animation: ease .7s top forwards;
}

.burger.inactive span:nth-child(1) {
  animation: ease .7s top-2 forwards;
}

.burger.active span:nth-child(2) {
  animation: ease .7s scaled forwards;
}

.burger.inactive span:nth-child(2) {
  animation: ease .7s scaled-2 forwards;
}

.burger.active span:nth-child(3) {
  animation: ease .7s bottom forwards;
}

.burger.inactive span:nth-child(3) {
  animation: ease .7s bottom-2 forwards;
}

@keyframes top {
  0% {
      top: 0;
      margin-bottom: 5px;
      transform: rotate(0);
  }
  50% {
     margin: 0;
     top: 2px;
    transform: rotate(0);
  }
  100% {
     margin: 0;
     top: 2px;
    transform: rotate(45deg);
  }
}

@keyframes top-2 {
  0% {
     margin-bottom: 0px;
     top: 2px;
    transform: rotate(45deg);
  }
  50% {
     margin: 0;
     top: 2px;
    transform: rotate(0deg);
  }
  100% {
     margin-bottom: 5px;
     top: 0px;
    transform: rotate(0deg);
  }
}

@keyframes bottom {
  0% {
     bottom: 0px;
     margin-top: 5px;
    transform: rotate(0);
  }
  50% {
     bottom: 2px;
     margin: 0;
    transform: rotate(0);
  }
  100% {
     bottom: 2px;
     margin: 0;
    transform: rotate(135deg);
  }
}

@keyframes bottom-2 {
  0% {
     bottom: 2px;
     margin-top: 0px;
    transform: rotate(135deg);
  }
  50% {
     bottom: 2px;
     margin: 0;
    transform: rotate(0);
  }
  100% {
     margin-top: 5px;
     bottom: 0px;
    transform: rotate(0);
  }
}

@keyframes scaled {
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes scaled-2 {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

</style>