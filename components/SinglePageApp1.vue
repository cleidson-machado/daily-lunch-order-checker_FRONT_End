<template>
    <div>
        <the-menu-for-today/> <!-- HERE-COMPONENT -->
        <order-table/> <!-- HERE-COMPONENT -->
    </div>
</template>

<script>
import Vue from 'vue'
import OrderTable from '~/components/OrdersDataTable1.vue'
import TheMenuForToday from '~/components/MenuForToday.vue';

export default Vue.extend({
  name: 'SinglePageApp1',

  components:{
    OrderTable,
    TheMenuForToday,
  }
  
})
</script>
    