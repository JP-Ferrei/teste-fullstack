import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Usuarios from '../views/Usuarios.vue';
import PostUser from '../views/PostUser.vue';
import UsuarioEdit from '../views/UsuarioEdit.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{ path: '/', redirect: { name: 'home' } },
	{ path: '/home', name: 'home', component: PostUser },
	{ path: '/usuarios', name: 'usuarios', component: Usuarios },
	{ path: '/usuario/:userId', name: 'usuario', component: UsuarioEdit },
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior(to, from, savedPosition) {
		const enabledScrollBehaviorRoutes = to.matched.some(
			(m) => m.meta.enableScrollBehavior
		);
		if (savedPosition && enabledScrollBehaviorRoutes) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
});

export default router;
