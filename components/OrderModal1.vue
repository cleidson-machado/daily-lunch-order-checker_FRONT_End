<template>
  <div id="wrapper" class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex" v-on:click="handleClose">
    <div id="wrapperIn" class="w-[600px] mt-16 mx-auto">
      <form id="form" class="bg-white rounded px-8 pt-6 pb-8 mb-4">
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
          <h5 class="mb-0 text-base text-neutral-600 dark:text-neutral-200">
            <strong>Colaborador:</strong>
            <span id="CONFIRMATION_SHOW_MSN" class="mb-0 text-base text-red-600 dark:text-neutral-200" v-if="userList.length === 1">
                <strong>OK! CONFIRMADO...</strong>
            </span>
            <span id="CONFIRMATION_SHOW_MSN" class="mb-0 text-base text-yellow-400 dark:text-neutral-200" v-if="userListNotFound.length === 0">
                <strong> {{ txtDataToFindUser }} ... NÃO ENCONTRADO!</strong>
            </span>
            <span id="CONFIRMATION_SHOW_MSN" class="mb-0 text-base text-blue-900 dark:text-neutral-200" v-if="userList.length >= 2">
                <strong> {{ txtDataToFindUser }} ... Mult. Ref. Found! Seja mais específico!</strong>
            </span>
          </h5>
            <div id="CONFIRMATION_SHOW_NAME_FOUND">
              <p class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50" v-if="userList.length === 1">
                <strong v-for="user in userList" v-bind:key="user.id">
                    {{ user.firstName }} {{ user.lastName }}
                </strong>
              </p>
            </div>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" 
                v-model="txtDataToFindUser"
                v-on:focusin="clearForm"
                class="block 
                w-full 
                p-4 
                pl-10 
                text-sm 
                text-gray-900 
                border 
                border-gray-300 
                rounded-lg 
                bg-gray-50 
                focus:ring-blue-500 
                focus:border-blue-500 
                dark:bg-gray-700 
                dark:border-gray-600 
                dark:placeholder-gray-400 
                dark:text-white 
                dark:focus:ring-blue-500 
                dark:focus:border-blue-500" 
                placeholder="Digite o Sobrenome ou Email para Pesquisar um Colaborador..." required>
                <button type="button" 
                v-on:click="fechUserDataByLastNameOrEmail" 
                class="text-white 
                absolute 
                right-2.5 
                bottom-2.5 
                bg-blue-700 
                hover:bg-blue-800 
                focus:ring-4 
                focus:outline-none 
                focus:ring-blue-300 
                font-medium rounded-lg 
                text-sm px-4 py-2 
                dark:bg-blue-600 
                dark:hover:bg-blue-700 
                dark:focus:ring-blue-800">BUSCA</button>
            </div>
        </div>
        <div class="mb-4" v-if="userList.length === 1">
          <div class="flex items-center justify-self-start">
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
                  dark:focus:ring-red-800">
                  <span>FINALIZAR o PEDIDO!</span>
              </button>
            </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { initFlowbite } from 'flowbite'

  export default Vue.extend({
    name: 'OrderLunchModal',

    el: '#form',

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
            userListNotFound: ['CLEAR'],

            //USER ID SELECTED
            selectedUserId: '',

            //LAST NAME OR EMAIL FOR SEARCH
            txtDataToFindUser: '',
        }
    },

    mounted() {
        //CREATE HERE TO POPULATE THE COMBO SELECT ON LOADING PAGE..
        //this.selectAllUserToOrder()
        initFlowbite();
    },

    methods: {

      //OK.. WORKING GOOD!!
      clearForm(){
        this.userList = [] //CLEAR THE DATA LIST OF USER FIND BY SEARCH
        this.txtDataToFindUser = '' //CLEAR THE FIELD USED ON A SEARCH ACTION
        this.userListNotFound = ['CLEAR']
      },

      handleClose(e){
        if(e.target.id === 'wrapper' || e.target.id === 'wrapperIn') 
        {
          this.$emit('close-modal')
          this.clearForm()
        }
      },

      //OK.. WORKING GOOD!!
      async fechUserDataByLastNameOrEmail(){
      await this.$axios.$get('/foodapi/user/listBy/lastNameOrEmail/'+ this.txtDataToFindUser)
        .then( response => {
          this.userList = response
          console.log('kkkkk: ', response.length)
          if (response.length === 0){
            //console.log('VEIO ZERADO..')
            this.userListNotFound = []
          } else {
            this.userListNotFound = ['CLEAR']
          }
        })
        .catch(err => {
        console.log(err)
        })
      },

      //SAVE THE ORDER A LUNCH... MELHORAR!!???
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
      }

    }


  })
</script>


<style>

</style>