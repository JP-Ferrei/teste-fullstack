<template>
  <div class="bg-white border-2 border-gray-300 shadow-lg rounded flex min-w-min flex-wrap ">
      <img :src="foto" alt="imagem usuario" class="rounded-full my-3 mx-2" />

      <div class="w-0.5 bg-gray-400 w-auto mx-3 my-2"/>
      <div class="flex flex-col  gap-2 -3 my-auto ">
          <p>{{user.nome}}</p>
          <p>{{user.email}}</p>
          <p>{{formatarData()}}</p>
      </div>

      <div class="flex flex-col justify-between  my-5 mx-1 ">
        <button class="botao bg-red-400 hover:bg-red-700 ">
          <img src="../assets/lixeira.svg" class="w-6 mx-auto white" alt="">
        </button>
        
        <button class="botao bg-blue-400 hover:bg-blue-700" @click="adicionarUser()" >
          <img src="../assets/lapis.svg" alt="editar usuario">
        </button>

      </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import User from '../models/User';
  import axios from 'axios'

  @Component
  export default class UserCard extends Vue {
    @Prop() user!: User;
    foto:string = ''

    async getFoto(){
      const res = await axios.get('https://randomuser.me/api/');
      this.foto = res.data.results[0].picture.large
    }

    formatarData(){
     return this.user.dataNascimento.toLocaleDateString()
    }

    async created(){
      await this.getFoto()
      this.formatarData()
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