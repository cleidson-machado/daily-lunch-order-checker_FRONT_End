<template>
    <!-- <spa-3 /> HERE-FIT-CONTENT -->
    <div>
        <user-admin-place-1 />
        <admin-modal-1 />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserAdminPlace1 from '@/components/pageCodeGroups/forAdminUser/UserAdminPlace1.vue';
import AdminModal1 from '~/components/pageCodeGroups/forAdminPage/adminModal1.vue';

export default Vue.extend({
    name: 'UserPage',
    components: {
        //Spa3
        AdminModal1,
        UserAdminPlace1
    }
})
</script>
