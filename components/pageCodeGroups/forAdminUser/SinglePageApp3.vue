<template>
    <div>
        <admin-modal-1 />
        <user-admin-place-1 />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { initFlowbite } from 'flowbite';
import AdminModal1 from '@/components/pageCodeGroups/forAdminPage/AdminModal1.vue';
import UserAdminPlace1 from '@/components/pageCodeGroups/forAdminUser/UserAdminPlace1.vue';

export default Vue.extend({
    name: 'SinglePageApp3',

    components: {
        AdminModal1,
        UserAdminPlace1
    },

    mounted() {
        initFlowbite();
    },

})
</script>

<style></style>