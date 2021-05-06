<template>
  <div class="bg-gray-800 min-w-full min-h-screen">
    <branding />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Branding from '../components/Branding.vue';

export default Vue.extend({
  components: { Branding }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Merriweather&display=swap');

@font-face {
  font-family: 'CaptainIcon';
  font-style: normal;
  font-weight: normal;
  src: url("~assets/fonts/captain-icon.ttf") format("truetype")
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
