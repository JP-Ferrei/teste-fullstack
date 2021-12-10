<template>
	<div>
		<div class="bg-gradient-to-r from-green-400 to-blue-500">
			<nav class="p-4 text-white text-2xl md:mx-5 flex justify-between">
				<router-link :to="{ name: 'home' }">Parcelex UserCrud</router-link>
				<ul class="flex gap-4">
					<router-link :to="{ name: 'home' }">
						<img
							src="../assets/addUser.svg"
							alt="adicionar usuario"
							class="w-6 h-6"
						/>
					</router-link>
					<router-link :to="{ name: 'usuarios' }"
						><img
							src="../assets/listaUsuarios.svg"
							class="w-6 h-6"
							alt="listarUser"
					/></router-link>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class Header extends Vue {}
</script>

<style scoped></style>
