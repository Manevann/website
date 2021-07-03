<template>
  <main>
    <!-- Jumbo -->
    <div class="min-h-screen bg-white flex flex-col items-center justify-center relative">
      <div class="bg-blue-900 animate-fade-in absolute inset-0" />
      <moon-water-logo class="h-72 w-72 text-white z-10" />
      <h1 class="uppercase text-6xl text-white z-10 mt-6 font-light animate-fade-in font-lm-l">
        Måne <span class="font-medium font-lm-m">vann</span>
      </h1>
    </div>

    <!-- Content -->
    <div class="w-full bg-gray-800 px-4 py-8 flex flex-col items-center">
      <!-- Translation -->
      <div class="flex items-center justify-start bg-gray-100 rounded-lg shadow transition-shadow duration-300 hover:shadow-lg">
        <img class="h-28 w-28 mx-4" src="~/assets/square_transparent-dark-blue_no-text.png" alt="">
        <div class="flex flex-grow flex-col justify-center pl-4 pr-12 my-4 border-l-2 border-gray-400">
          <span class="text-sm font-semibold text-gray-400">
            Norwegian
          </span>
          <span class="text-xl text-gray-800">
            Månevann
          </span>
          <hr class="my-2">
          <span class="text-sm font-semibold text-gray-400">
            English
          </span>
          <span class="text-xl text-gray-800">
            Moon Water
          </span>
        </div>
      </div>

      <div class="text-gray-100 my-8">
        . . .
      </div>

      <!-- Articles -->
      <div class="max-w-3xl py-8">
        <h2 class="text-gray-50 text-4xl font-light text-center">
          Recent articles
        </h2>

        <ul class="mt-8">
          <li
            v-for="article in articles"
            :key="article.slug"
          >
            <nuxt-link
              :to="{ name: 'articles-slug', params: { slug: article.slug } }"
              class="opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <h3 class="text-gray-50 text-3xl font-light text-center">
                {{ article.title }}
              </h3>
              <h4 class="text-gray-300 text-lg font-light text-center">
                {{ article.subtitle }}
              </h4>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'subtitle', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles
    }
  }
}
</script>
