<template>
    <div>
        MENUS PAGE
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { initFlowbite } from 'flowbite';
import * as dayjs from 'dayjs'

export default Vue.extend({
    name: 'LunchMenusAdminPlace1',

    data: () => ({
        ordersList: [],
        groupingNumber: 10,
        currentPage: 1,
        pageStart: 0,
        pageEnd: 0,
        amountItemsFound: 0,
        stopNext: 0,
        numberPages: 0,
    }),

    created() {
        this.fetchOrdersData()
    },

    computed: {

        filteredList() {
            const star = (this.currentPage - 1) * this.groupingNumber
            const end = this.currentPage * this.groupingNumber
            const result = this.ordersList.slice(star, end)
            this.pageStart = star
            this.pageEnd = end
            this.stopNext = result.length
            this.numberPages = Math.ceil(this.amountItemsFound / this.groupingNumber) //HERE IS A CALCULATION FOR THE NUMBER OF PAGES
            //console.log(result) //DON'T WORK YET??
            return result
        }

    },

    mounted() {
        initFlowbite();
    },

    methods: {
        async fetchOrdersData() {
            await this.$axios.$get('/foodapi/order-for-lunch/listAll')
                .then(response => {
                    this.ordersList = response
                    this.amountItemsFound = response.length
                    console.table(response)
                })
                .catch(err => {
                    console.log('Error getting all data from API:', err)
                })

        },

        formatDateByDayJs(apiDateValue) {
            const theOne = dayjs(apiDateValue).format('DD/MM/YYYY');
            return theOne.toUpperCase()
        },

        formatUpperCase(theFieldValue) {
            const theOne = theFieldValue
            return theOne.toUpperCase()
        },

        changePage(num) {
            this.currentPage = this.currentPage + num
        },

        changePageBtn(num) {
            this.currentPage = num
        },
    }

})
</script>

<style></style>