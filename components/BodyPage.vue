<template>
    <div class="bg-blue-400 p-2 flex items-center justify-center">
        
        <div class="grid grid-cols-3 gap-0">

            <div class="bg-white p3 text-right">
                <button class="btn btn-red mx-4">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                    </svg>
                    <span>ENVIAR MEU PEDIDO</span>
                </button>
            </div>
            <div class="col-span-2 bg-gray-400 p3">
                <div class="grid grid-cols-1 gap-0">
                    <div class="form-check">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                            COMO ROTINA! (repetir por quatro semanas)
                        </label>
                    </div>
                    <!-- START NOTA DE CLASSIFICAÇÃO E DIA DA SEMANA -->
                        <div class="grid grid-cols-3 gap-0">
                            <div class="bg-yellow-300 text-left p3">AVALIAÇÃO do Cardápio de:</div>
                            <div class="bg-yellow-300 text-center p3">SEGUNDA-FEIRA</div>
                            <div class="bg-yellow-300 text-right p3">XX-XX-XX-XX-XX</div>
                        </div>
                    <!-- END NOTA DE CLASSIFICAÇÃO E DIA DA SEMANA -->
                </div>
            </div>
            <div class="col-span-2 bg-gray-500 p3 text-left">Pedido de Refeição - Centro Operacional</div>
            
            <!-- START Dropdown menu -->
            <div class="bg-gray-300 p3">
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

            <div class="bg-red-200 p3 text-center">||--- FOTO / IMG DA MARMITA ---||</div>

            <!-- START DESCRIÇÃO COMPLETA MARMITA -->
                <div class="col-span-2 p3">
                    
                    <div class="grid grid-cols-1 gap-0">
                        <div class="bg-red-300 p3">Decrição:</div>
                        <div class="bg-red-300 p3">TÍTULO</div>
                        <div class="bg-red-300 p3">TEXT...</div>
                    </div>

                </div>
            <!-- START DESCRIÇÃO COMPLETA MARMITA -->

            <div class="col-span-2 p3">
                <!-- START DESCRIÇÃO COMPLETA DO CARDÁPIO -->
                <div class="col-span-2 p3">
                    
                    <div class="grid grid-cols-1 gap-0">
                        <div class="bg-yellow-300 p3">Cardápio:</div>
                        <div class="bg-yellow-300 p3">TÍTULO do Cardápio</div>
                        <div class="bg-yellow-300 p3">TEXT...</div>
                    </div>

                </div>
            <!-- END DESCRIÇÃO COMPLETA DO CARDÁPIO -->
            </div>

            <div class="bg-red-400 p3 text-center">||--- FOTO / IMG DO CARDÁPIO ---||</div>

            <!-- START DADOS NUMÉRICOS -->
                <div class="bg-gray-300 p3 text-center">||--- CALORIAS MÉDIAS ---||</div>
                <div class="bg-green-300 p3 text-center">||--- PESO MÉDIO ---||</div>
                <div class="bg-gray-300 p3 text-center">||--- PREÇO MÉDIO ---||</div>
            <!-- END DADOS NUMÉRICOS -->

            <div class="col-span-3 bg-blue-900 p3">||--- spacer ---||</div>
            
            <!-- START CABEÇALHO DA TABELA COM HISTÓRICO DE PEDIDOS RECENTES E DO BTN DE RELAÇÃO DE PEDIDOS -->
            <div class="col-span-2 bg-gray-500 p3">Histórico de Pedidos Recentes</div>  
            <div class="bg-white p3 text-right">
                <button class="btn btn-blue mx-4">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.046.752.097 1.126.153A2.212 2.212 0 0118 8.653v4.097A2.25 2.25 0 0115.75 15h-.241l.305 1.984A1.75 1.75 0 0114.084 19H5.915a1.75 1.75 0 01-1.73-2.016L4.492 15H4.25A2.25 2.25 0 012 12.75V8.653c0-1.082.775-2.034 1.874-2.198.374-.056.75-.107 1.127-.153L5 6.25v-3.5zm8.5 3.397a41.533 41.533 0 00-7 0V2.75a.25.25 0 01.25-.25h6.5a.25.25 0 01.25.25v3.397zM6.608 12.5a.25.25 0 00-.247.212l-.693 4.5a.25.25 0 00.247.288h8.17a.25.25 0 00.246-.288l-.692-4.5a.25.25 0 00-.247-.212H6.608z"></path>
                    </svg>
                    <span>Relação de Pedidos</span>
                </button>
            </div>
            <!-- END CABEÇALHO DA TABELA COM HISTÓRICO DE PEDIDOS RECENTES E DO BTN DE RELAÇÃO DE PEDIDOS -->

            <!-- START DATA TABLE -->
            <div class="col-span-3 bg-purple-500 p3">||--- DATA TABLE ---||</div>
            <!-- END DATA TABLE -->

        </div>

    </div>    
</template>

<script>

export default {
    name: 'BodyPage'
}
</script>
    