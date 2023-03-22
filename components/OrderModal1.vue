######## NOVO! ###############
<template>
  <div id="wrapper" class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex" v-on:click="handleClose">
    <div id="wrapperIn"  class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-5 bg-white sm:rounded-lg p-2">
        <div class="items-center px-4 py-3">
          <strong>( ENVIO DE PEDIDO )</strong>
        </div>
        <div class="items-center px-4 py-3">
        <button
          id="order-btn"
          class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          @click="$emit('close-modal')"
          >
          OK!
        </button>
        <button
          id="schedule-btn"
          class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          @click="$emit('close-modal')"
          >
          AGENDAR...
        </button>
        <button
          id="out-btn"
          class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          @click="$emit('close-modal')"
          >
          SAIR
        </button>
		</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

  export default Vue.extend({
    name: 'OrderLunchModal',

    methods: {
      handleClose(e){
        if(e.target.id === 'wrapper' || e.target.id === 'wrapperIn') 
        {
          this.$emit('close-modal')
        }
      }
    }


  })
</script>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 600px;
  width: 800px;
  margin-top: 2%;
  padding: 5px 0;
  border-radius: 5px;
}
.close {
  margin: 2% 0 0 4px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>