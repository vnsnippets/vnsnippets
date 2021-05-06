<template>
<div class="menu">
   <div class="menu-items">
      <nuxt-link class="menu-item" :class="e.class" v-for="e in links" :key="e.name" :to="e.route">
         <span class="icon"><i class="cap-icon" :class="e.icon"></i></span>
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
         { route: "/", name: "Home", icon: "ci-home", class: "home" },
         { route: "/blog", name: "Blog", icon: "ci-pen-nib" },
         { route: "/about", name: "About", icon: "ci-user-alt" }
      ]
   })
})
</script>

<style scoped>
.menu {
   position: fixed;
   height: 100%;
   z-index: 100;
   top: 0;
   left: 0;
   overflow-x: hidden;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}

.menu-items {
   border-radius: 0 5px 5px 0px;
   overflow: hidden;
}

.menu-item {
   display: flex;
   /* justify-content: center; */
   align-items: center;
   background: #1F2937;
}

.menu-item .icon {
   cursor: pointer;
   color: white;
   width: 3.5em;
   height: 3.5em;
   display: flex;
   align-items: center;
   justify-content: center;
}

.menu-item .label {
   font-family: 'Freckle Face', cursive;
   margin-left: 1em;
   display: none;
   font-size: 1.25rem;
   margin: 0;
   padding: 0;
   padding-right: 15px;
   color: white;
   align-items: center;
   justify-content: center;
}

.icon .cap-icon {
   font-size: 1.25em;
}

.menu-item.active-link:not(.home){
   background: #111827;
   pointer-events: none;
}

.menu-items:hover .label {
   display: flex;
   animation: show-labels 250ms ease;
}

.menu-item:hover {
   background: #111827;
   transition: all ease-in-out 250ms;
}

.menu-item:hover .cap-icon {
   transform: scale(1.15);
   transition: all ease-in-out 200ms;
}

.menu-item:hover .label {
   transform: scale(1.05);
   transition: all ease-in-out 200ms;
}
/* 
.menu-item.home,
.menu-item.active-link.home {
   background: #10B981;
}

.menu-item.home:hover,
.menu-item.active-link.home:hover {
   background: #34D399;
   transition: all ease-in-out 250ms;
} */

@keyframes show-labels {
   0% {
      opacity: 0;
      margin-left: -60px;
   }

   60% {
      opacity: 0%;
   }

   100% {
      opacity: 100%;
      margin-left: 0;
   }
}
</style>