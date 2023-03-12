
<template>
    <div class="container max-w-screen-lg mx-auto px-1 mt-10">

    <!-- START CABEÇALHO DA TABELA COM HISTÓRICO DE PEDIDOS RECENTES E DO BTN DE RELAÇÃO DE PEDIDOS -->
        <div class="flex ...">
            <div class="flex-1 ..."><span class="txt-title-app">Histórico de Pedidos Recentes</span></div>
            <div class="top-0 left-96 right-0">
                <button class="btn btn-blue">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.046.752.097 1.126.153A2.212 2.212 0 0118 8.653v4.097A2.25 2.25 0 0115.75 15h-.241l.305 1.984A1.75 1.75 0 0114.084 19H5.915a1.75 1.75 0 01-1.73-2.016L4.492 15H4.25A2.25 2.25 0 012 12.75V8.653c0-1.082.775-2.034 1.874-2.198.374-.056.75-.107 1.127-.153L5 6.25v-3.5zm8.5 3.397a41.533 41.533 0 00-7 0V2.75a.25.25 0 01.25-.25h6.5a.25.25 0 01.25.25v3.397zM6.608 12.5a.25.25 0 00-.247.212l-.693 4.5a.25.25 0 00.247.288h8.17a.25.25 0 00.246-.288l-.692-4.5a.25.25 0 00-.247-.212H6.608z"></path>
                        </svg>
                        <span>Relação de Pedidos</span>
                </button>
            </div>
        </div>
    <!-- END CABEÇALHO DA TABELA COM HISTÓRICO DE PEDIDOS RECENTES E DO BTN DE RELAÇÃO DE PEDIDOS -->
    
        <table class="table min-w-full leading-normal w-full ...">
            <thead>
                <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Lunch Box Name
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Order Day Creation
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Client First Name
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Menu Name
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in ordersList" v-bind:key="order.id" >
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span>{{ formatUpperCase(order.lunchMeal.lunchBox.name) }}</span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span>{{ formatDateByDayJs(order.createdAt) }}</span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span>{{ formatUpperCase(order.userOrder.firstName) }}</span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span>{{ formatUpperCase (order.lunchMeal.name) }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

  <script lang="ts">
  import Vue from 'vue'
  import * as dayjs from 'dayjs'

  export default Vue.extend({
    name: 'OrderTable',

    data: () => ({
        ordersList: [],
    }),

    created() {
        this.fetchOrdersData()
        },

    watch: {

    },
    
    methods: {

      async fetchOrdersData() {
        const orders = this.$axios.$get('/foodapi/order-for-lunch/listAll');
            this.ordersList = await orders;
            console.table(orders);//TEST
        },

        formatDateByDayJs(apiDateValue){
            const theOne = dayjs(apiDateValue).format("dddd");
        return theOne.toUpperCase()
        },

        formatUpperCase(theFieldValue){
            const theOne = theFieldValue
        return theOne.toUpperCase()
        }

    }

  })
  
  </script>