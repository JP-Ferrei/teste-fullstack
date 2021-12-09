<template>
  <div class="md:max-w-md  rounded-lg border-2 border-gray-300 shadow-lg ">
    <h1 class=" text-2xl font-semibold leading-none ml-7 my-5">Cadastrar Usuario</h1>

    <div class="h-0.5 bg-gray-400 w-auto mx-5 my-2"/>
    
    <form class=" flex flex-col items-center gap-3 ">

      <input class="bg-gray-300 p-3 rounded-md w-10/12 text-black" v-model="user.nome" placeholder="Nome" type="text" name="" id="">
      <input class="bg-gray-300 p-3 rounded-md w-10/12 text-black" v-model="user.email" placeholder="Email" type="text" name="" id="">
      <input class="bg-gray-300 p-3 rounded-md w-10/12 text-black" v-model="senha" placeholder="Senha" type="text" name="" id="">
      <input class="bg-gray-300 p-3 rounded-md w-10/12 text-black" v-model="senhaConf" placeholder="Confirmar Senha" type="text" name="" id="">
      <input class="bg-gray-300 p-3 rounded-md w-10/12 text-black" v-model="user.dataNascimento" placeholder="DataNacimento" type="text" name="" id="">
      
    </form>
    <div class="h-0.5 bg-gray-400 w-auto mx-5 my-2"/>
    <div class="flex mt-4 mx-12 justify-end gap-4">
      <button class="p-3 bg-red-400  rounded-lg mb-4"  @click="apagar()"> Apagar </button>
      <button class="p-3 bg-green-400  rounded-lg mb-4" @click="adicionarUser()" > Adicionar </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import User from '../models/User'

  @Component
   
  export default class UsuarioForm extends Vue {
    user: User = new User() 
    senha!:string 
    senhaConf!:string

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

    enviarFormulario():void{
      if(this.user.nome.length <= 0 || this.user.email.length <= 0 
      || this.user.senha.length <= 0 || this.senhas.senhaConf.length <= 0 
      ) {
        this.mensagemErro ='Por favor Preencha todos os campos'
      }

    }
    
  }
</script>

<style scoped>

</style>