<template>
    <div>
        <h1>
            <p>THIS IS A ERROR PAGE: <strong>{{ error.statusCode }}</strong></p>
        </h1>
    </div>
</template>
  
<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
    name: 'errorPage',

    props: {
        error: {
            type: Object,
            default: null
        }
    }

})
</script>
  