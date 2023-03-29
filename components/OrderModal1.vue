<template>
  <div id="wrapper" class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex" v-on:click="handleClose">
    <div id="wrapperIn" class="w-[600px] mt-16 mx-auto">
      <form id="form" class="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
                <h2 class="text-xl font-medium text-red-700 dark:text-white">
                    <strong>ENVIO DE PEDIDOS</strong>
                </h2>
            </div>
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
            <span id="CONFIRMATION_SHOW_MSN" class="mb-0 text-base text-red-400 dark:text-neutral-200" v-if="searchByEmpyField.length === 0">
                <strong> Informe um Sobrenome ou Email! </strong>
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
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" 
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" 
                    stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
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
                dark:focus:ring-blue-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">BUSCA</span>
              </button>
            </div>
        </div>
        <div class="mb-4" v-if="userList.length === 1 && saveSuccessfully.length === 0">
          <div class="flex items-center justify-self-start">
              <button
                  v-for="user in userList" v-bind:key="user.id" 
                  v-on:click="saveTheNewOrder"
                  data-tooltip-target="tooltip-no-arrow" type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  FINALIZAR o PEDIDO para: {{ user.firstName }} {{ user.lastName }}
              </button>
            </div>
        </div>
        <div class="mb-4" v-if="saveSuccessfully.length != 0">
            <div id="toast-success" class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Check icon</span>
              </div>
              <div class="ml-3 text-sm font-normal">OK PEDIDO GERADO!</div>
              <button v-on:click="clearForm" type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                  <span class="sr-only">Close</span>
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
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

            //DATA DO CREATE A NEW ORDER.... IS SEND TO THIS MODAL BY THE INDEX PAGE
            itemPrice: localStorage.getItem('theOrderValue'),
            itemAmount: '1',
            itemId: localStorage.getItem('theLunchMealId'),
            //USERID GET BY THE SEARCH

            //TXT DATA TO VIEW ONLY ON MODAL
            itemLunchMealName: localStorage.getItem('theLunchMealName'),
            itemLunchBoxlName: localStorage.getItem('theLunchBoxName'),

            //USER DATA LIST... DEFAULT IS EMPTY WHEN THE INDEX MAIN IS CREATED
            userList: [],

            //USER DATA LIST MARK.... USED TO SHOW WHEN THE USER IS NOT FOUND
            userListNotFound: ['CLEAR'],

            //USED FOR MSN TO USER
            searchByEmpyField: ['NO_EMPTY'],

            //USED FOR MSN TO USER
            saveSuccessfully: [],

            //USER ID SELECTED
            selectedUserId: '',

            //LAST NAME OR EMAIL FOR SEARCH
            txtDataToFindUser: '',
        }
    },

    mounted(){
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
        this.saveSuccessfully = []
        //this.searchByEmpyField = []
      },

      handleClose(e){
        if(e.target.id === 'wrapper' || e.target.id === 'wrapperIn') 
        {
          this.$emit('close-modal')
          this.clearForm()
          this.searchByEmpyField = ['NO_EMPTY']
        }
      },

      //OK.. WORKING GOOD!!
      async fechUserDataByLastNameOrEmail(){

        // IF I FOUND SOMETHING ON THE INPUT TO PERFORM A SEARCH ACTION
        if (this.txtDataToFindUser) {
          await this.$axios.$get('/foodapi/user/listBy/lastNameOrEmail/'+ this.txtDataToFindUser)
            .then( response => {
              this.userList = response
                //console.log('kkkkk: ', response.length)
              if (response.length === 0){
                //console.log('VEIO ZERADO..')
                this.userListNotFound = []
                this.searchByEmpyField = ['NO_EMPTY']
              } else {
                this.userListNotFound = ['CLEAR']
                this.searchByEmpyField = ['NO_EMPTY']
              }
            })
            .catch(err => {
            console.log(err)
            })
        } else {
          //RETURN A MSN
          this.searchByEmpyField = []
          console.log('EMPTY FIELD')
        }
      },

      //SAVE THE ORDER A LUNCH... MELHORAR!!???
      async saveTheNewOrder(){
        const calcPrice = (parseFloat (this.itemPrice) * parseInt(this.itemAmount));
        await this.$axios.$post('/foodapi/order-for-lunch/add', {
            orderValue: parseFloat(calcPrice),
            amount: parseInt(this.itemAmount),
            lunchMealId: this.itemId,
            userOrderId: this.userList[0].id,
        })
        .then(response => {
        //RETORNA OS DADOS DA ORDEM SALVA... COMO UTILIZAR NO APP?
        console.log(response)
        console.log('User_ID_Selected:' + this.userList[0].id)
        console.log('PREÇO CALCULADO: ' + calcPrice)
        this.saveSuccessfully = ['SAVED']
        })
        .catch(err => {
        console.log(err)
        })
      },

      //GET USER LIST FOR ORDER A LUNCH... TEST TO USE ON THE SELECT FIELD
      async selectAllUserToOrder(){
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