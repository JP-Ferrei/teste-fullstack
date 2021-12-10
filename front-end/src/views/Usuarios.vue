<template>
	<div>
		<UserList />
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Header from '../components/Header.vue';
	import UserList from '../components/UserList.vue';

	@Component({
		components: {
			Header,
			UserList,
		},
	})
	export default class Usuarios extends Vue {}
</script>

<style scoped></style>
