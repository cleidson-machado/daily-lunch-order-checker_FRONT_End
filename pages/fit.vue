<template>
  <spa-2 /> <!-- HERE-FIT-CONTENT -->
</template>

<script>
import Vue from 'vue'
import Spa2 from '~/components/SinglePageApp2.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Spa2
  }
})
</script>
