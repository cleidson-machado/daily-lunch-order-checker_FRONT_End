<template>
    <div>
        <user-admin-place-1 />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserAdminPlace1 from '@/components/pageCodeGroups/forAdminUser/UserAdminPlace1.vue';

export default Vue.extend({
    name: 'UserPage',
    components: {
        UserAdminPlace1
    }
})
</script>
