/* eslint-disable vue/comment-directive */ /* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          {{ category.th }}
          <Currencies :currencies="category.currencies || []" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getMetaTags } from '../../utils/seo'
import { getStrapiMedia } from '../../utils/medias'
import Currencies from '../../components/Currencies.vue'

export default {
  components: {
    Currencies
  },
  async asyncData({ $strapi, params }) {
    const matchingCategories = await $strapi.find('categories', {
      slug: params.slug
    })
    return {
      category: matchingCategories[0],
      currencies: await $strapi.find('currencies', {
        'category.name': params.slug
      }),
      global: await $strapi.find('global')
    }
  },
  methods: {
    getMetaTags,
    getStrapiMedia
  },
  head() {
    const { defaultSeo, favicon, siteName } = this.global
    const fullSeo = {
      ...defaultSeo,
      metaTitle: `${this.category.name} articles`,
      metaDescription: `All articles about ${this.category.description}`
    }
    return {
      title: fullSeo.metaTitle,
      titleTemplate: `%s | ${siteName}`,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: 'favicon',
          href: getStrapiMedia(favicon.url)
        }
      ]
    }
  }
}
</script>
