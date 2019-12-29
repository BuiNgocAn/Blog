import AdminHome from './components/admin/AdminHome.vue'
import CategoryList from './components/admin/category/List.vue'
import AddCategory from './components/admin/category/New.vue'
import EditCategory from './components/admin/category/Edit.vue'


export const routes = [
    {
        path: '/home',
        component: AdminHome
    },

    {
        path: '/category-list',
        component: CategoryList
    },

    {
        path: '/edit-category/:categoryid',
        component: EditCategory
    },

    {
        path: '/add-category',
        component: AddCategory
    }
];

