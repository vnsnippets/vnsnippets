<template>
<div class="menu">
   <div class="menu-items">
      <!-- <a class="icon burger" :class="this.toggle ? 'active' : 'inactive'" @click="toggleBurger()">
         <span></span>
         <span></span>
         <span></span>
      </a> -->
      <nuxt-link v-for="e in links" :key="e.name" class="icon" :to="e.route">
         <span><i class='cap-icon ci-home'></i></span>
         <span class="label">{{ e.name }}</span>
      </nuxt-link>
   </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
   data: () => ({
      links: [
         { route: "/blog", name: "Blog" },
         { route: "/about", name: "About" }
      ]
   })
})
</script>

<style scoped>
.menu {
   position: fixed;
   height: 100%;
   z-index: 1;
   top: 0;
   left: 0;
   overflow-x: hidden;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}

.menu-items {
   border-radius: 5px;
   background: #1F2937;
   overflow: hidden;
}

.icon {
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 50px;
   height: 50px;
   padding: 15px;
   cursor: pointer;
   align-items: center;
}

.icon:hover {
   background: #111827;
   transition: all ease-in-out 250ms;
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