<template>
  <div class="article">
    <div class="card text-white antialiased">
      <nuxt-link class="no-underline block link" :to="url">
        <div class="cover">
          <div :style="Cover(meta.cover)" class="cover-image" />
        </div>
        <div class="card-body p-5">
          <div class="icon flex justify-center items-center">
            <i class="cap-icon ci-ghost text-3xl"></i>
          </div>

          <div class="h-full flex flex-col justify-between pt-4 text-center">
            <div class="p-1 content">
              <h6 class="category inline-block text-gray-300 border-2 border-gray-700 ">{{ meta.tag }}</h6>
              <h5 class="title text-white mt-3">{{ meta.title }}</h5>
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

import { BackgroundURL, DEFAULT_IMG } from '~/Constants'

export default Vue.extend({
  props: ['meta', 'url'],
  computed: {
    timestamp() {
      return dayjs.unix(this.meta.timestamp).format('MMMM DD, YYYY')
    }
  },
  methods: {
    Cover: (cover?: string) => {
      const style = {
        backgroundImage: BackgroundURL(DEFAULT_IMG)
      }

      if (cover && cover.length > 0) style.backgroundImage = BackgroundURL(cover)

      return style
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

.link:hover {
  .cover-image {
    transform: scale(1.25);
    filter: brightness(75%);
    transition: all ease-in-out 200ms;
  }
}

.cover {
  overflow: hidden;

  .cover-image {
    background-position: center center;
    background-size: cover;
    transform: scale(1);
    filter: brightness(100%);
    transition: all ease-in-out 300ms;
    width: 100%;
    height: 100%;
  }
}

.card-body {
  position: relative;
  padding-bottom: 5.25em;

  .icon {
    font-family: 'Luckiest Guy', cursive;
    background: #111827;
    padding: 10px;
    width: 60px;
    height: 60px;
    box-sizing: border-box;
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

  .content {
    max-height: 100%;
    overflow: hidden;
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

// Additional CSS for normal Article with Image
// This section is different in Article with Image XL
.cover {
  width: 100%;
  height: 250px;
}

.card-body {
  height: 250px;

  .icon {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
  }
}
</style>
