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
              Reserva de Refeições - Operacional TI
              <span class="text-red-700 text-base">( Joaquin Murtinho )</span>
            </div>
            <div type="button" class="order-first" v-for="(menu, index) in menuList" v-bind:key="index">
              <button data-modal-target="new-order-modal" data-modal-toggle="new-order-modal" v-on:click="setMenuAttributes(
                menu.id,
                menu.name,
                menu.type,
                menu.averageCalories,
                menu.averageWeight,
                menu.averagePrice,
                menu.dessertName,
                menu.nameDayWeek,
                menu.description,
                menu.rateQualityNumber,
                menu.imageLinkPath,
                menu.createdAt,
                menu.updatedAt,
                menu.lunchBox.name,
                menu.lunchBox.description,
                menu.lunchBox.imageLinkPath,
                menu.lunchBox.createdAt,
                menu.lunchBox.updatedAt
              )" class="btn btn-red min-h-full min-w-full">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z">
                  </path>
                </svg>
                <span>REALIZAR PEDIDO!</span>
              </button>
            </div>
          </div>

          <div
            class="flex flex-row auto-cols-max auto-rows-auto gap-2 bg-gray-300 border-solid border-4 border-gray-300 rounded-md ...">
            <div class="basis-96" v-for="(menu, index) in menuList" v-bind:key="index + 1">
              <img class="mt-1 mb-1 rounded-lg shadow-lg object-fill h-48 w-96 ..."
                v-bind:src="menu.lunchBox.imageLinkPath" />
              <span class="font-extralight text-xs text-black"> imagem ilustrativa!... </span>
            </div>

            <div class="basis-full" v-for="(menu, index) in menuList" v-bind:key="index + 2">
              <div class="txt-label-item">Embalagem:</div>
              <div class="txt-title-food">{{ menu.lunchBox.name }}</div>
              <p class="txt-content">{{ menu.lunchBox.description }}</p>
            </div>
          </div>
        </div>

        <div class="container max-w-screen-lg mx-auto px-1">
          <div
            class="flex flex-row auto-cols-max auto-rows-auto gap-2 bg-gray-300 border-solid border-4 border-gray-300 rounded-md ...">
            <div class="basis-96" v-for="(menu, index) in menuList" v-bind:key="index + 3">
              <img class="mt-1 mb-1 rounded-lg shadow-lg object-fill h-48 w-96 ..." v-bind:src="menu.imageLinkPath" />
              <span class="font-extralight text-xs text-black"> imagem ilustrativa!... </span>
            </div>

            <div class="basis-full" v-for="(menu, index) in menuList" v-bind:key="index + 4">
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
            <div class="grid grid-cols-1 gap-0 mt-4 mb-4" v-for="(menu, index) in menuList" v-bind:key="index + 5">
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

            <div class="grid grid-cols-1 gap-0 mt-4 mb-4" v-for="(menu, index) in menuList" v-bind:key="index + 6">
              <div class="txt-title-food text-center">
                PESO MÉDIO<span class="txt-label-item"> ( g )</span>
              </div>
              <div class="txt-content-menu-numbers">
                {{ menu.averageWeight }}
              </div>
              <div class="font-extralight text-center text-xs text-black">pessagem estimada...</div>
            </div>

            <div class="grid grid-cols-1 gap-0 mt-4 mb-4" v-for="(menu, index) in menuList" v-bind:key="index + 7">
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
        <order-lunch-modal :menuId="menuIdModal" :menuName="menuNameModal" :menuType="menuTypeModal"
          :menuAverageCalories="menuAverageCaloriesModal" :menuAverageWeight="menuAverageWeightModal"
          :menuAveragePrice="menuAveragePriceModal" :menuDessertName="menuDessertNameModal"
          :menuNameDayWeek="menuNameDayWeekModal" :menuDescription="menuDescriptionModal"
          :menuRateQualityNumber="menuRateQualityNumberModal" :menuImageLinkPath="menuImageLinkPathModal"
          :menuCreatedAt="menuCreatedAtModal" :menuUpdatedAt="menuUpdatedAtModal"
          :menuLunchBoxName="menuLunchBoxNameModal" :menuLunchBoxDescription="menuLunchBoxDescriptionModal"
          :menuLunchBoxImageLinkPath="menuLunchBoxImageLinkPathModal" :menuLunchBoxCreatedAt="menuLunchBoxCreatedAtModal"
          :menuLunchBoxUpdatedAt="menuLunchBoxUpdatedAtModal" />
      </div>
    </div>
    <!-- END ELSE NA DIV -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import OrderLunchModal from '@/components/pageCodeGroups/forIndexPage/OrderModal1.vue';
import { initFlowbite } from 'flowbite';

