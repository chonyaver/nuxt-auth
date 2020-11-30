/* eslint-disable no-unused-vars */ /* eslint-disable prettier/prettier */
<template>
  <div>
    <nuxt-link
      v-for="currency in currencies"
      :key="currency.id"
      :to="{ name: 'currencies-slug', params: { slug: currency.slug } }"
      class="card"
    >
      <img
        class="card-image"
        width="150"
        height="150"
        :src="getStrapiMedia(currency.image.url)"
        :alt="currency.title"
      />
      <h4 class="card-header-title">{{ currency.th }}</h4>
    </nuxt-link>
  </div>
</template>

<script>
import { getStrapiMedia } from '../utils/medias'

export default {
  props: {
    currencies: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getStrapiMedia
  }
}
</script>
