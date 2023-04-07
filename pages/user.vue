<template>
    <spa-3 /> <!-- HERE-FIT-CONTENT -->
</template>

<script lang="ts">
import Vue from 'vue'
import Spa3 from '~/components/pageCodeGroups/forAdminUser/SinglePageApp3.vue';

export default Vue.extend({
    name: 'UserPage',
    components: {
        Spa3
    }
})
</script>
