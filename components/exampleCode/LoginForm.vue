<template>
    <div class="flex justify-center items-center h-screen">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <div class="form-group mb-6">
          <h1>TESTE LOGIN Benef. API</h1>
          <h3 class="py-0 text-red-600 font-bold uppercase">{{errorMessage}}</h3>
        </div>
        <div class="form-group mb-6">
          <label for="exampleInputEmail1" class="form-label inline-block mb-2 text-gray-700">CPF / User:</label>
          <input type="text" v-model="cpfNum" class="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="InputCPF"
            aria-describedby="CPF Number" placeholder="000.000.000-00" v-mask="['###.###.###-##', '##.###.###/####-##']">
        </div>
        <div class="form-group mb-6">
          <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Password:</label>
          <input type="password" v-model="passWd" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="InputPassword"
            placeholder="***">
        </div>
          <div class="flex space-x-4 ...">
          <button v-on:click="signUp" class="
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">OK.. LOGAR
          </button>
          <button v-on:click="signOut" class="
          px-6
          py-2.5
          bg-red-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-red-700 hover:shadow-lg
          focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-red-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">OK.. SAIR
          </button>
          </div>
    </div>
  </div>
  </template>
  
  <script>

   //HOW TO LEARNING HANDLING ERRORS:
   //https://axios-http.com/docs/handling_errors

   //CONTENT UDE HERE:
   //https://www.nightprogrammer.com/vue-js/validate-input-field-by-removing-special-characters-vuejs-example/

   //HOW TO USE SESSIONS:
   //https://levelup.gitconnected.com/storing-session-data-with-the-vue-session-plugin-bed36c1e4e09

   //NUXT PROJECT AUTH:
   //https://auth.nuxtjs.org/api/auth/

    export default {
      name: 'LoginFormBenefApi',
      data(){
        {
          return {
              cpfNum:'',
              passWd:'',
              errorMessage:'',
          }
        }
      },

    watch: {
        //TO DO
    },

    async mounted(){
        //TO DO
    },
  
    methods:{

    cpfNumRemove(newValue) {
        this.cpfNum = this.removeSpecialCharacters(newValue); //debugger;
    },

    removeSpecialCharacters(charactersString) {
      return charactersString.replace(/[^\w\s]/gi, ""); //debugger;
    },

    async signUp() {
        try {

        this.cpfNumRemove(this.cpfNum);

        const response = await this.$axios.$post('/api/auth/signin', {
            cpf: this.cpfNum, 
            password: this.passWd
        });

        //DEU RUIN
        //const session = useSession();

        localStorage.setItem('token', response.token);
        localStorage.setItem('name', response.name);
        this.errorMessage = null;

        console.log( "USUÁRIO LOGADO: ",  localStorage.getItem('name') );
        console.log( "TOKEN DE ACESSO: ",  localStorage.getItem('token') );

        //É SINÔNIMO DE localStorage!!!? ## AS DUAS SÃO APENAS VARIÁVES DE SESSÃO
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('name', response.name);

        //console.log(response);

        } catch (error) {
            //console.error(error);
            //console.log(error.response.status);
            //console.log(error.response.data);
            //console.log(error.response.data.message);
          this.errorMessage = error.response.data.message;
          console.log(this.errorMessage);
            //console.log(error.toJSON());
        }

    },

    signOut(){

      try {

        //
        localStorage.removeItem('token');
        localStorage.removeItem('name');
       //
        console.log( "USUÁRIO LOGADO: ",  localStorage.getItem('name') );
        console.log( "TOKEN DE ACESSO: ",  localStorage.getItem('token') );
        //

      } catch (error) {
        console.log("Deu ruim!:", error);
      }
    },

      },

    }
  
  </script>
  
  <<style scoped>
  
  </style>
  