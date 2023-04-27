<template>
  <div>
    <the-menu-for-today-fit />
    <order-table />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OrderTable from '~/components/pageCodeGroups/sharedStuff/OrdersDataTable1.vue'
import TheMenuForTodayFit from '~/components/pageCodeGroups/forFitPage/MenuForTodayFit.vue';

export default Vue.extend({
  name: 'FitPage',
  components: {
    OrderTable,
    TheMenuForTodayFit,

  }
})
</script>
