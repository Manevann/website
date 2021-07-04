<template>
  <div class="dark">
    <Nuxt />
    <moon-footer />
  </div>
</template>

<script>
export default {
  head () {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://månevann.no' + this.$route.path
        }
      ]
    }
  }
}
</script>
