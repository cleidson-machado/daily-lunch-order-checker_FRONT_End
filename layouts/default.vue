<template>
  <div>
    <AppHeader />
    <admin-modal1 /> <!-- HERE-THE-COMPONENT-FOR-ALL-PROJECT -->
    <Nuxt /> <!-- HERE-DEFAULT-AUTO-RENDER-ALL-PROJECT -->
    <AppFooter />
  </div>
</template>
  
<script lang="ts">

import Vue from 'vue'

import AppHeader from '@/components/inc/AppHeader.vue'
import AppFooter from '@/components/inc/AppFooter.vue'
import AdminModal1 from '~/components/pageCodeGroups/forAdminPage/adminModal1.vue';

export default Vue.extend({
  name: 'default',
  components: {
    AppHeader,
    AdminModal1,
    AppFooter,
  }
})
</script>
  