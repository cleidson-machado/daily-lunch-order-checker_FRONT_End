<template>
    <div>
        <user-admin-place-1 />
        <admin-modal-1 />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserAdminPlace1 from '@/components/pageCodeGroups/forAdminUser/UserAdminPlace1.vue';
import AdminModal1 from '@/components/pageCodeGroups/forAdminPage/AdminModal1.vue';

export default Vue.extend({
    name: 'SinglePageApp3',

    components: {
        AdminModal1,
        UserAdminPlace1
    },

    mounted() {

    },

})
</script>

<style></style>