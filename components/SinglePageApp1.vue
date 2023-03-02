<template>
    <div class="p-4 flex items-center justify-center">
        
        <div class="grid grid-cols-3 gap-0">

            <div>
                <button class="btn btn-red min-h-full min-w-full">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                    </svg>
                    <span>ENVIAR MEU PEDIDO</span>
                </button>
            </div>

            <div class="col-span-2">
                <div class="grid grid-cols-1 gap-0">
                    <div class="form-check p-1">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label inline-block text-black" for="flexCheckDefault">
                            COMO ROTINA! (repetir por quatro semanas)
                        </label>
                    </div>

                    <!-- START NOTA DE CLASSIFICAÇÃO E DIA DA SEMANA -->
                        <div class="grid grid-cols-3 gap-0 bg-gray-500 p-1">
                            <div class="text-right ">AVALIAÇÃO do Cardápio de:</div>
                            <div class="text-right ">SEGUNDA-FEIRA</div>
                            <div class="text-right ">XX-XX-XX-XX-XX</div>
                        </div>
                    <!-- END NOTA DE CLASSIFICAÇÃO E DIA DA SEMANA -->
                    
                </div>
            </div>

            <!-- START TÍTULO DA SINGLE PAGE APP -->
                <div class="txt-title-app col-span-2  text-left">Pedido de Refeição - Centro Operacional <span class="text-red-700 text-base">( Joaquin Murtinho )</span> TI</div>
            <!-- END TÍTULO DA SINGLE PAGE APP -->
            
            <!-- START Dropdown menu -->
                <div class="bg-gray-300 ">
                    <div class="inline-block relative min-w-full">
                        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Alterar o Tipo da Refeição</option>
                            <option>FIT</option>
                            <option>NORMAL</option>
                        </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                    </div>
                </div>
            <!-- END Dropdown menu -->

            <div class="col-span-3 text-center">
                <hr class="w-auto h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-1">
            </div>

            <!-- START DESCRIÇÃO COMPLETA MARMITA E DO ESPAÇO DA FOTO 1 -->
            <div class=" text-center">
                <img class="img-food-item" src="ImageTestHoriz.png"/>
            </div>
                <div class="col-span-2 p-0">
                    <!-- START DESCRIÇÃO COMPLETA MARMITA -->
                        <div class="grid grid-cols-1 gap-0 p-1">
                            <div class="txt-label-item">Decrição:</div>
                            <div class="txt-title-food ">Marmita Normal Simples</div>
                            <div class="txt-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                In hendrerit metus id erat pulvinar vehicula.
                            </div>
                        </div>
                    <!-- END DESCRIÇÃO COMPLETA MARMITA -->
                </div>
            <!-- END DESCRIÇÃO COMPLETA MARMITA E DO ESPAÇO DA FOTO 1 -->

            <div class="col-span-3 text-center" >
                <hr class="w-auto h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-1">
            </div>

            <!-- START DESCRIÇÃO COMPLETA DO CARDÁPIO E DO ESPAÇO DA FOTO 2 -->
                <div class="col-span-2 p-0">
                    <!-- START DESCRIÇÃO COMPLETA DO CARDÁPIO -->
                    <div class="col-span-2 ">
                        
                        <div class="grid grid-cols-1 gap-0 p-1">
                            <div class="txt-label-item">Cardápio:</div>
                            <div class="txt-title-food">Macarrão a Bolonhesa e Frango Grelhado</div>
                            <div class="txt-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                In hendrerit metus id erat pulvinar vehicula.
                            </div>
                        </div>

                    </div>
                <!-- END DESCRIÇÃO COMPLETA DO CARDÁPIO -->
                </div>
                <div class="text-center">
                    <img class="img-food-item" src="ImageTestHoriz.png"/>
                </div>
            <!-- END DESCRIÇÃO COMPLETA DO CARDÁPIO E DO ESPAÇO DA FOTO 2 -->

            <div class="col-span-3   text-center">
                <hr class="w-auto h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-1">
            </div>

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

            <div class="col-span-3 text-center" >
                <hr class="w-auto h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-1">
            </div>
            
            <!-- START CABEÇALHO DA TABELA COM HISTÓRICO DE PEDIDOS RECENTES E DO BTN DE RELAÇÃO DE PEDIDOS -->
            <div class="txt-title-app col-span-2 mt-8">Histórico de Pedidos Recentes</div>  
            <div class="grid grid-cols-1 gap-0 justify-items-end mt-8">
                <div>
                    <button class="btn btn-blue">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.046.752.097 1.126.153A2.212 2.212 0 0118 8.653v4.097A2.25 2.25 0 0115.75 15h-.241l.305 1.984A1.75 1.75 0 0114.084 19H5.915a1.75 1.75 0 01-1.73-2.016L4.492 15H4.25A2.25 2.25 0 012 12.75V8.653c0-1.082.775-2.034 1.874-2.198.374-.056.75-.107 1.127-.153L5 6.25v-3.5zm8.5 3.397a41.533 41.533 0 00-7 0V2.75a.25.25 0 01.25-.25h6.5a.25.25 0 01.25.25v3.397zM6.608 12.5a.25.25 0 00-.247.212l-.693 4.5a.25.25 0 00.247.288h8.17a.25.25 0 00.246-.288l-.692-4.5a.25.25 0 00-.247-.212H6.608z"></path>
                        </svg>
                        <span>Relação de Pedidos</span>
                    </button>
                </div>
            </div>
            <!-- END CABEÇALHO DA TABELA COM HISTÓRICO DE PEDIDOS RECENTES E DO BTN DE RELAÇÃO DE PEDIDOS -->

    <!-- START DATA TABLE -->
    <div class="col-span-3">
        <table class="min-w-full leading-normal">
            <thead>
                <tr>
                <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                    Client / Invoice
                </th>
                <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                    Amount
                </th>
                <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                    Issued / Due
                </th>
                <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                    Status
                </th>
                <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                ></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="flex">
                    <div class="flex-shrink-0 w-10 h-10">
                        <img
                        class="w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt=""
                        />
                    </div>
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                        Molly Sanders
                        </p>
                        <p class="text-gray-600 whitespace-no-wrap">000004</p>
                    </div>
                    </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">$20,000</p>
                    <p class="text-gray-600 whitespace-no-wrap">USD</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                    <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                    >
                    <span
                        aria-hidden
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">Paid</span>
                    </span>
                </td>
                <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                >
                    <button
                    type="button"
                    class="inline-block text-gray-500 hover:text-gray-700"
                    >
                    <svg
                        class="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path
                        d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                        />
                    </svg>
                    </button>
                </td>
                </tr>
                <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="flex">
                    <div class="flex-shrink-0 w-10 h-10">
                        <img
                        class="w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt=""
                        />
                    </div>
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                        Michael Roberts
                        </p>
                        <p class="text-gray-600 whitespace-no-wrap">000003</p>
                    </div>
                    </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">$214,000</p>
                    <p class="text-gray-600 whitespace-no-wrap">USD</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">Sept 25, 2019</p>
                    <p class="text-gray-600 whitespace-no-wrap">Due in 6 days</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                    >
                    <span
                        aria-hidden
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">Paid</span>
                    </span>
                </td>
                <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                >
                    <button
                    type="button"
                    class="inline-block text-gray-500 hover:text-gray-700"
                    >
                    <svg
                        class="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path
                        d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                        />
                    </svg>
                    </button>
                </td>
                </tr>
                <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="flex">
                    <div class="flex-shrink-0 w-10 h-10">
                        <img
                        class="w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt=""
                        />
                    </div>
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                        Devin Childs
                        </p>
                        <p class="text-gray-600 whitespace-no-wrap">000002</p>
                    </div>
                    </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">$20,000</p>
                    <p class="text-gray-600 whitespace-no-wrap">USD</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">Sept 14, 2019</p>
                    <p class="text-gray-600 whitespace-no-wrap">Due in 2 weeks</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                    class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight"
                    >
                    <span
                        aria-hidden
                        class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">Pending</span>
                    </span>
                </td>
                <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                >
                    <button
                    type="button"
                    class="inline-block text-gray-500 hover:text-gray-700"
                    >
                    <svg
                        class="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path
                        d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                        />
                    </svg>
                    </button>
                </td>
                </tr>
                <tr>
                <td class="px-5 py-5 bg-white text-sm">
                    <div class="flex">
                    <div class="flex-shrink-0 w-10 h-10">
                        <img
                        class="w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                        alt=""
                        />
                    </div>
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                        Frederick Nicholas
                        </p>
                        <p class="text-gray-600 whitespace-no-wrap">000001</p>
                    </div>
                    </div>
                </td>
                <td class="px-5 py-5 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">$12,000</p>
                    <p class="text-gray-600 whitespace-no-wrap">USD</p>
                </td>
                <td class="px-5 py-5 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">Sept 6, 2019</p>
                    <p class="text-gray-600 whitespace-no-wrap">
                    Due 3 weeks ago
                    </p>
                </td>
                <td class="px-5 py-5 bg-white text-sm">
                    <span
                    class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
                    >
                    <span
                        aria-hidden
                        class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">Overdue</span>
                    </span>
                </td>
                <td class="px-5 py-5 bg-white text-sm text-right">
                    <button
                    type="button"
                    class="inline-block text-gray-500 hover:text-gray-700"
                    >
                    <svg
                        class="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path
                        d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                        />
                    </svg>
                    </button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- END DATA TABLE -->

    <div class="col-span-3 text-center" >
        <hr class="w-auto h-0 mx-auto my-4 bg-gray-200 border-0 rounded md:my-1">
    </div>

    <div class="col-span-3 text-center" >
        <hr class="w-auto h-0 mx-auto my-4 bg-gray-200 border-0 rounded md:my-1">
    </div>

    <div class="col-span-3 text-center" >
        <hr class="w-auto h-0 mx-auto my-4 bg-gray-200 border-0 rounded md:my-1">
    </div>

    <div class="col-span-3 text-center" >
        <hr class="w-auto h-0 mx-auto my-4 bg-gray-200 border-0 rounded md:my-1">
    </div>

        </div>

    </div>    
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SinglePageApp1',

async mounted() {

    const listAllOrderLunh = await this.$axios.$get('/foodapi/order-for-lunch/listAll');
        console.log(listAllOrderLunh);

    }
  
})
</script>
    