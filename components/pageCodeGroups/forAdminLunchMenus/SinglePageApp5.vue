<template>
    <div>
        <lunch-menus-admin-place-1 />
        <admin-modal-1 />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AdminModal1 from '~/components/pageCodeGroups/forAdminPage/adminModal1.vue';
import LunchMenusAdminPlace1 from './LunchMenusAdminPlace1.vue';

export default Vue.extend({
    name: 'SinglePageApp5',

    components: {
        AdminModal1,
        LunchMenusAdminPlace1,
    },

    mounted() {

    },

})
</script>

<style></style>