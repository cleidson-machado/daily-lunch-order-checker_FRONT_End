<template>
  <div>
      <view-header-menu/>
      <view-body-page/>
  </div>
</template>

<script>
import ViewHeaderMenu from '~/components/Header.vue';
import ViewBodyPage from '~/components/BodyPage.vue';

export default {
  name: 'IndexPage',
  components:{ ViewHeaderMenu, ViewBodyPage },
}
</script>
