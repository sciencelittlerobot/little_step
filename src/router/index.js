import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home.vue';
import Index from '../view/index.vue';
import Study from '../view/study.vue';
import Work from '../view/work.vue';
import Others from '../view/others.vue';
import CreateNew from '../view/createNew.vue';
import Login from '../view/login.vue';

Vue.use(Router);

export default new Router({
  	routes: [
    	{
	      	path: '/',
	      	name: 'Home',
	      	component: Home
	    },
	    {
	    	path: '/index',
		    name: 'Index',
		    component: Index
	    },
	    {
	    	path: '/study',
		    name: 'Study',
		    component: Study
	    },
	    {
	    	path: '/work',
		    name: 'Work',
		    component: Work
	    },
	    {
	    	path: '/others',
		    name: 'Others',
		    component: Others
	    },
	    {
	    	path: '/createNew',
		    name: 'CreateNew',
		    component: CreateNew
	    },
	    {
	    	path: '/login',
		    name: 'Login',
		    component: Login
	    }
  	]
});
