<template>
    <div>

        <div v-if="menuList.length === 0">
            <!-- START SHOW A WARNING -->   
                <div class="pt-6">
                    <div class="container max-w-screen-lg mx-auto px-1">
                        <div class="grid grid-cols-1 gap-4 place-items-center h-16 ...">
                            <div
                                class="mb-4 rounded-lg bg-warning-100 py-5 px-6 text-base text-warning-800"
                                role="alert">
                                <strong>{{ erroMsn }}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            <!-- END SHOW A WARNING -->
        </div>

            <div v-else>
                <div class="pt-10 space-y-2 ...">
                            <div class="container max-w-screen-lg mx-auto px-1">

                            <div class="flex justify-between ...">
                                <div class="txt-title-app  text-left">Reserva de Refeições - Centro Operacional <span class="text-red-700 text-base">( Joaquin Murtinho )</span> TI</div>
                                <div class="order-first">
                                    <button class="btn btn-red min-h-full min-w-full">
                                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                                        </svg>
                                        <span>REALIZAR PEDIDO!</span>
                                    </button>
                                </div>
                            </div>

                            <div class="flex flex-row auto-cols-max auto-rows-auto gap-2 bg-gray-300 border-solid border-4 border-gray-300 rounded-md ...">

                                <div class="basis-96" v-for="menu in menuList" v-bind:key="menu.id">
                                    <img class="mt-1 mb-1 rounded-lg shadow-lg object-fill h-48 w-96 ..." v-bind:src="menu.lunchBox.imageLinkPath" v-if="menuList.length"/>
                                    <span class="font-extralight text-xs text-black">
                                        Imagem Meramente Ilustrativa!......
                                    </span>
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
                                    <span class="font-extralight text-xs text-black">
                                        Imagem Meramente Ilustrativa!......
                                    </span>
                                </div>

                                <div class="basis-full"  v-for="menu in menuList" v-bind:key="menu.id">
                                    <div class="txt-label-item">Cardápio NORMAL de Hoje 13/03/2023 ( Segunda-Feira ):</div>
                                    <div class="txt-title-food">{{ menu.name }}</div>
                                    <div class="txt-content">{{ menu.description }}</div>
                                </div>

                            </div>

                            </div>

                            <div class="container max-w-screen-lg mx-auto px-1">

                                <!-- START DADOS NUMÉRICOS -->
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

            </div> <!-- END ELSE NA DIV -->

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as dayjs from 'dayjs'
import { Warning } from 'postcss'
//import * as te from 'tw-elements'

export default Vue.extend({
    name: 'TheMenuForToday',

    data: () => ({
        menuList: [],
        erroMsn: '',
    }),

    created() {
        //this.fetchMenuDataForToday()
        this.nameOfWeekToday()
        this.fetchSomething()
        },

    watch: {

    },

    methods: {
        async fetchMenuDataForToday() {
            const nameOfWeekToday = dayjs(Date.now()).format("dddd");
            const menuToday = this.$axios.$get('/foodapi/lunch-meal-menu/listBy/'+nameOfWeekToday);
            this.menuList = await menuToday;
            console.table(menuToday);//TEST
            console.table('kkkkkk: '+ menuToday.data);//TEST
            //console.log('Name Of Week Today: '+nameOfWeekToday)//TEST
            console.table(nameOfWeekToday);//TEST
        },

        nameOfWeekToday(){
            let response = dayjs(Date.now()).format("dddd").toUpperCase();
            return ( response )
        },

        async fetchSomething() {
            try {
                const nameOfWeekToday = this.nameOfWeekToday();
                const menuToday = await this.$axios.$get('/foodapi/lunch-meal-menu/listBy/'+nameOfWeekToday);

                if (menuToday.length != 0)  { this.menuList = menuToday }
                else throw new Error('NÃO EXISTEM REFEIÇÕES / MENUS CRIADOS PARA ESSE DIA DA SEMANA!');

            } catch (e) {
                this.erroMsn = e
                console.log(e)
            }
        },

        async fetchSomethingBackup() {
            const nameOfWeekToday = dayjs(Date.now()).format("dddd");
            const menuToday = await this.$axios.$get('/foodapi/lunch-meal-menu/listBy/'+nameOfWeekToday);
            this.menuList = menuToday;
            console.table('kkkkkk: '+ this.menuList);//TEST
            return { menuToday }
    },

    async fetchSomethingBackup2() {
           try {
            const nameOfWeekToday = dayjs(Date.now()).format("dddd");
            const menuToday = await this.$axios.$get('/foodapi/lunch-meal-menu/listBy/' +nameOfWeekToday);
            this.menuList = menuToday;
           } catch (error) {
            console.log('SERVIDOR DA API NÃO DISPONÍVEL: ' + error);
            alert('SERVIDOR DA API NÃO DISPONÍVEL com : ' + error);
           }
    },

    async fetchSomethingBackup3() {
           try {
            const nameToday = this.nameOfWeekToday();
            const response = await this.$axios.$get('/foodapi/lunch-meal-menu/listBy/' +nameToday);
            this.menuList = response;
            console.log('YYYYY: ' + response)
           } catch (err) {
            //alert(err);
            this.erroMsn = err
            console.log('XXXXX: ' + err)
           }
        },

}

})
</script>

<style>

</style>