/* eslint-disable vue/comment-directive */ /* eslint-disable prettier/prettier
*/
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
            <tr v-for="paypal in paypals" :key="paypal.id">
              <td v-if="paypal.kind === 'Sell'" class="is-align-content-end">
                {{ paypal.description }}
              </td>
              <td v-if="paypal.kind === 'Sell'">
                {{ paypal.th }}
              </td>
              <td v-if="paypal.kind === 'Sell'" class="is-align-content-start">
                {{ paypal.price }}
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
            <tr v-for="paypal in paypals" :key="paypal.id">
              <td v-if="paypal.kind === 'Buy'" class="is-align-content-end">
                {{ paypal.description }}
              </td>
              <td v-if="paypal.kind === 'Buy'">
                {{ paypal.th }}
              </td>
              <td v-if="paypal.kind === 'Buy'" class="is-align-content-start">
                {{ paypal.price }}
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
    paypals: {
      type: Array,
      default: () => []
    }
  }
}
</script>
