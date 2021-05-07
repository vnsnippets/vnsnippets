<template>
  <div class="bg-gray-800 min-w-full min-h-screen">
    <navigation />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navigation from '../components/Navigation.vue'
export default Vue.extend({
  components: { Navigation }
})
</script>
