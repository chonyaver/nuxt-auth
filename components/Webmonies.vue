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
            <tr v-for="webmony in webmonies" :key="webmony.id">
              <td v-if="webmony.kind === 'Sell'" class="is-align-content-end">
                {{ webmony.description }}
              </td>
              <td v-if="webmony.kind === 'Sell'">
                {{ webmony.th }}
              </td>
              <td v-if="webmony.kind === 'Sell'" class="is-align-content-start">
                {{ webmony.price }}
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
            <tr v-for="webmony in webmonies" :key="webmony.id">
              <td v-if="webmony.kind === 'Buy'" class="is-align-content-end">
                {{ webmony.description }}
              </td>
              <td v-if="webmony.kind === 'Buy'">
                {{ webmony.th }}
              </td>
              <td v-if="webmony.kind === 'Buy'" class="is-align-content-start">
                {{ webmony.price }}
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
    webmonies: {
      type: Array,
      default: () => []
    }
  }
}
</script>
