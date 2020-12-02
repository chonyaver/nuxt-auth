/* eslint-disable vue/comment-directive */ /* eslint-disable
vue/comment-directive */ /* eslint-disable no-unused-vars */ /* eslint-disable
prettier/prettier */
<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-12 center">
          {{ currency.th }}
          <br >
          <br >
          <Paypals
            v-if="currency.slug === 'paypals'"
            :paypals="currency.paypals"
          />
          <Webmonies
            v-if="currency.slug === 'webmonies'"
            :webmonies="currency.webmonies"
          />
          <Perfectmonies
            v-if="currency.slug === 'perfectmonies'"
            :perfectmonies="currency.perfectmonies"
          />
          <Netellers
            v-if="currency.slug === 'netellers'"
            :netellers="currency.netellers"
          />
          <Skrills
            v-if="currency.slug === 'skrills'"
            :skrills="currency.skrills"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getMetaTags } from '../../utils/seo';
import { getStrapiMedia } from '../../utils/medias';
import Paypals from '../../components/Paypals.vue';
import Webmonies from '../../components/Webmonies.vue';
import Perfectmonies from '../../components/Perfectmonies.vue';
import Netellers from '../../components/Netellers.vue';
import Skrills from '../../components/Skrills.vue';

export default {
  components: {
    Paypals,
    Webmonies,
    Perfectmonies,
    Netellers,
    Skrills
  },
  async asyncData({ $strapi, params }) {
    const matchingCurrencies = await $strapi.find('currencies', {
      slug: params.slug
    });
    return {
      currency: matchingCurrencies[0],
      paypals: await $strapi.find('paypals', {
        'currency.title': params.slug
      }),
      webmonies: await $strapi.find('webmonies', {
        'currency.title': params.slug
      }),
      perfectmonies: await $strapi.find('perfectmonies', {
        'currency.title': params.slug
      }),
      netellers: await $strapi.find('netellers', {
        'currency.title': params.slug
      }),
      skrills: await $strapi.find('skrills', {
        'currency.title': params.slug
      }),
      global: await $strapi.find('global')
    };
  },
  methods: {
    getMetaTags,
    getStrapiMedia
  },
  head() {
    const { defaultSeo, favicon, siteName } = this.global;
    const fullSeo = {
      ...defaultSeo,
      metaTitle: this.currency.title,
      metaDescription: this.currency.description,
      shareImage: this.currency.image
    };
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
    };
  }
};
</script>
