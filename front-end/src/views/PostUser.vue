<template>
	<div>
		<UsuarioForm class="mx-auto md:mt-14" />
		<router-view />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import UsuarioForm from '../components/UsuarioForm.vue';

	@Component({
		components: {
			UsuarioForm,
		},
	})
	export default class PostUser extends Vue {}
</script>

<style scoped></style>
