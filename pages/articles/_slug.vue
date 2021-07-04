<template>
  <main class="w-full px-4 py-8 flex flex-col items-center">
    <article class="max-w-full text-gray-50">
      <h1 class="text-2xl md:text-3xl font-light text-center">
        {{ article.title }}
      </h1>
      <h2 class="text-md md:text-xl font-light text-center mb-12">
        {{ article.subtitle }}
      </h2>

      <nuxt-content
        class="prose dark:prose-light prose-sm sm:prose mx-auto lg:max-w-3xl"
        :document="article"
      />
    </article>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  head () {
    return {
      title: `${this.article.title} - Månevann AS`,
      meta: [
        { hid: 'description', name: 'description', content: this.article.subtitle },
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
