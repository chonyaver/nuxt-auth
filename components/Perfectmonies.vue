/* eslint-disable prettier/prettier */
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
            <tr v-for="perfectmoney in perfectmonies" :key="perfectmoney.id">
              <td
                v-if="perfectmoney.kind === 'Sell'"
                class="is-align-content-end"
              >
                {{ perfectmoney.description }}
              </td>
              <td v-if="perfectmoney.kind === 'Sell'">
                {{ perfectmoney.th }}
              </td>
              <td
                v-if="perfectmoney.kind === 'Sell'"
                class="is-align-content-start"
              >
                {{ perfectmoney.price }}
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
            <tr v-for="perfectmoney in perfectmonies" :key="perfectmoney.id">
              <td
                v-if="perfectmoney.kind === 'Buy'"
                class="is-align-content-end"
              >
                {{ perfectmoney.description }}
              </td>
              <td v-if="perfectmoney.kind === 'Buy'">
                {{ perfectmoney.th }}
              </td>
              <td
                v-if="perfectmoney.kind === 'Buy'"
                class="is-align-content-start"
              >
                {{ perfectmoney.price }}
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
    perfectmonies: {
      type: Array,
      default: () => []
    }
  }
}
</script>
