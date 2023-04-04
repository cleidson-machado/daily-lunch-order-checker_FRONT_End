<template>
  <div>
    <!-- <AppHeader />  HERE-COMPONENT -->
    <Nuxt /> <!-- O CONTEÚDO VEM DESSE CARA (pages\index.vue) ELE TB CONTÉM A TABELA E O MENU -->
    <AppFooter /> <!--  HERE-COMPONENT -->
  </div>
</template>
  
<script lang="ts">

import Vue from 'vue'

//import AppHeader from '@/components/inc/AppHeader.vue'
import AppFooter from '@/components/inc/AppFooter.vue'

export default Vue.extend({
  name: 'default',
  components: {
    //AppHeader,
    AppFooter,
  }
})
</script>
  