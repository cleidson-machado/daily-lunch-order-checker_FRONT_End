<template>
    <div>
        <boxes-admin-place-1 />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BoxesAdminPlace1 from '~/components/pageCodeGroups/forAdminBoxes/BoxesAdminPlace1.vue';

export default Vue.extend({
    name: 'BoxesPage',
    components: {
        BoxesAdminPlace1,
    }
})
</script>
