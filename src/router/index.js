import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Fields from '@/components/Fields'
import Login from '@/components/Login'
import InsertField from '@/components/InsertField';
import Thanks from '@/components/Thanks';
import ThanksV2 from '@/components/Thanks-V2';
import ListField from '@/components/ListField';


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/fields',
            name: 'fields',
            component: Fields
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/insert-field',
            name: 'insert-field',
            component: InsertField
        },
        {
            path: '/thank-you',
            name: 'thank-you',
            component: Thanks
        }, {
            path: '/thank-you-farmer',
            name: 'thank-you-farmer',
            component: ThanksV2
        }, {
            path: '/list-field',
            name: 'list-field',
            component: ListField
        },
    ]
})
