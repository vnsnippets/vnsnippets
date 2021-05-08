<template>
  <div class="article">
    <div class="card text-white antialiased">
      <nuxt-link class="no-underline block link" :to="url">
        <div class="cover">
          <div :style="Cover(meta.cover)" class="cover-image" />
        </div>
        <div class="card-body p-5">
          <div class="p-1 h-full content flex flex-col justify-center items-center">
            <div class="overflow-hidden">
              <h6 class="category inline-block text-gray-300 border-2 border-gray-700 ">{{ meta.tag }}</h6>
              <h5 class="title text-white mt-3">{{ meta.title }}</h5>

              <p class="abstract text-gray-200">{{ meta.abstract }}</p>
            </div>
          </div>
          <div class="footer flex justify-between text-gray-400 border-t-2 border-gray-800">
            <p>{{ timestamp }}</p>
            <div>
              <i class="cap-icon ci-heart"></i>
            </div>
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
  name: 'article-with-image-xl',
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

  .link:hover {
    .cover-image {
      transform: scale(1.25);
      filter: brightness(75%);
      transition: all ease-in-out 200ms;
    }
  }

  .cover {
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all ease-in-out 300ms;

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

  .link {
    height: 500px;
    display: flex;
  }

  .card-body {
    position: relative;
    height: 100%;
    width: 50%;
    padding-bottom: 5.25em;
    transition: all ease-in-out 300ms;

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
      margin-top: 2em;
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0.25em;
    right: 0.25em;
    padding: 1.5em 1.25em;
    font-family: 'Roboto Slab', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1;
  }

  @media only screen and (max-width: 768px) {
    .cover {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: all 200ms ease-in-out;
    }

    .footer {
      border-color: #ffffff75;
      transition: all 200ms ease-in-out;
    }

    .card-body {
      width: 100%;
      background: #000000af;
      padding: 3em 3em 7em 3em;
      transition: all 200ms ease-in-out;
    }

    .card-body:hover {
      background: #000000cf;
      transition: all 200ms ease-in-out;
    }
  }
}
</style>
