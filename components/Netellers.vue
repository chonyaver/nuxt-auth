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
            <tr v-for="neteller in netellers" :key="neteller.id">
              <td v-if="neteller.kind === 'Sell'" class="is-align-content-end">
                {{ neteller.description }}
              </td>
              <td v-if="neteller.kind === 'Sell'">
                {{ neteller.th }}
              </td>
              <td
                v-if="neteller.kind === 'Sell'"
                class="is-align-content-start"
              >
                {{ neteller.price }}
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
            <tr v-for="neteller in netellers" :key="neteller.id">
              <td v-if="neteller.kind === 'Buy'" class="is-align-content-end">
                {{ neteller.description }}
              </td>
              <td v-if="neteller.kind === 'Buy'">
                {{ neteller.th }}
              </td>
              <td v-if="neteller.kind === 'Buy'" class="is-align-content-start">
                {{ neteller.price }}
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
    netellers: {
      type: Array,
      default: () => []
    }
  }
}
</script>
