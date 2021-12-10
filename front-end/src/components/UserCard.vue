<template>
	<div
		class="bg-white border-2 border-gray-300 shadow-lg rounded flex min-w-min max-h-64 flex-wrap"
	>
		<img
			:src="foto"
			alt="imagem usuario"
			class="rounded-full my-3 mx-2 w-24 h-24"
		/>

		<div class="w-0.5 bg-gray-400 w-auto mx-3 my-2" />
		<div class="flex flex-col gap-2 -3 my-auto">
			<p>{{ user.nome }}</p>
			<p>{{ user.email }}</p>
			<p>{{ formatarData() }}</p>
		</div>

		<div class="flex w-full justify-around my-5 mx-0.5 md:mt-2">
			<button
				class="botao bg-red-400 hover:bg-red-700"
				@click="excluirUsuario()"
			>
				<img
					src="../assets/lixeira.svg"
					class="w-6 mx-auto white"
					alt="excluir usuario"
				/>
			</button>

			<button
				class="botao bg-blue-400 hover:bg-blue-700"
				@click="editarUsuario()"
			>
				<img
					src="../assets/lapis.svg"
					class="w-6 mx-auto white"
					alt="editar usuario"
				/>
			</button>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import User from '../models/User';
	import axios from 'axios';
	import router from 'vue-router';
	import UserService from '../service/UserService';

	@Component
	export default class UserCard extends Vue {
		@Prop() user!: User;
		foto: string = '';
		userService: UserService = new UserService();

		async getFoto() {
			const res = await axios.get('https://randomuser.me/api/');
			this.foto = res.data.results[0].picture.large;
		}
		formatarData() {
			const date = this.user.dataNascimento.toString();
			const subDate = date.substring(0, 10);
			const dateArray = subDate.split('-');
			const aux = dateArray[0];
			dateArray[0] = dateArray[2];
			dateArray[2] = aux;

			return dateArray.join('/');
		}

		async excluirUsuario() {
			const res = await this.userService.deleteUser(this.user._id);
			this.$emit('excluir');
		}

		editarUsuario() {
			this.$router.push({ path: `usuario/${this.user._id}` });
		}
		async created() {
			await this.getFoto();

			this.formatarData();
		}
	}
</script>

<style scoped>
	.botao {
		@apply py-2 px-10  text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75;
	}

	.botao-verde {
		@apply bg-green-500 hover:bg-green-700;
	}

	.input {
		@apply bg-gray-300 p-3 rounded-md w-10/12 text-black;
	}
</style>
