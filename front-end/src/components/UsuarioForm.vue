<template>
	<div class="max-w-sm w-full rounded-lg border-2 border-gray-300 shadow-lg">
		<h1 class="text-2xl font-semibold leading-none ml-7 my-5">
			Cadastrar Usuario
		</h1>

		<div class="h-0.5 bg-gray-400 w-auto mx-5 my-2" />

		<form class="flex flex-col items-center gap-3">
			<input
				class="input"
				v-model="user.nome"
				placeholder="Nome"
				type="text"
				name=""
			/>
			<input
				class="input"
				v-model="user.email"
				placeholder="Email"
				type="text"
				name=""
			/>
			<input
				class="input"
				v-model="user.senha"
				placeholder="Senha"
				type="password"
				name=""
			/>
			<input
				class="input"
				v-model="user.senhaConf"
				placeholder="Confirmar Senha"
				type="password"
				name=""
			/>
			<input
				class="input"
				v-model="user.dataNascimento"
				placeholder="DataNacimento"
				type="date"
				name=""
			/>

			<p class="text-red-400" v-show="mensagemErro.length > 0">
				{{ mensagemErro }}
			</p>
		</form>
		<div class="h-0.5 bg-gray-400 w-auto mx-5 my-2" />
		<div class="flex mt-4 mx-12 justify-end gap-4 mb-4">
			<button class="botao bg-red-400 hover:bg-red-700" @click="apagar()">
				Apagar
			</button>
			<button class="botao botao-verde" @click="adicionarUser()">
				Adicionar
			</button>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Watch } from 'vue-property-decorator';
	import User from '../models/User';
	import UserDTO from '../models/UserDTO';
	import UserService from '../service/UserService';

	@Component
	export default class UsuarioForm extends Vue {
		user: UserDTO = new UserDTO();
		userService: UserService = new UserService();

		mensagemErro: string = '';

		apagar(): void {
			this.user = new UserDTO();
			this.mensagemErro = '';
		}

		confirmarSenhas(): boolean {
			if (this.user.senha.trim() === this.user.senhaConf.trim()) return true;
			return false;
		}

		async adicionarUser(): Promise<void> {
			if (this.user.nome.length <= 0) {
				this.mensagemErro = 'Por favor Preencha o campo nome';
				return;
			}

			if (this.user.email.length <= 0) {
				this.mensagemErro = 'Por favor Preencha o campo email';
				return;
			}

			if (this.user.senha.length <= 0) {
				this.mensagemErro = 'Por favor Preencha o campo senha';
				return;
			}

			if (!this.confirmarSenhas()) {
				this.mensagemErro = 'senhas não são iguais';
				return;
			}
			if (this.user.dataNascimento.length <= 0) {
				this.mensagemErro = 'Por favor Preencha o campo dataNascimento';
				return;
			}

			console.log('deu certo');
			try {
				const u = this.user;
				const usuario: User = {
					nome: u.nome,
					email: u.email,
					senha: u.senha,
					dataNascimento: u.dataNascimento.toString(),
				};
				const res = await this.userService.postUser(usuario);
				this.$router.push({ name: 'usuarios' });

				this.user = new UserDTO();
			} catch (e) {
				console.log(e.message);
			}
		}
	}
</script>

<style scoped>
	.botao {
		@apply py-2 px-4  text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75;
	}

	.botao-verde {
		@apply bg-green-500 hover:bg-green-700;
	}

	.input {
		@apply bg-gray-300 p-3 rounded-md w-10/12 text-black;
	}
</style>
