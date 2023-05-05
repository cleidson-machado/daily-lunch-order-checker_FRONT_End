<template>
  <div id="new-order-modal" data-modal-placement="top-center" tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
    <div class="relative p-4 w-full h-full max-w-4xl md:h-auto">
      <!-- Modal content -->
      <div class="relative p-4 bg-gray-200 rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <!-- Modal header -->
        <div class="flex justify-between mb-4 rounded-t sm:mb-5">
          <div class="text-lg text-gray-900 md:text-xl dark:text-white">
            <h3 class="font-semibold ">
              {{ itemLunchMealName }}
            </h3>
            <p>
              <span class="font-bold"> R$ {{ itemPrice }} </span> <span class="font-extralight text-xs text-black">
                ( preço unitário - simbólico )
              </span>
            </p>
          </div>
          <div>
            <button type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="new-order-modal">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
        </div>
        <dl>
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Pedido: {{ itemLunchBoxlName }} |
            Tipo: {{ itemLunchBoxlType }} |</dt>
          <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">CARDÁPIO: {{ itemLunchMealDescription }}
            EMBALAGEM: {{ itemLunchBoxlDescription }}
          </dd>
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Colaborador:
            <!-- START MSN AREA ######################################## -->
            <!-- START MSN_001 -->
            <span id="CONFIRMATION_SHOW_MSN_1" v-if="userList.length === 1">
              <span v-for="user in userList" v-bind:key="user.id"> {{ user.firstName }} {{ user.lastName }}
                <span class="text-red-600">
                  | OK!... | <span class="font-extralight text-xs">selecione o botão FINALIZAR para confirmar seu pedido
                    de hoje!</span>
                </span> </span>
            </span>
            <!-- END MSN_001 -->
            <!-- START MSN_002 -->
            <span id="CONFIRMATION_SHOW_MSN_2" v-if="userListNotFound.length === 0">
              <span> {{ txtDataToFindUser }} ... </span>
              <span class="text-yellow-600">
                NÃO ENCONTRADO!
              </span>
            </span>
            <!-- START MSN_002 -->
            <!-- START MSN_003 -->
            <span id="CONFIRMATION_SHOW_MSN_3" v-if="userList.length >= 2">
              <span>{{ txtDataToFindUser }} ...
                <span class="text-blue-900">
                  Multiplas Referências Encontradas! Seja mais específico!
                </span>
              </span>
            </span>
            <!-- END MSN_003 -->
            <!-- START MSN_004 -->
            <span id="CONFIRMATION_SHOW_MSN_4" v-if="searchByEmpyField.length === 0">
              <span class="text-red-400"> Execute uma Busca primeiro Informando um Sobrenome ou Email! </span>
            </span>
            <!-- END MSN_004 -->
            <!-- END MSN AREA ######################################## -->
          </dt>
          <!-- START SEARCH AREA -->
          <div>
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <input type="text" id="simple-search" v-model="txtDataToFindUser" v-on:focusin="clearForm"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Digite o Sobrenome ou Email para Pesquisar e Adicionar um Colaborador para este Pedido..."
                  required>
              </div>
              <button type="button" v-on:click="fechUserDataByLastNameOrEmail"
                class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </form>
            <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400"></dd>
          </div>
          <!-- END SEARCH AREA -->
          <!-- START TOAST CONFIRMATION AREA_01 -->
          <div class="mb-4" v-if="saveSuccessfully.length != 0">

            <div id="toast-success"
              class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
              role="alert">
              <div
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Check icon</span>
              </div>
              <div class="ml-3 text-sm font-normal">OK PEDIDO GERADO!</div>
              <button v-on:click="clearForm" type="button"
                class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-success" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
          <!-- END TOAST CONFIRMATION AREA_01 -->
          <!-- ############################## -->
          <!-- START TOAST CONFIRMATION AREA_02 -->
          <div class="mb-4" v-if="foundMultipleDataMsn.length === 0">
            <div id="toast-warning"
              class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
              role="alert">
              <div
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Warning icon</span>
              </div>
              <div class="ml-3 text-sm font-normal">Ped. NEGADO! Mult. Data Found!</div>
              <button v-on:click="clearForm" type="button"
                class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-warning" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
          <!-- END TOAST CONFIRMATION AREA_02 -->
          <!-- ############################## -->
          <!-- START TOAST CONFIRMATION AREA_03 -->
          <div class="mb-4" v-if="foundErrorOnSaveAction.length != 0">
            <div id="toast-danger"
              class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
              role="alert">
              <div
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Error icon</span>
              </div>
              <div class="ml-3 text-sm font-normal">{{ foundErrorOnSaveAction }}</div>
              <button v-on:click="clearForm" type="button"
                class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-danger" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
          <!-- END TOAST CONFIRMATION AREA_03 -->
        </dl>
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-3 sm:space-x-4">
            <button type="button" v-on:click="saveTheNewOrder"
              class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                <path fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd"></path>
              </svg>
              FINALIZAR
            </button>
            <router-link to="/" custom v-slot="{ navigate }">
              <button v-on:click="navigate" role="link" data-modal-toggle="new-order-modal"
                v-on:mousedown="changeToNormalCloseModal()"
                class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                MUDAR para Versão NORMAL!
              </button>
            </router-link>
          </div>
          <button type="button"
            class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
            <svg aria-hidden="true" class="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"></path>
            </svg>
            EXCLUIR ANTERIOR
          </button>
        </div>
      </div>
      <!-- Modal content -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { initFlowbite } from 'flowbite';

