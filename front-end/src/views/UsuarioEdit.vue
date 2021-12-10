<template>
	<div>
		<EditUser class="mx-auto md:mt-10" />
		<router-view />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import EditUser from '../components/EditUser.vue';

	@Component({
		components: {
			EditUser,
		},
	})
	export default class UsuarioEdit extends Vue {}
</script>

<style scoped></style>
