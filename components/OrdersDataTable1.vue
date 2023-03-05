
<template>
    <table class="min-w-full leading-normal">
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
                    <span>{{ toTheUpperCase (order.lunchMeal.lunchBox.name) }}</span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span>{{ formatDateDayJs(order.createdAt) }}</span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span>{{ toTheUpperCase(order.userOrder.firstName) }}</span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span>{{ toTheUpperCase (order.lunchMeal.name) }}</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

  <script lang="ts">
  import Vue from 'vue'
  import * as dayjs from 'dayjs'

  export default Vue.extend({
    name: 'OrderTable',

    data: () => ({
        ordersList: [],
        todayDay: new Date().getDate().toLocaleString(),
        todayMonth: new Date().getMonth().toLocaleString(),
        todayYear: new Date().getFullYear(),
    }),

    created() {
        this.fetchOrdersData(),
        this.showDate(),
        this.showDateFull()
        },

    watch: {

    },
    
    methods: {

      async fetchOrdersData() {
        const orders = this.$axios.$get('/foodapi/order-for-lunch/listAll');
            this.ordersList = await orders;

            //TEST
            console.table(orders);
            console.log('METODO 1 Date:' + this.todayDay, this.todayMonth , this.todayYear); // NÃO ESTÁ TRAZENDO O NÚMERO REF. AO MÊS CORRETO!.. VERIFICAR!
        },

       showDate(){
            const dateObj = new Date(Date.now());
            console.log('METODO 2 Date:' + dateObj);
        },

        showDateFull(){
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const d = new Date(Date.now());
            var dayName = days[d.getDay()];
            console.log('METODO 3 Date:' + dayName);
        },

        formatDate(givendate) {
            const theOne = givendate.replace(/T|Z/g, ' ');
        return theOne
        },

        formatDateDayJs(givendate){
            //const theOne = dayjs(givendate).format("MMMM, YYYY");
            //const theOne = dayjs(givendate).format("MM/DD/YYYY");
            //const theOne = dayjs(givendate).format("DD/MM/YYYY");
            //const theOne = dayjs(givendate).format("DD/MMMM/YYYY");
            //const theOne = dayjs(givendate).format("dddd/MMMM/YYYY");//ESSE PODE SER UTIL.. ADAPTAR AO SALVAR O PEDIDO?
            const theOne = dayjs(givendate).format("dddd");//ESSE PODE SER UTIL.. ADAPTAR AO SALVAR O PEDIDO?
            //const theOne = dayjs(givendate).toString();
        return theOne.toUpperCase()
        },

        toTheUpperCase(theField){
            const theOne = theField
            return theOne.toUpperCase()
        }
    }

  })
  
  </script>