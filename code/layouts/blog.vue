<template>
  <div class="bg-gray-800 min-w-full min-h-screen">
    <branding />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Branding from '../components/Branding.vue'

export default Vue.extend({
  components: { Branding }
})
</script>

<style>
@media only screen and (max-width: 320px) {
  html {
    min-width: 320px;
  }
}
</style>
