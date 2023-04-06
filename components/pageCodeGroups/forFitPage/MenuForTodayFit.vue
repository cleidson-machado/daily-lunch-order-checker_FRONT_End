<template>
  <div>
    <div v-if="menuList.length === 0">
      <!-- START SHOW A WARNING OR ERROR MENSAGE -->
      <div class="pt-6">
        <div class="container max-w-screen-lg mx-auto px-1">
          <div class="grid grid-cols-1 gap-4 place-items-center h-16 ...">
            <div v-if="errorCode === 504">
              <div class="mb-4 rounded-lg bg-danger-100 py-5 px-6 text-base text-danger-700" role="alert">
                <p class="font-bold text-danger-700">{{ infoTextMsn }}</p>
              </div>
            </div>
            <div v-else>
              <div class="mb-4 rounded-lg bg-warning-50 py-5 px-6 text-base text-warning-800" role="alert">
                <p class="font-bold text-warning-900">{{ infoTextMsn }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END SHOW A WARNING OR ERROR MENSAGE -->
    </div>

    <div v-else>
      <div class="pt-6 space-y-1 ...">
        <div class="container max-w-screen-lg mx-auto px-1">
          <div class="flex justify-between ...">
            <div class="txt-title-app text-left">
              Reserva de Refeições FIT - Operacional TI
              <span class="text-white text-base">( Joaquin Murtinho )</span>
            </div>
            <div class="order-first">
              <button data-modal-target="new-order-modal" data-modal-toggle="new-order-modal"
                class="btn btn-blue min-h-full min-w-full" type="button">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z">
                  </path>
                </svg>
                <span>REALIZAR PEDIDO FIT!</span>
              </button>
            </div>
          </div>

          <div
            class="flex flex-row auto-cols-max auto-rows-auto gap-2 bg-gray-300 border-solid border-4 border-gray-300 rounded-md ...">
            <div class="basis-96" v-for="(menu, index) in menuList" v-bind:key="index">
              <img class="mt-1 mb-1 rounded-lg shadow-lg object-fill h-48 w-96 ..."
                v-bind:src="menu.lunchBox.imageLinkPath" />
              <span class="font-extralight text-xs text-black"> imagem ilustrativa!... </span>
            </div>

            <div class="basis-full" v-for="(menu, index) in menuList" v-bind:key="index + 1">
              <div class="txt-label-item">Embalagem:</div>
              <div class="txt-title-food">{{ menu.lunchBox.name }}</div>
              <p class="txt-content">{{ menu.lunchBox.description }}</p>
            </div>
          </div>
        </div>

        <div class="container max-w-screen-lg mx-auto px-1">
          <div
            class="flex flex-row auto-cols-max auto-rows-auto gap-2 bg-gray-300 border-solid border-4 border-gray-300 rounded-md ...">
            <div class="basis-96" v-for="(menu, index) in menuList" v-bind:key="index + 2">
              <img class="mt-1 mb-1 rounded-lg shadow-lg object-fill h-48 w-96 ..." v-bind:src="menu.imageLinkPath" />
              <span class="font-extralight text-xs text-black"> imagem ilustrativa!... </span>
            </div>

            <div class="basis-full" v-for="(menu, index) in menuList" v-bind:key="index + 3">
              <div class="txt-label-item">
                Cardápio {{ menu.type }} de Hoje {{ todayDateBr }} (
                <span class="txt-content">{{ todayNameOfWeekBr }}</span> ):
              </div>
              <div class="txt-title-food">{{ menu.name }}</div>
              <div class="txt-content">{{ menu.description }}</div>
            </div>
          </div>
        </div>

        <div class="container max-w-screen-lg mx-auto px-1">
          <!-- START DADOS NUMÉRICOS -->
          <div class="grid grid-cols-3 gap-0 bg-gray-300 border-solid border-4 border-violet-600 rounded-md ...">
            <div class="grid grid-cols-1 gap-0 mt-4 mb-4" v-for="(menu, index) in menuList" v-bind:key="index + 4">
              <div class="txt-title-food text-center">
                CALORIAS MÉDIAS <span class="txt-label-item"> ( Cal )</span>
              </div>
              <div class="txt-content-menu-numbers">
                {{ menu.averageCalories }}
              </div>
              <div class="font-extralight text-center text-xs text-black">
                valor calórico estimado...
              </div>
            </div>

            <div class="grid grid-cols-1 gap-0 mt-4 mb-4" v-for="(menu, index) in menuList" v-bind:key="index + 5">
              <div class="txt-title-food text-center">
                PESO MÉDIO<span class="txt-label-item"> ( g )</span>
              </div>
              <div class="txt-content-menu-numbers">
                {{ menu.averageWeight }}
              </div>
              <div class="font-extralight text-center text-xs text-black">pessagem estimada...</div>
            </div>

            <div class="grid grid-cols-1 gap-0 mt-4 mb-4" v-for="(menu, index) in menuList" v-bind:key="index + 6">
              <div class="txt-title-food text-center">
                PREÇO MÉDIO<span class="txt-label-item"> ( R$ )</span>
              </div>
              <div class="txt-content-menu-numbers">R$ {{ menu.averagePrice }}</div>
              <div class="font-extralight text-center text-xs text-black">
                preço simbólico estimado...
              </div>
            </div>
          </div>
          <!-- END DADOS NUMÉRICOS -->
        </div>

        <!-- INSERT OF THE MODAL CODE -->
        <order-lunch-modal-fit />
        <index-admin-modal-1 />
      </div>
    </div>
    <!-- END ELSE NA DIV -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import OrderLunchModalFit from '@/components/pageCodeGroups/forFitPage/OrderModal2.vue';
import indexAdminModal1 from '@/components/pageCodeGroups/forAdminPage/adminModal1.vue';
import { initFlowbite } from 'flowbite';

import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export default Vue.extend({
  name: 'TheMenuForTodayFit',

  components: {
    OrderLunchModalFit,
    indexAdminModal1,
  },

  data: () => {
    return {
      menuList: [],
      todayDateBr: '',
      todayNameOfWeekBr: '',
      infoTextMsn: '',
      errorCode: 0,
      txtDataTypeDefault: 'FIT',
    };
  },

  mounted() {
    initFlowbite();
    localStorage.clear();
  },

  //NÃO CARREGA OS DADOS NO MODAL EM SESSÃO ZERADA!.. VERIFICAR?
  created() {
    this.nameOfDayWeekToday();
    this.fetchMenuDataForToday();
  },

  watch: {},

  methods: {
    nameOfDayWeekToday() {
      let response = dayjs(Date.now()).format('dddd').toUpperCase();
      return response;
    },

    nameOfDayWeekTodayBrFormat() {
      let response = dayjs(Date.now()).locale('pt-br').format('dddd').toUpperCase();
      return response;
    },

    todayDateBrFormat() {
      let response = dayjs(Date.now()).format('DD/MM/YYYY');
      return response;
    },

    //OK.. REVIEW
    async fetchMenuDataForToday() {
      try {
        const typeName = this.txtDataTypeDefault;
        const dayName = this.nameOfDayWeekToday();
        //const resApi = await this.$axios.$get('/foodapi/lunch-meal-menu/listBy/' + dayName);
        const resApi = await this.$axios.$get('/foodapi/lunch-meal-menu/listBy/weekDayAndType/' + dayName + '/' + typeName);

        //SET THE CURRENT DATE PT-BR
        this.todayDateBr = this.todayDateBrFormat();
        this.todayNameOfWeekBr = this.nameOfDayWeekTodayBrFormat();

        if (dayName == 'SATURDAY' && resApi.length != 0) {
          //RETURN WARNING SATURDAY
          this.infoTextMsn = 'NO ' + this.todayNameOfWeekBr + ' NÃO HÁ FORNECIMENTO DE REFEIÇÕES!';
        } else if (dayName == 'SUNDAY' && resApi.length != 0) {
          //RETURN WARNING SUNDAY
          this.infoTextMsn = 'NO ' + this.todayNameOfWeekBr + ' NÃO HÁ FORNECIMENTO DE REFEIÇÕES!';
        } else if (resApi.length != 0) {
          //RETURN TO DATA
          this.menuList = resApi;
          this.sendDataForModal();
        } else {
          this.infoTextMsn =
            'NÃO EXISTEM!!!, AINDA, OPÇÕES DE MENU | FIT | CRIADOS PARA: ' +
            '| ' +
            this.todayNameOfWeekBr +
            ' |';
        }
      } catch (e) {
        this.infoTextMsn =
          'Error Code ( ' + e.response.status + ' ) Sorry The API sever is Of Line?';
        this.errorCode = e.response.status;
        console.log(this.infoTextMsn);
      }
    },

    //SEND A NEW ORDER...
    sendNewOrderForToday() {
      //OPEN DE MODAL VIEW
      this.sendDataForModal();
    },

    sendDataForModal() {
      //SET TO AMBIENT VARIABLE FOR THE ORDER OBJECT
      localStorage.setItem('theLunchMealId', this.menuList[0].id);
      localStorage.setItem('theOrderValue', this.menuList[0].averagePrice);

      //TXT DATA TO VIEW ONLY ON MODAL
      localStorage.setItem('theLunchMealName', this.menuList[0].name);
      localStorage.setItem('theLunchMealDescription', this.menuList[0].description);
      localStorage.setItem('theLunchBoxName', this.menuList[0].lunchBox.name);
      localStorage.setItem('theLunchBoxDescription', this.menuList[0].lunchBox.description);
      localStorage.setItem('theLunchBoxType', this.menuList[0].type);
    },
  },
});
</script>

<style></style>