export default Vue.extend({
  name: 'OrderLunchModalFit',

  data: () => {
    return {
      //DATA DO CREATE A NEW ORDER.... IS SEND TO THIS MODAL BY THE INDEX PAGE
      itemPrice: localStorage.getItem('theOrderValue'),
      itemAmount: '1',
      itemId: localStorage.getItem('theLunchMealId'),
      //USERID GET BY THE SEARCH

      //TXT DATA TO VIEW ONLY ON MODAL
      itemLunchMealName: localStorage.getItem('theLunchMealName'),
      itemLunchMealDescription: localStorage.getItem('theLunchMealDescription'),
      itemLunchBoxlName: localStorage.getItem('theLunchBoxName'),
      itemLunchBoxlDescription: localStorage.getItem('theLunchBoxDescription'),
      itemLunchBoxlType: localStorage.getItem('theLunchBoxType'),

      //USER DATA LIST... DEFAULT IS EMPTY WHEN THE INDEX MAIN IS CREATED
      userList: [],

      //USER DATA LIST MARK.... USED TO SHOW WHEN THE USER IS NOT FOUND
      userListNotFound: ['NO_EMPTY'],

      //USED FOR MSN TO USER
      searchByEmpyField: ['NO_EMPTY'],

      //USED FOR MSN TO USER
      saveSuccessfully: [],

      //USER ID SELECTED
      selectedUserId: '',

      //LAST NAME OR EMAIL FOR SEARCH
      txtDataToFindUser: '',

      //USED WHEN SEND A MULTIPLE DATA TO SAVE ACTION
      foundMultipleDataMsn: ['NO_EMPTY'],

      //USER WHEN SEND A SAVE ACTION AND FOUND ERROR
      foundErrorOnSaveAction: [],

    };
  },

  mounted() {
    //this.selectAllUserToOrder() //IT IS A TEST... CREATE HERE TO POPULATE THE COMBO SELECT ON LOADING PAGE..
    initFlowbite();
  },

  methods: {
    //OK.. WORKING GOOD!!
    clearForm() {
      this.userList = []; //CLEAR THE DATA LIST OF USER FIND BY SEARCH
      this.txtDataToFindUser = ''; //CLEAR THE FIELD USED ON A SEARCH ACTION
      this.userListNotFound = ['NO_EMPTY'];
      this.saveSuccessfully = [];
      this.searchByEmpyField = ['NO_EMPTY'];
      this.foundMultipleDataMsn = ['NO_EMPTY'];
      this.foundErrorOnSaveAction = [];
    },

    //OK.. WORKING GOOD!!
    async fechUserDataByLastNameOrEmail() {
      //debugger
      try {
        await this.$axios
          .$get('user/listBy/lastNameOrEmail/' + this.txtDataToFindUser)
          .then((response) => {
            this.userList = response;
            if (response.length === 1) {
              this.userListNotFound = ['NO_EMPTY'];
              this.searchByEmpyField = ['NO_EMPTY'];
            }
          })
          .catch((err) => {
            if (err.response.status === 400) {
              this.userListNotFound = [];
              console.log('USER NOT FOUND!')
            } if (err.response.status === 404) {
              this.searchByEmpyField = [];
              console.log('EMPTY FIELD WAS BEEN FOUND, CHECK URI ON SWAGGER!')
            }
          })
      } catch (error) {
        console.log('STRANGER THINGS HAPPEN: ' + error)
      }
    },

    //OK.. WORKING GOOD!!.. USED WHEN THE API DOES NOT RETURN ERROR WHEN USER IS NOT FOUND
    async fechUserDataByLastNameOrEmail2() {
      // IF I FOUND SOMETHING ON THE INPUT TO PERFORM A SEARCH ACTION
      if (this.txtDataToFindUser) {
        await this.$axios
          .$get('user/listBy/lastNameOrEmail/' + this.txtDataToFindUser)
          .then((response) => {
            this.userList = response;
            if (response.length === 0) {
              this.userListNotFound = [];
              this.searchByEmpyField = ['NO_EMPTY'];
            } else {
              this.userListNotFound = ['NO_EMPTY'];
              this.searchByEmpyField = ['NO_EMPTY'];
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        //RETURN A MSN
        this.searchByEmpyField = [];
        //console.log('EMPTY FIELD by SEARCH');
      }
    },

    //SAVE THE ORDER A LUNCH... MELHORAR!!???
    async saveTheNewOrder() {
      //debugger
      if (this.userList.length === 1) {
        const calcPrice = parseFloat(this.itemPrice) * parseInt(this.itemAmount);
        await this.$axios
          .$post('order-for-lunch/add', {
            orderValue: parseFloat(calcPrice),
            amount: parseInt(this.itemAmount),
            lunchMealId: this.itemId,
            userOrderId: this.userList[0].id,
          })
          .then((response) => {
            //THE ORDER CONFIRMATION
            this.saveSuccessfully = [response.length];
          })
          .catch((err) => {
            console.log('FOUND A ERROR TO SAVE:' + err);
            this.foundErrorOnSaveAction = err
          });
      } else {
        //RETURN A MSN
        if (this.userList.length >= 2) {
          this.foundMultipleDataMsn = [];
        } else {
          this.searchByEmpyField = [];
          //console.log('EMPTY FIELD by SAVE ACTION');
        }
      }
    },

    changeToNormalCloseModal() {
      localStorage.clear();
    },

    //GET USER LIST FOR ORDER A LUNCH... TEST TO USE ON THE SELECT COMBO FIELD
    //IT IS A TEST... CREATE HERE TO POPULATE THE COMBO SELECT ON LOADING PAGE..
    async selectAllUserToOrder() {
      await this.$axios
        .$get('user/listAll')
        .then((response) => {
          this.userList = response;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>

<style></style>
