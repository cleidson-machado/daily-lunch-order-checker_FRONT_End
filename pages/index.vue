<template>
  <div>
    <the-menu-for-today />
    <order-table />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheMenuForToday from '~/components/pageCodeGroups/forIndexPage/MenuForToday.vue';
import OrderTable from '~/components/pageCodeGroups/sharedStuff/OrdersDataTable1.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    TheMenuForToday,
    OrderTable,
  }
})
</script>
