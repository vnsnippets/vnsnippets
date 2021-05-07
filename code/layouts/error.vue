<template>
  <div class="bg-gray-800 min-w-full min-h-screen flex flex-col justify-center items-center">
    <navigation />
    <p class="text-gray-600 error-code">4<i class="cap-icon ci-balloon-face"></i>4</p>
    <p class="text-gray-600 error-text">YOU'RE IN THE WRONG PLACE</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navigation from '../components/Navigation.vue'
export default Vue.extend({
  components: { Navigation }
})
</script>

<style scoped>
.error-code {
  font-family: 'Luckiest Guy', cursive;
  letter-spacing: 0.05em;
  font-size: 12rem;
  line-height: 1;
}

.error-text {
  line-height: 1;
  font-family: 'Luckiest Guy', cursive;
  font-size: 1.5rem;
  margin-top: 0.5rem;
}

.cap-icon {
  font-size: 9rem;
}

h1 {
  font-size: 10rem;
}

@media only screen and (max-width: 767px) {
  .error-code {
    font-size: 7.5rem;
  }

  .cap-icon {
    font-size: 5.5rem;
  }

  .error-text {
    font-size: 1rem;
  }
}
</style>
