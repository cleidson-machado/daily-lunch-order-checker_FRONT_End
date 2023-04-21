<template>
  <div>
    <the-menu-for-today /> <!-- HERE-COMPONENT -->
    <admin-modal1 /> <!-- HERE-MODAL-COMPONENT -->
    <order-table /> <!-- HERE-COMPONENT -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheMenuForToday from '~/components/pageCodeGroups/forIndexPage/MenuForToday.vue';
import AdminModal1 from '~/components/pageCodeGroups/forAdminPage/adminModal1.vue';
import OrderTable from '~/components/pageCodeGroups/sharedStuff/OrdersDataTable1.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    TheMenuForToday,
    AdminModal1,
    OrderTable,
  }
})
</script>
