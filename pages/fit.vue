<template>
  <div>
    <the-menu-for-today-fit /> <!-- HERE-COMPONENT -->
    <admin-modal1 /> <!-- HERE-MODAL-COMPONENT -->
    <order-table /> <!-- HERE-COMPONENT -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OrderTable from '~/components/pageCodeGroups/sharedStuff/OrdersDataTable1.vue'
import AdminModal1 from '~/components/pageCodeGroups/forAdminPage/adminModal1.vue';
import TheMenuForTodayFit from '~/components/pageCodeGroups/forFitPage/MenuForTodayFit.vue';

export default Vue.extend({
  name: 'FitPage',
  components: {
    //Spa2
    OrderTable,
    AdminModal1,
    TheMenuForTodayFit,

  }
})
</script>
