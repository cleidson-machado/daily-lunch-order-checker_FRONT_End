<template>
    <div>
        <orders-admin-place-1 />
        <admin-modal-1 />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OrdersAdminPlace1 from '@/components/pageCodeGroups/forAdminOrders/OrdersAdminPlace1.vue'
import AdminModal1 from '~/components/pageCodeGroups/forAdminPage/adminModal1.vue';

export default Vue.extend({
    name: 'SinglePageApp4',

    components: {
        AdminModal1,
        OrdersAdminPlace1,

    },

    mounted() {

    },

})
</script>

<style></style>