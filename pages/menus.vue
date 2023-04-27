<template>
    <div>
        <lunch-menus-admin-place-1 />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LunchMenusAdminPlace1 from '~/components/pageCodeGroups/forAdminLunchMenus/LunchMenusAdminPlace1.vue';

export default Vue.extend({
    name: 'MenusPage',
    components: {
        LunchMenusAdminPlace1,
    }
})
</script>
