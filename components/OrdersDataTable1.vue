
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
                    <span>{{ order.orderValue }}</span>
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

    data(){
        {
          return {
            ordersList: [],
          }
        }
      },

    async created() {
        const orders = await this.$axios.$get('/foodapi/order-for-lunch/listAll');
            this.ordersList = orders
            console.table(orders);
        }

  })
  
  </script>