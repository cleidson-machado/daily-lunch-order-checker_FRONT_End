<template>
    <!-- <spa-5 /> HERE-FIT-CONTENT -->
    <div>
        <lunch-menus-admin-place-1 />
        <admin-modal-1 />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AdminModal1 from '~/components/pageCodeGroups/forAdminPage/adminModal1.vue';
import LunchMenusAdminPlace1 from '~/components/pageCodeGroups/forAdminLunchMenus/LunchMenusAdminPlace1.vue';

export default Vue.extend({
    name: 'MenusPage',
    components: {
        //Spa5,
        AdminModal1,
        LunchMenusAdminPlace1,
    }
})
</script>
