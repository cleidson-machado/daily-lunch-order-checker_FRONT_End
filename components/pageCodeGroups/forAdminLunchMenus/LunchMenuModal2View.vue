<template>
    <div>
        <!-- Main modal -->
        <div id="lunch-menu-modal-view" data-modal-placement="top-center" tabindex="-1"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->

                <div class="relative bg-gray-200 rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            View Lunch / Menu <span class="font-light text-xs text-red-700">ID: {{ menuId }}</span>
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="lunch-menu-modal-view">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- START Modal_body -->

                    <div class=" p-3 space-y-0">

                        <div class="grid grid-cols-3 gap-4">
                            <div class="mb-0 col-span-3 ...">
                                <label for="Name" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Name
                                </label>
                                <p id="Name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <strong>{{ menuName }}</strong>
                                </p>
                            </div>
                            <div class="mb-0 col-span-2 ...">
                                <label for="Box" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Box</label>
                                <p id="Box"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <strong>{{ menuLunchBoxName }}</strong>
                                </p>
                            </div>
                            <div class="mb-0">
                                <label for="Type" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Type</label>
                                <p id="Type"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <strong>{{ menuType }}</strong>
                                </p>
                            </div>
                            <div class="mb-0">
                                <label for="Calories" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Calories</label>
                                <p id="Calories"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <strong>{{ menuAverageCalories }}</strong>
                                </p>
                            </div>
                            <div class="mb-0">
                                <label for="Weight" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Weight</label>
                                <p id="Weight"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <strong>{{ menuAverageWeight }}</strong>
                                </p>
                            </div>
                            <div class="mb-0">
                                <label for="Price" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Price</label>
                                <p id="Price"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <strong>{{ menuAveragePrice }}</strong>
                                </p>
                            </div>
                            <div class="mb-0 col-span-2 ...">
                                <label for="DessertName"
                                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Dessert Name</label>
                                <p id="DessertName"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <strong>{{ menuDessertName }}</strong>
                                </p>
                            </div>
                            <div class="mb-0">
                                <label for="nameDayWeek" class="mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Name Day Week
                                </label>
                                <p id="nameDayWeek"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <strong>{{ menuNameDayWeek }}</strong>
                                </p>
                            </div>
                            <div class="mb-0 col-span-3 ...">
                                <label for="Description"
                                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Description</label>
                                <p id="Description"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <strong>{{ menuDescription }}</strong>
                                </p>
                            </div>

                            <div class="mb-0 col-span-3 ...">
                                || <span class="font-light text-xs text-red-700">Rate_Num: {{ menuRateQualityNumber
                                }}</span> ||
                                <span class="font-light text-xs text-red-700">Img_Link: {{ menuImageLinkPath }}</span> ||

                            </div>

                            <div class="mb-0 col-span-3 ...">
                                || <span class="font-light text-xs text-red-700">Create_At: {{ menuCreatedAt }}</span> ||
                                <span class="font-light text-xs text-red-700">Update_At: {{ menuUpdatedAt }}</span> ||
                            </div>

                        </div>

                    </div>

                    <!-- END Modal_body -->
                    <!-- ######################## -->
                    <!-- START Modal footer -->
                    <div class="flex items-center p-3 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button type="button" data-modal-hide="lunch-menu-modal-view"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            OK - Close
                        </button>
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
    name: 'LunchMenuModal2View',

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

    mounted() {
        initFlowbite();
    },

})
</script>

<style></style>