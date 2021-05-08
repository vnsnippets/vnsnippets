<template>
  <div class="container min-w-full mx-0">
    <div></div>
    <div class="blog-articles">
      <client-only>
        <div
          v-for="(meta, index) in articles"
          :key="index"
          class="wrapper"
          :class="meta.options.UseLargeArticle === true ? 'lg' : null"
          align="center"
        >
          <a :id="Anchor(meta)"></a>

          <ArticleWithImageXL v-if="meta.options.UseLargeArticle === true" :meta="meta" :url="URL(meta)" />
          <ArticleWithImage v-else-if="meta.options.UseImageArticle === true" :meta="meta" :url="URL(meta)" />
          <ArticleWithText v-else :meta="meta" :url="URL(meta)" />
        </div>
      </client-only>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Metadata } from '~/models/Article'

import { MOCK_METADATA } from '~/Mock'

import ArticleWithImage from '~/components/articles/ArticleWithImage.vue'
import ArticleWithImageXL from '~/components/articles/ArticleWithImageXL.vue'
import ArticleWithText from '~/components/articles/ArticleWithText.vue'

type DataType = {
  articles: Metadata[]
}

export default Vue.extend({
  layout: 'blog',
  components: { ArticleWithImage, ArticleWithImageXL, ArticleWithText },
  data: (): DataType => ({
    articles: []
  }),
  methods: {
    URL: (meta: Metadata) => {
      return `blog/${meta.tag.toLowerCase().replace(/\s/g, '-')}/${meta.title.toLowerCase().replace(/\s/g, '-')}`
    },
    Anchor: (meta: Metadata) => {
      return `${meta.tag.toLowerCase().replace(/\s/g, '-')}--${meta.title.toLowerCase().replace(/\s/g, '-')}`
    }
  },
  created() {
    const data = MOCK_METADATA
    data.sort((a, b) => b.timestamp - a.timestamp)

    this.articles = data.map((article, index) => {
      const options = {
        UseImageArticle: false,
        UseLargeArticle: false
      }

      if (index < 4) {
        options.UseImageArticle = true
        options.UseLargeArticle = false
      } else {
        options.UseImageArticle = Math.random() < 0.75
        options.UseLargeArticle = options.UseImageArticle ? Math.random() < 0.5 : false
      }

      return { ...article, options }
    })
  }
})
</script>

<style lang="scss" scoped>
.container {
  padding: 1.25em 6em 2em;
}

.wrapper {
  flex: 1 1 350px;
  margin: 0.75em;
}

.wrapper.lg {
  flex: 2 1 700px;
}

@media only screen and (max-width: 625px) {
  .container {
    padding: 0.25em 0 3em 0;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1150px) {
  .container {
    padding: 1.25em 5em 2em;
  }
}

@media only screen and (min-width: 1150px) {
  .container {
    padding: 1.25em 9.25em;
  }
}

.blog-articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media only screen and (max-width: 768px) {
  .blog-articles {
    display: block;
    margin: auto;
  }
}

// CSS that will apply to the Article Components
// @media only screen and (max-width: 919px) {
//   .article {
//     max-width: 525px;
//   }
// }

@media only screen and (max-width: 768px) {
  .article {
    flex: unset;
    min-width: auto;
  }
}
</style>

<style lang="scss">
.blog-articles {
  .card {
    width: 100%;

    .link {
      overflow: hidden;
      background: #1f2937;
      border-radius: 0px;
    }

    .link:hover {
      background: #111827;
      transition: all ease-in-out 200ms;
    }
  }
}
</style>
