
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