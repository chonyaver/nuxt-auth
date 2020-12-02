/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <div>
    <div class="row">
      <div class="col-12 is-align-content-center">
        <h3>Rate for Sell</h3>
        <table class="table table-container">
          <thead>
            <tr>
              <th class="is-align-content-end">usd</th>
              <th>:</th>
              <th class="is-align-content-start">thb</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="skrill in skrills" :key="skrill.id">
              <td v-if="skrill.kind === 'Sell'" class="is-align-content-end">
                {{ skrill.description }}
              </td>
              <td v-if="skrill.kind === 'Sell'">
                {{ skrill.th }}
              </td>
              <td
                v-if="skrill.kind === 'Sell'"
                class="is-align-content-start"
              >
                {{ skrill.price }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-12 is-align-content-center">
        <h3>Rate for Buy</h3>
        <table class="table table-container">
          <thead>
            <tr>
              <th class="is-align-content-end">usd</th>
              <th>:</th>
              <th class="is-align-content-start">thb</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="skrill in skrills" :key="skrill.id">
              <td v-if="skrill.kind === 'Buy'" class="is-align-content-end">
                {{ skrill.description }}
              </td>
              <td v-if="skrill.kind === 'Buy'">
                {{ skrill.th }}
              </td>
              <td v-if="skrill.kind === 'Buy'" class="is-align-content-start">
                {{ skrill.price }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skrills: {
      type: Array,
      default: () => []
    }
  }
}
</script>
