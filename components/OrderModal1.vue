<template>
  <div id="wrapper" class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex" v-on:click="handleClose">
    <div id="wrapperIn" class="w-[500px] mt-16 mx-auto">
      <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <h5 class="mb-0 text-base text-neutral-600 dark:text-neutral-200">
            <strong>Embalagem:</strong>
          </h5>
          <p class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           <strong>{{ itemLunchBoxlName }}</strong>
          </p>
        </div>
        <div class="mb-4">
          <h5 class="mb-0 text-base text-neutral-600 dark:text-neutral-200">
            <strong>Cardápio:</strong>
          </h5>
          <p class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           <strong>{{ itemLunchMealName }}</strong>
          </p>
        </div>
        <div class="mb-4">
          <h5 class="mb-0 text-base text-neutral-600 dark:text-neutral-200" v-if="userList.length === 0">
            <strong>Colaborador:</strong>
          </h5>
          <h5 class="mb-0 text-base text-red-600 dark:text-neutral-200" v-if="userList.length != 0">
            <strong>OK! CONFIRMADO...</strong>
          </h5>
          <p class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50" v-if="userList.length != 0">
            <strong v-for="user in userList" v-bind:key="user.id">
                {{ user.firstName }} {{ user.lastName }}
            </strong>
          </p>
          <div class="w-10 relative mb-4 flex flex-wrap items-stretch">
            <div class="relative inline-flex self-center">
              <input type="text" 
                class="text-sm 
                font-semibold 
                rounded border-2 
                border-blue-400 
                text-gray-600 
                h-10 w-100 pl-5 pr-10 
                bg-white 
                hover:border-gray-400 
                focus:outline-none appearance-none"
                placeholder="Dig. Sobre Nome ou Email..."
                v-model="txtDataFindUser" v-if="userList.length === 0">
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <button 
            v-on:click="fechUserDataByLastNameOrEmail"
            type="button"
            class="text-white 
            bg-blue-700 
            hover:bg-blue-80
            0 focus:ring-4 
            focus:ring-blue-300 
            font-medium rounded-lg 
            text-sm px-5 py-2.5 mr-2 mb-2 
            dark:bg-blue-600 
            dark:hover:bg-blue-700 
            focus:outline-none 
            dark:focus:ring-blue-800"
            v-if="userList.length === 0">
            <span>BUSCAR</span>
          </button>
          <button 
            v-on:click="saveTheNewOrder"
            type="button"
            class="text-white 
            bg-red-700 
            hover:bg-blue-80
            0 focus:ring-4 
            focus:ring-blue-300 
            font-medium rounded-lg 
            text-sm px-5 py-2.5 mr-2 mb-2 
            dark:bg-red-600
            dark:hover:bg-red-700 
            focus:outline-none 
            dark:focus:ring-red-800"
            v-if="userList.length != 0">
            <span>FINALIZAR o PEDIDO!</span>
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

            //LAST NAME OR EMAIL FOR SEARCH
            txtDataFindUser: ''
        }
    },

    mounted() {
        //this.selectAllUserToOrder()
    },

    methods: {

      handleClose(e){
        if(e.target.id === 'wrapper' || e.target.id === 'wrapperIn') 
        {
          this.$emit('close-modal')
        }
      },

      async saveTheNewOrderTEST(){
        console.log('User_ID_Selected:' + this.userList[0].id)
      },

      async saveTheNewOrder(){
        await this.$axios.$post('/foodapi/order-for-lunch/add', {
            orderValue: this.itemPrice,
            amount: parseInt(this.itemAmount),
            lunchMealId: this.itemId,
            userOrderId: this.userList[0].id,
        })
        .then(response => {
        //RETORNA OS DADOS DA ORDEM SALVA... COMO UTILIZAR NO APP?
        console.log(response)
        console.log('User_ID_Selected:' + this.userList[0].id)
        })
        .catch(err => {
        console.log(err)
        })
      },

      //GET USER LIST FOR ORDER A LUNCH... TEST TO USE ON THE SELECT FIELD
      async selectAllUserToOrder() {
        await this.$axios.$get('/foodapi/user/listAll')
        .then( response => {
          this.userList = response
        })
        .catch(err => {
        console.log(err)
        })
      },

      //TEST...
      async fechUserDataByLastNameOrEmail(){
        await this.$axios.$get('/foodapi/user/listBy/lastNameOrEmail/'+ this.txtDataFindUser)
        .then( response => {
          this.userList = response
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