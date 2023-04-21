<template>
  <div>
    <AppHeader /> <!-- HERE-COMPONENT -->
    <Nuxt /> <!-- CARREGA DO CONTEÚDO DE TODAS AS ROTAS! -->
    <AppFooter /> <!--  HERE-COMPONENT -->
  </div>
</template>
  
<script lang="ts">

import Vue from 'vue'

import AppHeader from '@/components/inc/AppHeader.vue'
import AppFooter from '@/components/inc/AppFooter.vue'

export default Vue.extend({
  name: 'default',
  components: {
    AppHeader,
    AppFooter,
  }
})
</script>
  