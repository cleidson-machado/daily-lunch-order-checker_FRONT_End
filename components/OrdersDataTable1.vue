
<template>
    <table class="min-w-full leading-normal">
        <thead>
            <tr>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Lunch Box Name
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Order Price
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
                    <span>{{ order.lunchMeal.lunchBox.name }}</span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span>{{ todayDay }} / {{ todayMonth }} / {{ todayYear }}</span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span>{{ order.userOrder.firstName }}</span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span>{{ order.lunchMeal.name }}</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

  <script lang="ts">
  import Vue from 'vue'

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
        }
    }

  })
  
  </script>