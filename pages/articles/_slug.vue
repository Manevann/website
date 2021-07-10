<template>
  <main class="w-full px-4 py-8 flex flex-col items-center">
    <article class="max-w-full text-gray-50">
      <h1 class="text-2xl md:text-3xl font-light text-center">
        {{ article.title }}
      </h1>
      <h2 class="text-md md:text-xl font-light text-center">
        {{ article.subtitle }}
      </h2>

      <div v-if="article.author" class="flex mt-8 justify-center items-center">
        <img
          class="rounded-full overflow-hidden h-12 w-12 mr-4 shadow-lg"
          :src="article.author.photo.thumbnail"
          :alt="`Thumbnail photo of ${article.author.name}`"
        >
        <span class="font-light">
          Written by
          <a
            :href="article.author.website"
            class="font-medium"
            target="_blank"
          >
            {{ article.author.name }}
          </a>
          <br>
          <span class="text-gray-400 font-light">Published {{ article.createdAt | formatDate }}</span>
        </span>
      </div>

      <nuxt-content
        class="prose dark:prose-light prose-sm sm:prose mx-auto lg:max-w-3xl mt-8 lg:mt-12"
        :document="article"
      />
    </article>
  </main>
</template>

<script>
export default {
  filters: {
    formatDate (date) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return new Intl.DateTimeFormat('en', options).format(new Date(date))
    }
  },
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  head () {
    return {
      title: `${this.article.title} - Månevann AS`,
      meta: [
        { hid: 'description', name: 'description', content: this.article.subtitle },
        { hid: 'author', name: 'author', content: this.article.author.name },
        { hid: 'article:published_time', property: 'article:published_time', content: this.article.createdAt },
        { hid: 'article:modified_time', property: 'article:modified_time', content: this.article.updatedAt },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.subtitle },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.subtitle }
      ]
    }
  }
}
</script>
