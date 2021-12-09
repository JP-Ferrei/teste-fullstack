<template>
  <div class="  bg-gray-100 ">
    <Header /> 
    <div class="flex mx-auto flex-col md:grid md:grid-rows-2 md:grid-cols-2 md:mx-20 ">
      <UsuarioForm class="mx-auto my-auto"/>
      <UserList  class="md:col-span-2"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import UserList from './components/UserList.vue';
import UsuarioForm from './components/UsuarioForm.vue';

  @Component({
    components:{
      UsuarioForm,
      UserList,
      Header,
    }
  })
  export default class App extends Vue {
    
  }
</script>

<style scoped>

</style>