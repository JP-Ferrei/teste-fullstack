<template>
  <div class="flex mx-auto flex-col gap-3 items-center rounded-lg border-2 border-gray-300 shadow-lg bg-white ">
    <div class="my-5 md:flex md:flex-row md:flex-wrap md:gap-2 md:justify-evenly">
      <UserCard v-for="user in lista" :key="user.id" :user=user class="" > </UserCard>

    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
import User from '../models/User';
import UserCard from './UserCard.vue';

  @Component({
    components:{
      UserCard
    }
  })
  export default class UserList extends Vue {
    lista: User[] = [{nome:'teste',email:'teste@mail.com',dataNascimento:new Date(1998,21,9), id:"223"},
    {nome:'hehe',email:'hehe@mail.com',dataNascimento:new Date(1998,21,9), id:"123"},
    {nome:'diego',email:'diego@mail.com',dataNascimento:new Date(1998,21,9), id:"234"},
    {nome:'diego',email:'diego@mail.com',dataNascimento:new Date(1998,21,9), id:"214"},
    {nome:'diego',email:'diego@mail.com',dataNascimento:new Date(1998,21,9), id:"236"},
    {nome:'diego',email:'diego@mail.com',dataNascimento:new Date(1998,21,9), id:"224"},
    {nome:'diego',email:'diego@mail.com',dataNascimento:new Date(1998,21,9), id:"2124"},
    {nome:'diego',email:'diego@mail.com',dataNascimento:new Date(1998,21,9), id:"2334"},
    {nome:'diego',email:'diego@mail.com',dataNascimento:new Date(1998,21,9), id:"2324"},
    {nome:'diego',email:'diego@mail.com',dataNascimento:new Date(1998,21,9), id:"2314"},
    {nome:'diego',email:'diego@mail.com',dataNascimento:new Date(1998,21,9), id:"21234"},
    ]
  }
</script>

<style scoped>

</style>