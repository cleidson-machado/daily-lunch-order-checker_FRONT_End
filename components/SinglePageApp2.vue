<template>
  <div>
    <the-menu-for-today-fit /> <!-- HERE-COMPONENT -->
    <!-- <order-table/> HERE-COMPONENT -->
  </div>
</template>

<script>
import Vue from 'vue'
import OrderTable from '~/components/OrdersDataTable1.vue'
import TheMenuForTodayFit from '~/components/MenuForTodayFit.vue';

export default Vue.extend({
  name: 'SinglePageApp1',

  components: {
    OrderTable,
    TheMenuForTodayFit,
  }

})
</script>
    