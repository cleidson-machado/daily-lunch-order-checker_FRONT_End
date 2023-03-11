<template>
    <div>
        <div>
        <!-- START AVISO_OFF -->
        <div class="grid grid-cols-3 gap-0" v-if="!menuList || !menuList.length">
            <div>
                <img class="object-scale-down h-40 w-96" src="alertWarningBlack.png"/>
            </div>
            <div class="col-span-2 p-0">
                <br>
                <br>
                <span class="txt-warning">AVISO: Não há serviço de Marmitas aos Sábados e Domingos...</span>
                <br>
                <span class="txt-warning">Ou o Serviço Pode ter sido Cancelado Por Motivos afins da Gerência</span>
                <br>
                <span class="txt-warning">Ou, ainda, o MENU deste dia da Semana pode não ter sido Criado!</span>
                <br>
                <span class="txt-warning">Ou, API PODE ESTAR OFF LINE!!!</span>
            </div>
        </div>
        <!-- END AVISO_OFF -->


        <!-- ########################################################################################################### -->


        <!-- START DIV PRINCIPAL DOS ITENS DO DIA CORRENTE -->
            <div class="flex flex-row">
            <!-- START DESCRIÇÃO COMPLETA MARMITA E DO ESPAÇO DA FOTO 1 -->
                <div class="basis-1/4" v-for="menu in menuList" v-bind:key="menu.id">
                    <span>Imagem Ilustrativa!</span>
                    <img class="img-food-item" v-bind:src="menu.lunchBox.imageLinkPath" v-if="menuList.length"/>
                </div>
            <!-- END DESCRIÇÃO COMPLETA MARMITA E DO ESPAÇO DA FOTO 1 -->
                    <div class="basis-1/3 p-2">
                        <!-- START DESCRIÇÃO COMPLETA MARMITA -->
                            <div class="grid grid-cols-1 gap-0 p-1" v-for="menu in menuList" v-bind:key="menu.id">
                                <div class="txt-label-item">Embalagem:</div>
                                <div class="txt-title-food ">{{ menu.lunchBox.name }}</div>
                                <p class="txt-content">{{ menu.lunchBox.description }}</p>
                            </div>
                        <!-- END DESCRIÇÃO COMPLETA MARMITA -->
                    </div>
            </div>
        <!-- END DIV PRINCIPAL DOS ITENS DO DIA CORRENTE -->

                <!-- START SPACER -->   
                    <div class="col-span-3 text-center" >
                        <hr class="w-auto h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-1" v-if="menuList.length">
                    </div>
                <!-- END SPACER -->



<!-- START DIV PRINCIPAL DOS ITENS DO DIA CORRENTE -->
            <div class="flex flex-row">
            <!-- START DESCRIÇÃO COMPLETA MARMITA E DO ESPAÇO DA FOTO 2 -->
                <div class="basis-1/4" v-for="menu in menuList" v-bind:key="menu.id">
                    <span>Imagem Ilustrativa!</span>
                    <img class="img-food-item" v-bind:src="menu.imageLinkPath" v-if="menuList.length"/>
                </div>
            <!-- END DESCRIÇÃO COMPLETA MARMITA E DO ESPAÇO DA FOTO 2 -->
                    <div class="basis-1/3 p-2">
                        <!-- START DESCRIÇÃO COMPLETA DO MENU -->
                            <div class="grid grid-cols-1 gap-0 p-1" v-for="menu in menuList" v-bind:key="menu.id">
                                <div class="txt-label-item">Cardápio:</div>
                            <div class="txt-title-food">{{ menu.name }}</div>
                            <div class="txt-content">{{ menu.description }}</div>
                            </div>
                        <!-- END DESCRIÇÃO COMPLETA DO MENU -->
                    </div>
            </div>
<!-- END DIV PRINCIPAL DOS ITENS DO DIA CORRENTE -->


            <!-- START SPACER -->
            <div class="col-span-3   text-center">
                <hr class="w-auto h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-1" v-if="menuList.length">
            </div>
            <!-- END SPACER -->


            <!-- START DADOS NUMÉRICOS -->
        <div class="grid grid-cols-3 gap-0">
            <div class="grid grid-cols-1 gap-0 mt-4 mb-4" v-for="menu in menuList" v-bind:key="menu.id">
                <div class="txt-title-food text-center">CALORIAS MÉDIAS <span class="txt-label-item"> ( Cal )</span></div>
                <div class="txt-content text-center">{{ menu.averageCalories }}</div>
            </div>
            
            <div class="grid grid-cols-1 gap-0 mt-4 mb-4" v-for="menu in menuList" v-bind:key="menu.id">
                <div class="txt-title-food text-center">PESO MÉDIO<span class="txt-label-item"> ( g )</span></div>
                <div class="txt-content text-center">{{ menu.averageWeight }}</div>
            </div>

            <div class="grid grid-cols-1 gap-0 mt-4 mb-4" v-for="menu in menuList" v-bind:key="menu.id">
                <div class="txt-title-food text-center">PREÇO MÉDIO<span class="txt-label-item"> ( R$ )</span></div>
                <div class="txt-content text-center">R$ {{ menu.averagePrice }}</div>
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
        localImg: 'ImageTestHoriz.png', //PENSAR MELHOR NISSO!!.. COMO TRABALHAR A EXIBIÇÃO DE IMG RESPECTIVA A CADA MENU E AFINS...
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