<template>
    <div class="pt-5 space-y-2 ...">
        <div class="container max-w-screen-lg mx-auto px-1">

            <div class="flex flex-row auto-cols-max auto-rows-auto gap-2 bg-gray-300 border-solid border-4 border-gray-300 rounded-md ...">

                <div class="basis-96" v-for="menu in menuList" v-bind:key="menu.id">
                    <img class="mt-1 mb-1 rounded-lg shadow-lg object-fill h-48 w-96 ..." v-bind:src="menu.lunchBox.imageLinkPath" v-if="menuList.length"/>
                </div>

                <div class="basis-full"  v-for="menu in menuList" v-bind:key="menu.id">
                    <div class="txt-label-item">Embalagem:</div>
                    <div class="txt-title-food ">{{ menu.lunchBox.name }}</div>
                    <p class="txt-content">{{ menu.lunchBox.description }}</p>
                </div>

            </div>

        </div>

        <div class="container max-w-screen-lg mx-auto px-1">

            <div class="flex flex-row auto-cols-max auto-rows-auto gap-2 bg-gray-300 border-solid border-4 border-gray-300 rounded-md ...">

                <div class="basis-96" v-for="menu in menuList" v-bind:key="menu.id">
                    <img class="mt-1 mb-1 rounded-lg shadow-lg object-fill h-48 w-96 ..." v-bind:src="menu.imageLinkPath" v-if="menuList.length"/>
                </div>

                <div class="basis-full"  v-for="menu in menuList" v-bind:key="menu.id">
                    <div class="txt-label-item">Cardápio:</div>
                    <div class="txt-title-food">{{ menu.name }}</div>
                    <div class="txt-content">{{ menu.description }}</div>
                </div>

            </div>

        </div>

        <div class="container max-w-screen-lg mx-auto px-1">
            <div class="grid grid-cols-3 gap-0 bg-gray-300 border-solid border-4 border-gray-300 rounded-md ...">
                <div class="grid grid-cols-1 gap-0 mt-4 mb-4" v-for="menu in menuList" v-bind:key="menu.id">
                    <div class="txt-title-food text-center">CALORIAS MÉDIAS <span class="txt-label-item"> ( Cal )</span></div>
                    <div class="txt-content-menu-numbers">{{ menu.averageCalories }}</div>
                </div>
                
                <div class="grid grid-cols-1 gap-0 mt-4 mb-4" v-for="menu in menuList" v-bind:key="menu.id">
                    <div class="txt-title-food text-center">PESO MÉDIO<span class="txt-label-item"> ( g )</span></div>
                    <div class="txt-content-menu-numbers">{{ menu.averageWeight }}</div>
                </div>

                <div class="grid grid-cols-1 gap-0 mt-4 mb-4" v-for="menu in menuList" v-bind:key="menu.id">
                    <div class="txt-title-food text-center">PREÇO MÉDIO<span class="txt-label-item"> ( R$ )</span></div>
                    <div class="txt-content-menu-numbers">R$ {{ menu.averagePrice }}</div>
                </div>
            </div>
                <!-- END DADOS NUMÉRICOS -->
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as dayjs from 'dayjs'

export default Vue.extend({
    name: 'TheMenuForToday',

    data: () => ({
        menuList: [],
    }),

    created() {
        this.fetchMenuDataForToday()
        },

    watch: {

    },

    methods: {
        async fetchMenuDataForToday() {
            const nameOfWeekToday = dayjs(Date.now()).format("dddd");
            const menuToday = this.$axios.$get('/foodapi/lunch-meal-menu/listBy/'+nameOfWeekToday);
            this.menuList = await menuToday;
            console.table(menuToday);//TEST
            //console.log('Name Of Week Today: '+nameOfWeekToday)//TEST
            console.table(nameOfWeekToday);//TEST
    },
}

})
</script>

<style>

</style>