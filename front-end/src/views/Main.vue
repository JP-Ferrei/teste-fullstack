<template>
	<div class="bg-gray-100 h-screen">
		<Header />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Header from '../components/Header.vue';
	import UsuarioForm from '../components/UsuarioForm.vue';

	@Component({
		components: {
			Header,
			UsuarioForm,
		},
	})
	export default class extends Vue {}
</script>

<style scoped></style>
