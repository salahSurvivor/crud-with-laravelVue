import { createRouter,  createWebHistory} from "vue-router";
import categorieIndex from '../component/categories/categorieIndex.vue';
import categorieCreate from '../component/categories/categorieCreate.vue';
import categorieEdit from '../component/categories/categorieEdit.vue';
import productIndex from '../component/products/productIndex.vue';
import productCreate from '../component/products/productCreate.vue';
import productEdit from '../component/products/productEdit.vue';
import home from '../component/home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/categories',
        name: 'index',
        component: categorieIndex
    },
    {
        path: '/categories/create',
        name: 'create',
        component: categorieCreate
    },
    {
        path: '/categories/:id/edit',
        name: 'edit',
        component: categorieEdit,
        props: true
    },
    {
        path: '/product',
        name: 'indexProduct',
        component: productIndex
    },
    {
        path: '/product/create',
        name: 'createProduct',
        component: productCreate
    },
    {
        path: '/product/:id',
        name: 'editProduct',
        component: productEdit,
        props: true
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
});