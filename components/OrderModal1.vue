<template>
  <div id="wrapper" class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex" v-on:click="handleClose">
    <div id="wrapperIn" class="w-[500px] mt-16 mx-auto">
      <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            <strong>Embalagem:</strong>
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
           {{ itemLunchBoxlName }}
          </p>
        </div>
        <div class="mb-4">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            <strong>Cardápio:</strong>
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {{ itemLunchMealName }}
          </p>
        </div>
        <div class="mb-4">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            <strong>Colaborador:</strong>
          </h5>
          <div class="w-10 relative mb-4 flex flex-wrap items-stretch">
            <div class="relative inline-flex self-center">

              <select class="text-xl font-bold rounded border-2 border-blue-400 text-gray-800 h-10 w-100 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none" v-model="selectedUserId">
                <option v-for="user in userList" v-bind:key="user.id" v-bind:value="user.id">{{ user.idCompanyEmployee }} - {{ user.firstName }} {{ user.lastName }}</option>
              </select>

            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <button 
          v-on:click="saveTheNewOrder"
          class="btn btn-red rounded focus:outline-none focus:shadow-outline" type="button">
            <span>OK! ENVIAR</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

  export default Vue.extend({
    name: 'OrderLunchModal',

    data: () => {
        return {

            //DATA DO CREATE A NEW ORDE.... JUST A TEST
            itemPrice: localStorage.getItem('theOrderValue'),
            itemAmount: localStorage.getItem('theAmount'),
            itemId: localStorage.getItem('theLunchMealId'),
            //itemUser: localStorage.getItem('theUserOrderId'),

            //TXT DATA TO VIEW ONLY ON MODAL
            itemLunchMealName: localStorage.getItem('theLunchMealName'),
            itemLunchBoxlName: localStorage.getItem('theLunchBoxName'),

            //USER DATA LOAD... LOAD WHEN THE INDEX MAIN IS LOAD
            userList: [],

            //USER ID SELECTED
            selectedUserId: '',
        }
    },

    mounted() {
        this.selectAllUserToOrder()
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
            userOrderId: this.selectedUserId,
        })
        .then(response => {
        //RETORNA OS DADOS DA ORDEM SALVA... COMO UTILIZAR NO APP?
        console.log(response)
        console.log('User_ID_Selected:' + this.selectedUserId)
        })
        .catch(err => {
        console.log(err)
        })
      },

      //GET USER LIST FOR ORDER A LUNCH
      async selectAllUserToOrder() {
        await this.$axios.$get('/foodapi/user/listAll')
        .then( response => {
          this.userList = response
        })
        .catch(err => {
        console.log(err)
        })
      },

    }


  })
</script>


<style>

</style>