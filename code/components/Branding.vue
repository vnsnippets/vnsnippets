<template>
  <nav>
    <div class="max-w-7xl mx-auto p-4 pb-5">
      <div class="flex items-center pb-4 header">
        <navigation />
        <social-media theme="dark" />
      </div>

      <div class="relative items-center">
        <div class="flex flex-col items-center">
          <router-link class="mx-auto block brand" to="/">
            <span class="text-gray-600">VN</span>
            <span class="text-gray-600"> | </span>
            <span class="text-gray-200"><strong>SNIPPETS</strong></span>
          </router-link>
          <p class="motto block text-gray-600">
            THE BEST TECHNIQUES ARE PASSED ON BY THE SURVIVORS
          </p>
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

.motto {
  text-align: center;
  background: #1f2937;
  padding: 15px 25px;
  border-radius: 5px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1em;
  margin-top: 10px;
}

.header {
  justify-content: flex-end;
}

@media only screen and (max-width: 767px) {
  .header {
    justify-content: center;
    margin: 1rem 0;
  }

  .brand {
    font-size: 1.75rem;
  }
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
