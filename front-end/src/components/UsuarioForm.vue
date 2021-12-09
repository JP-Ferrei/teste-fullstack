<template>
  <div class="md:max-w-md  rounded-lg border-2 border-gray-300 shadow-lg ">
    <h1 class=" text-2xl font-semibold leading-none ml-7 my-5">Cadastrar Usuario</h1>

    <div class="h-0.5 bg-gray-400 w-auto mx-5 my-2"/>
    
    <form class=" flex flex-col items-center gap-3 ">

      <input class="input" v-model="user.nome" placeholder="Nome" type="text" name="" id="">
      <input class="input" v-model="user.email" placeholder="Email" type="text" name="" id="">
      <input class="input" v-model="senha" placeholder="Senha" type="password" name="" id="">
      <input class="input" v-model="senhaConf" placeholder="Confirmar Senha" type="password" name="" id="">
      <input class="input" v-model="user.dataNascimento" placeholder="DataNacimento" type="date" name="" id="">
      
    </form>
    <div class="h-0.5 bg-gray-400 w-auto mx-5 my-2"/>
    <div class="flex mt-4 mx-12 justify-end gap-4 mb-4">
      <button class="botao bg-red-400 hover:bg-red-700"  @click="apagar()"> Apagar </button>
      <button class="botao botao-verde" @click="adicionarUser()" > Adicionar </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator';
  import User from '../models/User'

  @Component
   
  export default class UsuarioForm extends Vue {
    user: User = new User() 
    senha:string ='' 
    senhaConf:string =''

    mensagemErro:string = ''

    senhas = {
      senha: this.senha,
      senhaConf: this.senhaConf
    }

    apagar(): void{
      this.user = new User();
    }

    confirmarSenhas(): boolean{
      if(this.senhas.senha.trim() === this.senhas.senhaConf.trim())
        return true;
      return false;
    }

    @Watch('user.dataNascimento')
    teste(){
      console.log(this.user.dataNascimento);
    }

    enviarFormulario():void{
      if(this.user.nome.length <= 0 || this.user.email.length <= 0 
      || this.user.senha.length <= 0 || this.senhas.senhaConf.length <= 0 || this.user.dataNascimento.toString.length <= 0 
      ) {
        this.mensagemErro ='Por favor Preencha todos os campos'
      }

    }
    
  }
</script>

<style scoped>

  .botao{
    @apply py-2 px-4  text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75
  }

  .botao-verde{
    @apply bg-green-500 hover:bg-green-700
  } 

  .input{
    @apply bg-gray-300 p-3 rounded-md w-10/12 text-black
  }
</style>