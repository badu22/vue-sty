import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Player from './views/Player.vue';

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/player/:id',
			name: 'player',
			component: Player,
			props: true
		},
		{ 	
			path: '*', 
			redirect: '/' 
		}
	]
})
