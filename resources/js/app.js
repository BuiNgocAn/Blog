require('./bootstrap');
window.Vue = require('vue');

// Support vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from "./store/index"
const store = new Vuex.Store(
    storeData
);

//support moment js
import {filter} from './filter'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

import {routes} from './routes';
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;

// Sweet alert 2
import swal from 'sweetalert2'
window.swal = swal;
const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

window.toast = toast;

const router = new VueRouter({
    mode: 'hash',
    routes // short for `routes: routes`
});

const app = new Vue({
    el: '#app',
    router,
    store
});
