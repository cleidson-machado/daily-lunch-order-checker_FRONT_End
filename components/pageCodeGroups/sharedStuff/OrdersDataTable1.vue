
<template>
    <div>

        <div v-if="ordersList.length === 0">
            <!-- START SHOW A ERROR -->
            <div class="pt-6">
                <div class="container max-w-screen-lg mx-auto px-1">
                    <div class="grid grid-cols-1 gap-4 place-items-center h-16 ...">
                        <div class="mb-4 rounded-lg bg-danger-100 py-5 px-6 text-base text-danger-800" role="alert">
                            <strong>API SERVER IS OF LINE!...</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END SHOW A ERROR -->
        </div>

        <div v-else>
            <div class="container max-w-screen-lg mx-auto px-1 mt-10 mb-28">

                <!-- START CABEÇALHO DA TABELA COM HISTÓRICO DE PEDIDOS RECENTES E DO BTN DE RELAÇÃO DE PEDIDOS -->
                <div class="flex justify-between ...">
                    <div><span class="txt-title-app">Histórico dos 15 Últimos Pedidos Recentes...</span></div>
                    <div class="order-first">
                        <button class="btn btn-blue">
                            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path clip-rule="evenodd" fill-rule="evenodd"
                                    d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.046.752.097 1.126.153A2.212 2.212 0 0118 8.653v4.097A2.25 2.25 0 0115.75 15h-.241l.305 1.984A1.75 1.75 0 0114.084 19H5.915a1.75 1.75 0 01-1.73-2.016L4.492 15H4.25A2.25 2.25 0 012 12.75V8.653c0-1.082.775-2.034 1.874-2.198.374-.056.75-.107 1.127-.153L5 6.25v-3.5zm8.5 3.397a41.533 41.533 0 00-7 0V2.75a.25.25 0 01.25-.25h6.5a.25.25 0 01.25.25v3.397zM6.608 12.5a.25.25 0 00-.247.212l-.693 4.5a.25.25 0 00.247.288h8.17a.25.25 0 00.246-.288l-.692-4.5a.25.25 0 00-.247-.212H6.608z">
                                </path>
                            </svg>
                            <span>Relação Detalhada de Pedidos</span>
                        </button>
                    </div>
                </div>
                <!-- END CABEÇALHO DA TABELA COM HISTÓRICO DE PEDIDOS RECENTES E DO BTN DE RELAÇÃO DE PEDIDOS -->

                <div class="table min-w-full leading-normal w-full ...">
                    <div class="table-header-group ...">
                        <div class="table-row">
                            <div
                                class="table-cell px-5 py-3 border-b-2 border-black bg-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                <strong>Lunch Box Name</strong>
                            </div>
                            <div
                                class="table-cell px-5 py-3 border-b-2 border-black bg-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                <strong>Order Day Creation</strong>
                            </div>
                            <div
                                class="table-cell px-5 py-3 border-b-2 border-black bg-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                <strong>Client First Name</strong>
                            </div>
                            <div
                                class="table-cell px-5 py-3 border-b-2 border-black bg-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                <strong>Menu Name</strong>
                            </div>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-row" v-for="(order, index) in filteredList" v-bind:key="index">
                            <div class="table-cell px-5 py-2 border-b-2 border-blue-400 bg-white text-sm">
                                <span>{{ formatUpperCase(order.lunchMeal.lunchBox.name) }}</span>
                            </div>
                            <div class="table-cell px-5 py-2 border-b-2 border-blue-400 bg-white text-sm">
                                <span>{{ formatDateByDayJs(order.createdAt) }}</span>
                            </div>
                            <div class="table-cell px-5 py-2 border-b-2 border-blue-400 bg-white text-sm">
                                <span>{{ formatUpperCase(order.userOrder.firstName) }}</span>
                            </div>
                            <div class="table-cell px-5 py-2 border-b-2 border-blue-400 bg-white text-sm">
                                <span>{{ formatUpperCase(order.lunchMeal.name) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- START PAGINATION BUTTONS AND INFO TEXT -->
                <div class="flex justify-between">
                    <div class="order-first">
                        <span class="text-sm font-semibold text-gray-700 dark:text-gray-400"
                            v-if="stopNext == groupingNumber">
                            Exibindo de
                            <span class="font-semibold text-gray-900 dark:text-white">
                                {{ pageStart }} até {{ pageEnd }}
                            </span>
                            do total de
                            <span class="font-semibold text-gray-900 dark:text-white">{{ amountItemsFound }}</span>
                            registros.
                        </span>
                        <span class="text-sm font-semibold text-gray-700 dark:text-gray-400"
                            v-if="stopNext < groupingNumber">
                            Exibindo a
                            <span class="font-semibold text-gray-900 dark:text-white">
                                Última Página
                            </span>
                            de
                            <span class="font-semibold text-gray-900 dark:text-white">{{ amountItemsFound }}</span>
                            Itens Encontrados.
                        </span>
                    </div>
                    <div>
                        <ul class="inline-flex items-stretch -space-x-px">
                            <li>
                                <button v-on:click="changePage(-1)" :disabled="currentPage === 1"
                                    class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-white bg-violet-800 rounded-l-lg border border-gray-300 hover:bg-violet-600 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span class="sr-only">Previous</span>
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <button v-on:click="changePage(1)" :disabled="stopNext < groupingNumber"
                                    class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-white bg-violet-800 rounded-r-lg border border-gray-300 hover:bg-violet-600 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span class="sr-only">Next</span>
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- END PAGINATION BUTTONS AND INFO TEXT -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as dayjs from 'dayjs'

export default Vue.extend({
    name: 'OrderTable',

    data: () => ({
        ordersList: [],
        groupingNumber: 10,
        currentPage: 1,
        pageStart: 0,
        pageEnd: 0,
        amountItemsFound: 0,
        stopNext: 0,
    }),

    created() {
        this.fetchOrdersData()
    },

    computed: {
        filteredList() {
            const star = (this.currentPage - 1) * this.groupingNumber
            const end = this.currentPage * this.groupingNumber
            const result = this.ordersList.slice(star, end)
            //console.log(star, end)
            //console.log(result)
            this.pageStart = star
            this.pageEnd = end
            this.stopNext = result.length
            return result
        }

    },

    watch: {

    },

    methods: {

        //OK.. NEW METHOD USING THE CORRECT CODE TECHNIC
        async fetchOrdersData() {
            await this.$axios.$get('/foodapi/order-for-lunch/listAll')
                .then(response => {
                    this.ordersList = response
                    //console.table(response)
                    this.amountItemsFound = response.length
                })
                .catch(err => {
                    console.log('Error getting all data from API:', err)
                })
        },

        changePage(num) {
            this.currentPage = this.currentPage + num
        },

        //BKP ORIGINAL INITIAL TEMPORARY METHOD
        async fetchOrdersDataBKP() {
            const orders = this.$axios.$get('/foodapi/order-for-lunch/listAll');
            this.ordersList = await orders;
            console.table(orders);//TEST
        },

        formatDateByDayJs(apiDateValue) {
            const theOne = dayjs(apiDateValue).format("dddd");
            return theOne.toUpperCase()
        },

        formatUpperCase(theFieldValue) {
            const theOne = theFieldValue
            return theOne.toUpperCase()
        }

    }

})

</script>