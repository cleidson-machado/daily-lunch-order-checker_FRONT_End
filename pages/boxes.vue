<template>
    <!-- <spa-6 /> HERE-FIT-CONTENT -->
    <div>
        <boxes-admin-place-1 />
        <admin-modal-1 />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AdminModal1 from '~/components/pageCodeGroups/forAdminPage/adminModal1.vue';
import BoxesAdminPlace1 from '~/components/pageCodeGroups/forAdminBoxes/BoxesAdminPlace1.vue';

export default Vue.extend({
    name: 'BoxesPage',
    components: {
        //Spa6,
        AdminModal1,
        BoxesAdminPlace1,
    }
})
</script>
