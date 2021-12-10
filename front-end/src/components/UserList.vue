<template>
	<div
		class="flex w-screen h-screen mx-auto flex-col gap-3 items-center rounded-lg border-2 border-gray-300 shadow-lg bg-white"
	>
		<div
			class="my-5 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-2 md:justify-evenly md:overflow-y-scroll"
		>
			<div v-for="user in users" :key="user.id">
				<UserCard :user="user" @excluir="getUsers()" style="max-width: 365px" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import axios from 'axios';
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import User from '../models/User';
	import UserCard from './UserCard.vue';
	import UserService from '../service/UserService';
	@Component({
		components: {
			UserCard,
		},
	})
	export default class UserList extends Vue {
		users: User[] = [];
		userService: UserService = new UserService();

		async getUsers() {
			const res = await this.userService.getUsers();
			this.users = res.data.users;
		}

		async created() {
			await this.getUsers();
		}
	}
</script>

<style scoped></style>
