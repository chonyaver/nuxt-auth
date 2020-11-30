/* eslint-disable vue/comment-directive */ /* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          {{ currency.th }}
          <br />
          <br />
          <Paypals
            v-if="currency.slug === 'paypals'"
            :paypals="currency.paypals"
          />
          <Webmonies
            v-if="currency.slug === 'webmonies'"
            :webmonies="currency.webmonies"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getMetaTags } from '../../utils/seo'
import { getStrapiMedia } from '../../utils/medias'
import Paypals from '../../components/Paypals.vue'
import Webmonies from '../../components/Webmonies.vue'

export default {
  components: {
    Paypals,
    Webmonies
  },
  async asyncData({ $strapi, params }) {
    const matchingCurrencies = await $strapi.find('currencies', {
      slug: params.slug
    })
    return {
      currency: matchingCurrencies[0],
      paypals: await $strapi.find('paypals', {
        'currency.title': params.slug
      }),
      webmonies: await $strapi.find('webmonies', {
        'currency.title': params.slug
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
      metaTitle: this.currency.title,
      metaDescription: this.currency.description,
      shareImage: this.currency.image
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
