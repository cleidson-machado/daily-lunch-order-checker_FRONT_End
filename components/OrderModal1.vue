######## NOVO! ###############
<template>
  <div id="wrapper" class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex" v-on:click="handleClose">
    <div id="wrapperIn" class="w-[900px] mt-16 mx-auto">
      <div class=" bg-white sm:rounded-lg p-2 box-content"> 
        <div class="grid grid-cols-3 gap-4">
          <div class="order-first">Envio da Ordem do Pedido</div>
          <div class="..."></div>
          <div class="..."></div>
          <div class="...">ID do PEDIDO: {{ itemId }}</div>
          <div class="...">VALOR R$ (UNID): {{ itemPrice }}</div>
          <div class="...">ID do USER:</div>
          <div class="...">{{ itemUser }}</div>
          <div class="...">QUANTIDADE:</div>
          <div class="...">{{ itemAmount }}</div>
          <div class="order-last">
          <button 
            v-on:click="saveTheNewOrder"
            class="btn btn-red min-h-full min-w-full">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
            </svg>
            <span>OK - ENVIAR!</span>
          </button>
          </div>
          <div class="order-last">
          <button 
            v-on:click="$emit('close-modal')"
            class="btn btn-red min-h-full min-w-full">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
            </svg>
            <span>SAIR</span>
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

  export default Vue.extend({
    name: 'OrderLunchModal',

    data: () => {
        return {
            itemId: localStorage.getItem('theLunchMealId'),
            itemPrice: localStorage.getItem('theOrderValue'),
            itemUser: localStorage.getItem('theUserOrderId'),
            itemAmount: localStorage.getItem('theAmount')
        }
    },

    methods: {

      handleClose(e){
        if(e.target.id === 'wrapper' || e.target.id === 'wrapperIn') 
        {
          this.$emit('close-modal')
        }
      },

      async saveTheNewOrder(){
        await this.$axios.$post('/foodapi/order-for-lunch/add', {
            orderValue: this.itemPrice,
            amount: parseInt(this.itemAmount),
            lunchMealId: this.itemId,
            userOrderId: this.itemUser
        })
        .then(response => {
        console.log(response)
        })
        .catch(err => {
        console.log(err)
        })
      }

    }


  })
</script>


<style>

</style>