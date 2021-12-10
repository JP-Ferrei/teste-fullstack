<template>
	<div class="max-w-sm w-full rounded-lg border-2 border-gray-300 shadow-lg">
		<h1 class="text-2xl font-semibold leading-none ml-7 my-5">
			Editar Usuario
		</h1>

		<div class="h-0.5 bg-gray-400 w-auto mx-5 my-2" />

		<form class="flex flex-col items-center gap-3">
			<input
				class="input"
				v-model="user.nome"
				:placeholder="user.nome"
				type="text"
				name=""
			/>
			<input
				class="input"
				v-model="user.email"
				:placeholder="user.email"
				type="text"
				name=""
			/>
			<!-- <input
				class="input"
				v-model="user.senha"
				placeholder="Nova Senha"
				type="password"
				name=""
			/>
			<input
				class="input"
				v-model="user.senhaConf"
				placeholder="Confirmar Senha"
				type="password"
				name=""
			/> -->
			<input
				class="input"
				v-model="user.dataNascimento"
				:placeholder="user.dataNascimento"
				type="date"
				name=""
			/>

			<p class="text-red-400" v-show="mensagemErro.length > 0">
				{{ mensagemErro }}
			</p>
		</form>
		<div class="h-0.5 bg-gray-400 w-auto mx-5 my-2" />
		<div class="flex mt-4 mx-12 justify-end gap-4 mb-4">
			<button class="botao bg-red-400 hover:bg-red-700" @click="voltar()">
				Voltar
			</button>
			<button class="botao botao-verde" @click="editarUser()">Editar</button>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Watch } from 'vue-property-decorator';
	import User from '../models/User';
	import UserDTO from '../models/UserDTO';
	import UserService from '../service/UserService';

	@Component
	export default class EditUser extends Vue {
		user: UserDTO = new UserDTO();
		userService: UserService = new UserService();

		mensagemErro: string = '';
		campoAux: number = 0;

		id: string = '';

		voltar(): void {
			this.$router.back();
		}

		async created() {
			this.id = this.$router.currentRoute.params.userId;

			const res = await this.userService.getUser(this.id);
			this.user = res.data;
			this.user.dataNascimento = this.user.dataNascimento.substring(0, 10);
			console.log(this.user);
		}

		async editarUser() {
			try {
				const res = await this.userService.patchUser(this.id, this.user);
				this.$router.push({ name: 'usuarios' });
			} catch (e) {
				console.log(e.message);
			}
		}

		verificaCampos() {
			if (!this.confirmarSenhas()) {
				this.mensagemErro = 'senhas não são iguais';
				return;
			}
		}

		confirmarSenhas(): boolean {
			if (this.user.senha !== undefined || this.user.senha !== undefined) {
				if (this.user.senha === this.user.senhaConf) return true;
				return false;
			}
		}
	}
</script>

<style scoped>
	.botao {
		@apply py-2 px-4  text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75;
	}

	.botao-verde {
		@apply bg-blue-500 hover:bg-green-700;
	}

	.input {
		@apply bg-gray-300 p-3 rounded-md w-10/12 text-black;
	}
</style>
