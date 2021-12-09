<template>
  <div class=" h-screen bg-gray-100">
    <Header /> 
    <UsuarioForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import UsuarioForm from './components/UsuarioForm.vue';

  @Component({
    components:{
      UsuarioForm,
      Header
    }
  })
  export default class App extends Vue {
    
  }
</script>

<style scoped>

</style>