<template>
  <div class="social" :class="this.theme">
    <a v-bind:href="this.links.instagram" target="_blank">
      <svg
        class="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    </a>
    <a v-bind:href="this.links.twitter" target="_blank">
      <svg
        class="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
        />
      </svg>
    </a>
    <a v-bind:href="this.links.github" target="_blank">
      <svg
        class="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        />
      </svg>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'social-media',
  props: ['theme'],
  data() {
    return {
      links: {
        instagram: 'https://instagram.com/vnsnippets',
        twitter: 'https://twitter.com/vhnamah',
        github: 'https://github.com/vnsnippets'
      }
    }
  }
})
</script>

<style scoped>
.social a {
  border-radius: 100%;
  width: 40px;
  height: 40px;
  margin: 0 3.12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 12px;
}

.social.dark a {
  background: #111827;
  color: #ffffff;
}

.social.light a {
  background: #ffffff;
  color: #111827;
}

.social:hover a {
  background: #00000000;
  color: #ffffff;
  transition: all ease-in-out 200ms;
}

.social.dark a:hover {
  transition: all ease-in-out 200ms;
  transform: scale(1.25);
  padding: 12px;
  background: #111827;
  color: #ffffff;
}

.social.light a:hover {
  transition: all ease-in-out 200ms;
  transform: scale(1.25);
  padding: 12px;
  background: #ffffff;
  color: #111827;
}
</style>
