<template>
    <div>
        <orders-admin-place-1 />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OrdersAdminPlace1 from '@/components/pageCodeGroups/forAdminOrders/OrdersAdminPlace1.vue'

export default Vue.extend({
    name: 'OrderPage',
    components: {
        OrdersAdminPlace1,
    }
})
</script>
