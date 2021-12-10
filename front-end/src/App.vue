<template>
	<div class="bg-gray-100 h-screen">
		<Header />

		<router-view></router-view>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Header from './components/Header.vue';
	import UserList from './components/UserList.vue';
	import UsuarioForm from './components/UsuarioForm.vue';
	import User from './models/User';
	import axios from 'axios';

	@Component({
		components: {
			UsuarioForm,
			UserList,
			Header,
		},
	})
	export default class App extends Vue {}
</script>

<style scoped></style>