import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export default Vue.extend({
  name: 'TheMenuForToday',

  components: {
    OrderLunchModal,
  },

  data: () => {
    return {
      menuList: [],
      todayDateBr: '',
      todayNameOfWeekBr: '',
      infoTextMsn: '',
      errorCode: 0,
      txtDataTypeDefault: 'NORMAL',

      //FORM MODAL OBJECT FOR ACTIONS AND VIEW ONLY
      menuIdModal: '',
      menuNameModal: '',
      menuTypeModal: '',
      menuAverageCaloriesModal: '',
      menuAverageWeightModal: '',
      menuAveragePriceModal: '',
      menuDessertNameModal: '',
      menuNameDayWeekModal: '',
      menuDescriptionModal: '',
      menuRateQualityNumberModal: '',
      menuImageLinkPathModal: '',
      menuCreatedAtModal: '',
      menuUpdatedAtModal: '',
      menuLunchBoxNameModal: '',
      menuLunchBoxDescriptionModal: '',
      menuLunchBoxImageLinkPathModal: '',
      menuLunchBoxCreatedAtModal: '',
      menuLunchBoxUpdatedAtModal: '',
    };
  },

  mounted() {
    initFlowbite();
  },

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
      this.todayNameOfWeekBr = response;
    },

    todayDateBrFormat() {
      let response = dayjs(Date.now()).format('DD/MM/YYYY');
      this.todayDateBr = response
    },

    //OK.. METHOD USING RESPONSE
    async fetchMenuDataForToday() {

      //CLEAR ON LOAD OR RELOAD PAGE...
      this.menuList = [];

      const typeName = this.txtDataTypeDefault;
      const dayName = this.nameOfDayWeekToday();
      this.todayDateBrFormat(); //SET THE CURRENT DATE PT-BR
      this.nameOfDayWeekTodayBrFormat(); //SET THE NAME OF WEEK TO PT-BR

      await this.$axios.$get('/lunch-meal-menu/listBy/weekDayAndType/' + dayName + '/' + typeName)
        .then(response => {
          if (dayName == 'SATURDAY' && response.length != 0) {
            //RETURN WARNING SATURDAY ###### ADD TO THE FUTURE PARAMETERS ######
            this.infoTextMsn = 'NO ' + this.todayNameOfWeekBr + ' NÃO HÁ FORNECIMENTO DE REFEIÇÕES!';

          } else if (dayName == 'SUNDAY' && response.length != 0) {
            //RETURN WARNING SUNDAY ###### ADD TO THE FUTURE PARAMETERS ######
            this.infoTextMsn = 'NO ' + this.todayNameOfWeekBr + ' NÃO HÁ FORNECIMENTO DE REFEIÇÕES!';

          } else if (response.length != 0) {

            //RETURN TO DATA FOR MODAL AND THIS MENU | NORMAL | ...OR... | FIT | ROUTE PAGE
            this.menuList = response;
            //localStorage.clear();

          } else {
            this.infoTextMsn =
              'NÃO EXISTEM!!!, AINDA, OPÇÕES DE MENU CRIADOS PARA: ' +
              '| ' +
              this.todayNameOfWeekBr +
              ' |';
          }
        })
        .catch(err => {
          'Error Code ( ' + err.response.status + ' ) Sorry The API sever is Of Line?';
          this.errorCode = err.response.status;
          console.log(this.infoTextMsn);
        })
    },

    setMenuAttributes(id, name, type, aveCal, aveWeig, avePri, desNam, dayNam, descPt, rateNum, igmLink, creAt, updAt, boxName, boxDescr, boxImg, boxCreAt, boxUpdAt) {
      this.menuIdModal = id
      this.menuNameModal = name
      this.menuTypeModal = type
      this.menuAverageCaloriesModal = aveCal
      this.menuAverageWeightModal = aveWeig
      this.menuAveragePriceModal = avePri
      this.menuDessertNameModal = desNam
      this.menuNameDayWeekModal = dayNam
      this.menuDescriptionModal = descPt
      this.menuRateQualityNumberModal = rateNum
      this.menuImageLinkPathModal = igmLink
      this.menuCreatedAtModal = creAt
      this.menuUpdatedAtModal = updAt
      this.menuLunchBoxNameModal = boxName
      this.menuLunchBoxDescriptionModal = boxDescr
      this.menuLunchBoxImageLinkPathModal = boxImg
      this.menuLunchBoxCreatedAtModal = boxCreAt
      this.menuLunchBoxUpdatedAtModal = boxUpdAt
    },

  },

  //CHANGE CODE SCHEDULE
  //00 CHANGE THE METHOD TO USE PROMISES AND RESPONSE CORRECTELY... ##### OK!
  //01 REFATORE THIS PAGE / AND MODAL TO USE PROPS INSTED LOCAL STORAGE ITEM... ##### OK!
  //03 RECREATE THE MODAL HTML AND CSS CODE TO USE THE SAME OF MENUS TABLE MODALS... ##### ERROR.. AT 25/04/2023

});
</script>

<style></style>
