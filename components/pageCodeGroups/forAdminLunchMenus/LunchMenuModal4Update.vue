<template>
    <div>
        <!-- Main modal -->
        <div id="new-lunch-menu-modal-update" data-modal-placement="top-center" tabindex="-1"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->

                <div class="relative bg-gray-200 rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Update a Lunch / Menu
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="new-lunch-menu-modal-update">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- START Modal body -->

                    <div class=" p-3 space-y-0">

                        <div class="grid grid-cols-3 gap-4">
                            <div class="mb-0 col-span-3 ...">
                                <label for="Name" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Name</label>
                                <input id="Name" v-model="menuName"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Nome do Menu">
                            </div>
                            <div class="mb-0 col-span-2 ...">
                                <label for="Box" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Box</label>
                                <select v-model="menuLunchBoxId" id="Box"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option v-for="(box, index) in listLunchBox" v-bind:key="index" v-bind:value="box.id">
                                        {{ box.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="mb-0">
                                <label for="Type" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Type</label>
                                <select id="Type" v-model="menuType"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" hidden selected></option>
                                    <option value="NORMAL">NORMAL</option>
                                    <option value="FIT">FIT</option>
                                </select>
                            </div>
                            <div class="mb-0">
                                <label for="Calories" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Calories</label>
                                <input type="text" id="Calories" v-model="menuAverageCalories"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="123">
                            </div>
                            <div class="mb-0">
                                <label for="Weight" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Weight</label>
                                <input type="text" id="Weight" v-model="menuAverageWeight"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="123">
                            </div>
                            <div class="mb-0">
                                <label for="Price" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Price</label>
                                <input type="text" id="Price" v-model="menuAveragePrice"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="123">
                            </div>
                            <div class="mb-0 col-span-2 ...">
                                <label for="DessertName"
                                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Dessert Name</label>
                                <input type="text" id="DessertName" v-model="menuDessertName"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Nome Resumido da Sobremesa">
                            </div>
                            <div class="mb-0">
                                <label for="nameDayWeek" class="mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Name Day Week
                                </label>
                                <select id="nameDayWeek" data-te-select-init v-model="menuNameDayWeek"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" hidden selected></option>
                                    <option value="MONDAY">MONDAY</option>
                                    <option value="TUESDAY">TUESDAY</option>
                                    <option value="WEDNESDAY">WEDNESDAY</option>
                                    <option value="THURSDAY">THURSDAY</option>
                                    <option value="FRIDAY">FRIDAY</option>
                                    <option value="SUNDAY">SUNDAY (Day Off)</option>
                                    <option value="SATURDAY">SATURDAY (Day Off)</option>
                                </select>
                            </div>
                            <div class="mb-0 col-span-3 ...">
                                <label for="Description"
                                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Description</label>
                                <textarea id="Description" rows="4" v-model="menuDescription"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Descrição do Menu..."></textarea>
                            </div>
                            <!-- START IMAGE UPLOAD AREA WHITH tailwind-elements -->
                            <div class="mb-0 col-span-3 ...">
                                <label for="formFile" class="mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Please Send a Image for This Lunch / Menu...
                                </label>
                                <input
                                    class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                    type="file" id="formFile" />
                            </div>
                            <!-- START IMAGE UPLOAD AREA WHITH tailwind-elements -->
                        </div>

                    </div>

                    <!-- END Modal body -->
                    <!-- ######################## -->
                    <!-- START Modal footer -->
                    <div class="flex items-center p-3 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="new-lunch-menu-modal-update" v-on:click="saveTheNewMenuLunch"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            SAVE MENU
                        </button>
                        <button data-modal-hide="new-lunch-menu-modal-update" type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                    </div>
                    <!-- START Modal footer -->
                </div>


            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { initFlowbite } from 'flowbite';

export default Vue.extend({
    name: 'LunchMenuModal4Update',

    props: [
        "menuId",
        "menuName",
        "menuLunchBoxName",
        "menuType",
        "menuAverageCalories",
        "menuAverageWeight",
        "menuAveragePrice",
        "menuDessertName",
        "menuNameDayWeek",
        "menuDescription",
        "menuRateQualityNumber",
        "menuImageLinkPath",
        "menuCreatedAt",
        "menuUpdatedAt",
    ],

    data: () => {
        return {
            menuLunchBoxId: '',
            listLunchBox: [],
            foundErrorOnSaveAction: [],
            foundErrorOnListBoxAction: [],
            saveSuccessfully: [],
        };
    },

    mounted() {
        initFlowbite();
        this.selectAllUserToOrder();
    },

    methods: {
        async saveTheNewMenuLunch() {
            await this.$axios
                .$put('/foodapi/lunch-meal-menu/' + this.menuId, {
                    name: this.menuName,
                    type: this.menuType,
                    averageCalories: this.menuAverageCalories,
                    averageWeight: this.menuAverageWeight,
                    averagePrice: this.menuAveragePrice,
                    dessertName: this.menuDessertName,
                    nameDayWeek: this.menuNameDayWeek,
                    description: this.menuDescription,
                    rateQualityNumber: this.menuRateQualityNumber,
                    imageLinkPath: this.menuImageLinkPath,
                    lunchBoxId: this.menuLunchBoxId,
                })
                .then((response) => {
                    this.saveSuccessfully = [response.length]; //THE SAVE CONFIRMATION
                })
                .catch((err) => {
                    console.log('FOUND A ERROR TO SAVE_1:' + err);
                    this.foundErrorOnSaveAction = err
                });

        },

        async selectAllUserToOrder() {
            await this.$axios
                .$get('/foodapi/lunch-box-type/listAll')
                .then((response) => {
                    this.listLunchBox = response;
                })
                .catch((err) => {
                    console.log('FOUND A ERROR TO SAVE_2:' + err);
                    this.foundErrorOnListBoxAction = err
                });
        },

    }
})
</script>

<style></style>