<template>
  <nav>
    <div class="max-w-7xl mx-auto p-4 pb-5">
      <div class="flex items-center justify-end pb-4">
        <navigation />
        <social-media theme="dark" />
      </div>

      <div class="relative items-center">
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
import Navigation from './Navigation.vue'
import SocialMedia from './SocialMedia.vue'

export default Vue.extend({
  components: { Navigation, SocialMedia }
})
</script>

<style scoped>
.brand {
  font-family: 'Merriweather', sans-serif;
  font-weight: 100;
  font-size: 2rem;
}

.brand:hover .text-gray-200 {
  color: #9ca3af;
  transition: all 200ms ease;
}
.brand:hover .text-gray-600 {
  color: #e5e7eb;
  transition: all 200ms ease;
}
</style>
