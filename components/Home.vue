<template>
  <div>
      <view-header-menu/>
      <view-body-page/>
  </div>
  </template>
  
  <script>
  import ViewHeaderMenu from './Header.vue';
  import ViewBodyPage from './BodyPage.vue'

  export default {
    name: 'HomeView',
    components: { ViewHeaderMenu, ViewBodyPage }
  }
  </script>
  