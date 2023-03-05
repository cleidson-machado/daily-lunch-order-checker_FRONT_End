<template>
  <div class="grid grid-cols-3 gap-0">
        <!-- START DESCRIÇÃO COMPLETA MARMITA E DO ESPAÇO DA FOTO 1 -->
        <div class=" text-center">
                <img class="img-food-item" src="ImageTestHoriz.png"/>
            </div>
                <div class="col-span-2 p-0">
                    <!-- START DESCRIÇÃO COMPLETA MARMITA -->
                        <div class="grid grid-cols-1 gap-0 p-1" v-for="menu in menuList" v-bind:key="menu.id">
                            <div class="txt-label-item">Decrição:</div>
                            <div class="txt-title-food ">{{ menu.lunchBox.name }}</div>
                            <div class="txt-content">{{ menu.lunchBox.description }}</div>
                        </div>
                    <!-- END DESCRIÇÃO COMPLETA MARMITA -->
                </div>
            <!-- END DESCRIÇÃO COMPLETA MARMITA E DO ESPAÇO DA FOTO 1 -->
                <!-- START SPACER -->   
                    <div class="col-span-3 text-center" >
                        <hr class="w-auto h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-1">
                    </div>
                <!-- END SPACER -->
            <!-- START DESCRIÇÃO COMPLETA DO CARDÁPIO E DO ESPAÇO DA FOTO 2 -->
                <div class="col-span-2 p-0">
                    <!-- START DESCRIÇÃO COMPLETA DO CARDÁPIO -->
                    <div class="col-span-2 ">
                        
                        <div class="grid grid-cols-1 gap-0 p-1" v-for="menu in menuList" v-bind:key="menu.id">
                            <div class="txt-label-item">Cardápio:</div>
                            <div class="txt-title-food">{{ menu.name }}</div>
                            <div class="txt-content">{{ menu.description }}</div>
                        </div>

                    </div>
                <!-- END DESCRIÇÃO COMPLETA DO CARDÁPIO -->
                </div>
                <div class="text-center">
                    <img class="img-food-item" src="ImageTestHoriz.png"/>
                </div>
            <!-- END DESCRIÇÃO COMPLETA DO CARDÁPIO E DO ESPAÇO DA FOTO 2 -->

            <!-- START SPACER -->
            <div class="col-span-3   text-center">
                <hr class="w-auto h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-1">
            </div>
            <!-- END SPACER -->

            <!-- START DADOS NUMÉRICOS -->

            <div class="grid grid-cols-1 gap-0 mt-4 mb-4">
                <div class="txt-title-food text-center">CALORIAS MÉDIAS</div>
                <div class="txt-content text-center">4500 cal</div>
            </div>
            
            <div class="grid grid-cols-1 gap-0 mt-4 mb-4">
                <div class="txt-title-food text-center">PESO MÉDIO</div>
                <div class="txt-content text-center">350 gr</div>
            </div>

            <div class="grid grid-cols-1 gap-0 mt-4 mb-4">
                <div class="txt-title-food text-center">PREÇO MÉDIO</div>
                <div class="txt-content text-center">R$ 35,00</div>
            </div>

            <!-- END DADOS NUMÉRICOS -->
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
        this.fetchMenuData()
        },

    watch: {

    },

    methods: {
        async fetchMenuData() {
            const nameOfWeekToday = dayjs(Date.now()).format("dddd");
            const menuToday = this.$axios.$get('/foodapi/lunch-meal-menu/listBy/'+nameOfWeekToday);
            this.menuList = await menuToday;
            console.table(menuToday);//TEST
            console.log('Name Of Week Today: '+nameOfWeekToday)//TEST
    },
}

})
</script>

<style>

</style>