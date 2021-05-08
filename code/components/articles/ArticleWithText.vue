<template>
  <div class="article">
    <div class="card text-white antialiased">
      <nuxt-link class="no-underline block link" :to="url">
        <div class="card-body p-5 flex items-center justify-center">
          <div class="max-h-full overflow-hidden">
            <div class="icon flex justify-center items-center mb-4">
              <i class="cap-icon ci-ghost text-3xl"></i>
            </div>
            <div class="content p-1">
              <h6 class="category inline-block text-gray-300 border-2 border-gray-700 ">{{ meta.tag }}</h6>
              <h5 class="title text-white my-3">{{ meta.title }}</h5>

              <p class="abstract text-gray-200">{{ meta.abstract }}</p>
            </div>
          </div>
        </div>
        <div class="footer flex justify-between text-gray-400 border-t-2 border-gray-800">
          <p>{{ timestamp }}</p>
          <div>
            <i class="cap-icon ci-heart"></i>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'

export default Vue.extend({
  props: ['meta', 'url'],
  computed: {
    timestamp() {
      return dayjs.unix(this.meta.timestamp).format('MMMM DD, YYYY')
    }
  }
})
</script>

<style lang="scss" scoped>
.article {
  // width: 100%;
  flex: 1;
  min-width: 350px;
  position: relative;
}

.link {
  height: 500px;
  display: flex;
  flex-direction: column;
}

.card-body {
  position: relative;
  padding-bottom: 5.25em;
  height: 100%;

  .icon {
    background: #111827;
    padding: 10px;
    width: 75px;
    height: 75px;
    border-radius: 999px;
    text-align: center;
  }

  .category {
    font-family: 'Merriweather', serif;
    font-size: 0.85em;
    line-height: 1;
    text-transform: uppercase;
    padding: 0.75em;
    border-radius: 5px;
  }

  .title {
    font-family: 'Merriweather', serif;
    font-size: 1.35em;
    font-weight: 500;
  }

  .abstract {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1em;
    line-height: 1.5;
  }
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0.25em;
  right: 0.25em;
  font-family: 'Roboto Slab', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1;
  padding: 1.5em 1.25em;
}
</style>
