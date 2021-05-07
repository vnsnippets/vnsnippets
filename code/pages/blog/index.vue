<template>
  <div class="container min-w-full mx-0">
    <div class="masonry">
      <div v-for="(meta, index) in articles" :key="index" class="article-container">
        <div class="article text-white">
          <a :id="Anchor(meta.tag, meta.title)"></a>

          <nuxt-link class="no-underline block link" :to="URL(meta.tag, meta.title)">
            <div class="cover">
              <div :style="Cover(meta.cover)" class="cover-image" />
            </div>
            <div class="body">
              <h5 class="title">{{ meta.title }}</h5>
              <time>
                <div class="month">{{ TimestampToMonth(meta.date) }}</div>
                <div class="date">{{ TimestampToDate(meta.date) }}</div>
              </time>

              <p class="abstract text-gray-200">{{ meta.abstract }}</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'

const MOCKDATA = {
  metadata: [
    {
      tag: 'notice',
      title: 'Welcome Snippets',
      cover:
        'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      date: 1619804880,
      abstract:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
    },
    {
      tag: 'mauritius',
      title: 'Ten Reasons Why You Should Invest',
      cover:
        'https://images.unsplash.com/photo-1620249249097-1101533a34f3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      date: 1619804881,
      abstract:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
    },
    {
      tag: 'technology',
      title: "What's So Trendy",
      cover:
        'https://images.unsplash.com/photo-1620321268133-000441fd17aa?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      date: 1619804882,
      abstract:
        'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.'
    },
    {
      tag: 'doodles',
      title: 'Everything You Need To Know',
      cover:
        'https://images.unsplash.com/photo-1620399909663-b7a7da934161?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      date: 1619804883,
      abstract:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
      tag: 'technology',
      title: 'How To Learn',
      cover:
        'https://images.unsplash.com/photo-1620393345492-16ab8206a3aa?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      date: 1619804883,
      abstract:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    },
    {
      tag: 'mauritius',
      title: 'The Death',
      cover:
        'https://images.unsplash.com/photo-1620383482916-5e68cfb3fe92?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      date: 1619804883,
      abstract:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga'
    },
    {
      tag: 'technology',
      title: 'Common Misconceptions',
      cover:
        'https://images.unsplash.com/photo-1620373322520-4da1e6454fca?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      date: 1619804883,
      abstract:
        'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.'
    },
    {
      tag: 'travels',
      title: 'The Hidden Agenda',
      cover:
        'https://images.unsplash.com/photo-1620380925682-2ccd56244186?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      date: 1619804883,
      abstract:
        'He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.'
    },
    {
      tag: 'doodles',
      title: 'Five Things You Should Do',
      cover:
        'https://images.unsplash.com/photo-1620378387427-264408e0deec?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      date: 1619804883,
      abstract:
        'The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.'
    },
    {
      tag: 'technology',
      title: 'Your Competitors Know',
      cover:
        'https://images.unsplash.com/photo-1620205710247-65588efc1a24?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      date: 1619804883,
      abstract:
        'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.'
    },
    {
      tag: 'travels',
      title: 'Ten Secrets',
      cover:
        'https://images.unsplash.com/photo-1620206808765-c7382c951d4a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      date: 1619804883,
      abstract:
        'Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz.'
    },
    {
      tag: 'travels',
      title: "You Most Likely Didn't Know",
      cover:
        'https://images.unsplash.com/photo-1620315808304-66597517f188?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTR8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      date: 1619804883,
      abstract:
        'Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz.'
    },
    {
      tag: 'technology',
      title: 'Teach You All You Need To Know',
      cover:
        'https://images.unsplash.com/photo-1620256151063-f22d3cf8c245?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      date: 1619804883,
      abstract:
        'A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox.'
    }
  ]
}

const BackgroundURL = (url: string) => `url(${url})`
const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

export default Vue.extend({
  layout: 'blog',
  data: () => ({
    articles: MOCKDATA.metadata
  }),
  methods: {
    URL: (tag: string, title: string) => {
      return `blog/${tag.toLowerCase().replace(' ', '-')}/${title.toLowerCase().replace(' ', '-')}`
    },
    Anchor: (tag: string, title: string) => {
      return `${tag.toLowerCase().replace(' ', '-')}--${title.toLowerCase().replace(' ', '-')}`
    },
    Cover: (cover?: string) => {
      const style = {
        backgroundImage: BackgroundURL(DEFAULT_IMG)
      }

      if (cover && cover.length > 0) style.backgroundImage = BackgroundURL(cover)

      return style
    },
    TimestampToMonth: (timestamp: number) =>
      dayjs
        .unix(timestamp)
        .format('MMM')
        .toUpperCase(),
    TimestampToDate: (timestamp: number) => dayjs.unix(timestamp).format('DD')
  }
})
</script>

<style lang="scss" scoped>
.container {
  padding: 1em 0 3em 0;
}

@media only screen and (min-width: 768px) {
  .container {
    padding: 2rem 5rem;
  }
}

.masonry {
  display: flex;
  flex-flow: row wrap;
  // align-items: center;
  justify-content: center;
}

.article-container {
  // width: 100%;
  flex: 1;
  display: flex;
  min-width: 375px;
  max-width: 720px;
  position: relative;
}

.article {
  margin: 0 15px 30px 15px;

  .link {
    background: #1f2937;
    border-radius: 15px;
    overflow: hidden;
  }

  .link:hover {
    background: #111827;
    transition: all ease-in-out 200ms;

    .cover-image {
      transform: scale(1.25);
      filter: brightness(75%);
      transition: all ease-in-out 200ms;
    }
  }

  .cover {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  .cover-image {
    background-position: center center;
    background-size: cover;
    transform: scale(1);
    filter: brightness(100%);
    transition: all ease-in-out 300ms;
    width: 100%;
    height: 100%;
  }

  .body {
    padding: 1.75em;
    position: relative;

    time {
      font-family: 'Luckiest Guy', cursive;
      display: inline-block;
      background: #111827;
      padding: 10px;
      width: 60px;
      height: 60px;
      box-sizing: border-box;
      // border: #374151 2px solid;
      border-radius: 999px;
      text-align: center;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);

      .month {
        color: #fefefe;
        font-size: 0.75em;
        text-align: center;
        margin: 0;
        padding: 0;
      }

      .date {
        color: #fefefe;
        font-size: 1.25em;
        text-align: center;
        margin: 0;
        padding: 0;
        line-height: 1;
      }
    }

    .title {
      font-family: 'Merriweather', serif;
      font-size: 1.5em;
      font-weight: 500;
      margin: 0.5em 0;
    }

    .abstract {
      font-family: 'Roboto Slab', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 1em;
      line-height: 1.75;
    }
  }
}

// @media only screen and (min-width: 768px) {
//   .container {
//     padding: 2em 6em;
//   }
// }

// @media only screen and (min-width: 992px) {
//   .article-container {
//     width: 50%;
//   }
// }

// @media only screen and (min-width: 1200px) {
//   .article-container {
//     width: 33%;
//   }
// }

// @media only screen and (min-width: 1600px) {
//   .article-container {
//     width: 25%;
//   }
// }

// @media only screen and (min-width: 1921px) {
//   .article-container {
//     width: 400px;
//   }
// }
</style>
