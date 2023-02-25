<template>
  <div>
    <spa-1/>
  </div>
</template>

<script>
import Vue from 'vue'
import Spa1 from '~/components/SinglePageApp1.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Spa1
  }
})
</script>
