<template>
    <div>
        <div class="container" v-if="errorFlagNumberhandle === 0">
            <p>THE MENU ID WAS NOT INFORMED!</p>
        </div>
        <div class="container" v-else-if="errorFlagNumberhandle === 1">
            <p>THE MEU ID SEND WAS NOT FOUND</p>
        </div>
        <div class="container" v-if="errorFlagNumberhandle === 2">
            Meal Name: {{ mealName }} <br />
            Meal Type: {{ mealType }} <br />
            Meal Average Calories: {{ mealAverageCalories }} <br />
            Meal Average Weight: {{ mealAverageWeight }} <br />
            Meal Average Price: {{ mealAveragePrice }} <br />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
//import redirect from '@nuxtjs/redirect-module'

export default Vue.extend({
    name: 'MenusByIdPage',

    props: {
        error: {
            type: Object,
            default: null
        }
    },

    data: () => {
        return {
            mealName: '',
            mealType: '',
            mealAverageCalories: '',
            mealAverageWeight: '',
            mealAveragePrice: '',
            mealDessertName: '',
            mealNameDayWeek: '',
            mealDescription: '',
            mealRateQualityNumber: '',
            mealImageLinkPath: '',
            mealCreatedAt: '',
            mealUpdatedAt: '',
            mealLunchBoxId: '',

            //DEFAULT ERROR MSN: BECAUSE ID SEND IN THE URL ROUTE WAS NOT FOUND
            errorFlagNumberhandle: 1
        };
    },

    created() {
        this.fetchHandleData(this.$route.params.id);
    },

    methods: {

        async fetchMealMenuData(theId) {
            try {
                await this.$axios
                    .$get('/lunch-meal-menu/' + theId)
                    .then((response) => {
                        this.mealName = response.name
                        this.mealType = response.type
                        this.mealAverageCalories = response.averageCalories
                        this.mealAverageWeight = response.averageWeight
                        this.mealAveragePrice = response.averagePrice
                        this.mealDessertName = response.dessertName
                        this.mealNameDayWeek = response.nameDayWeek
                        this.mealDescription = response.description
                        this.mealRateQualityNumber = response.rateQualityNumber
                        this.mealImageLinkPath = response.imageLinkPath
                        this.mealCreatedAt = response.createdAt
                        this.mealUpdatedAt = response.updatedAt
                        this.mealLunchBoxId = response.lunchBoxId
                    })

            } catch (err) {
                if (err.response.data.statusCode === 404) {
                    this.errorFlagNumberhandle = 1 //SET THE FLAG 1 ...THE MEU ID SEND WAS NOT FOUND... OVERLOAD THE LAST FLAG 2...
                    console.log(JSON.stringify('DATA NOT FOUND: ' + err.response.data.message))
                } else if (err.response.data.statusCode === 406) {
                    this.errorFlagNumberhandle = 0 //SET THE FLAG 0 ...THE MENU ID WAS NOT INFORMED!...
                    console.log(JSON.stringify('THE ID WAS NO SEND: ' + err.response.data.message))
                } else if (err.response.data.statusCode === 400) {
                    this.errorFlagNumberhandle = 1 //SET THE FLAG 1 ...THE MEU ID SEND WAS NOT FOUND... 
                    console.log(JSON.stringify('DATA NOT FOUND: ' + err.response.data.message))
                }
            }

        },

        async fetchHandleData(theId) {

            if (!theId) {
                theId = '' //SET EMPTY HERE IS MANDATORY TO USE STATUS ERROR 406 FROM API!!!
                this.fetchMealMenuData(theId)

            } else {
                this.errorFlagNumberhandle = 2 //SET THE FLAG 2 ...OK A ID WAS SEND, ATTEMPTING TO FIND DATA FROM THE DATABASE...
                this.fetchMealMenuData(theId)
            }
        },

    }, //METHODS END

})
</script>
