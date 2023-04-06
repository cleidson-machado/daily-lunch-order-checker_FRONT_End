<template>
  <div>
    <the-menu-for-today /> <!-- HERE-COMPONENT -->
    <order-table /> <!-- HERE-COMPONENT -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OrderTable from '~/components/pageCodeGroups/sharedStuff/OrdersDataTable1.vue'
import TheMenuForToday from '~/components/pageCodeGroups/forIndexPage/MenuForToday.vue';

export default Vue.extend({
  name: 'SinglePageApp1',

  components: {
    OrderTable,
    TheMenuForToday,
  }

})
</script>
    