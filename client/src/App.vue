<template>
    <div>
        <Navbar :pageProp="page" @navbarLogin="changePage" @navbarRegister="changePage" @navbarLogout="logout"></Navbar>
        <LoginPage v-if="page === 'login'" :baseUrl="baseUrl" :changePageProp="changePage"></LoginPage>
        <RegisterPage v-else-if="page === 'register'" :changePageProp="changePage" :baseUrl="baseUrl"></RegisterPage>
        <HomePage v-else-if="page === 'home'" :baseUrl="baseUrl" :addPageProp="changeAddPage" :fetchTasks="fetchTasks" :tasks="tasks"></HomePage>
        <AddTaskPage v-if="addTask === true" :editAddPageProp="changeAddPage" :baseUrl="baseUrl" :fetchTasks="fetchTasks"></AddTaskPage>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import LoginPage from './views/Login.vue';
import RegisterPage from './views/Register.vue';
import HomePage from './views/Home.vue';
import AddTaskPage from './views/AddTask.vue';
import axios from 'axios';

export default {
    name: 'App',
    data() {
        return {
            page: 'login',
            addTask: false,
            baseUrl: 'http://localhost:3000',
            tasks: []
        }
    },
    methods: {
        changePage(value) {
            if (value === 'login') {
                this.page = 'login';
            } else if (value === 'register') {
                this.page = 'register';
            } else if (value === 'home') {
                this.page = 'home';
            }
        },
        changeAddPage(value) {
            this.addTask=value;
        },
        logout() {
            localStorage.removeItem('access_token');
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            this.page='login';
        },
        fetchTasks() {
            axios({
                url: `${this.baseUrl}/tasks`,
                method: 'GET',
                headers: {
                    access_token: localStorage.access_token,
                }
            })
            .then(({data}) => {
                this.tasks = data;
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    components: {
        Navbar,
        LoginPage,
        RegisterPage,
        HomePage,
        AddTaskPage
    },
    created() {
        if (localStorage.access_token) {
            this.page='home';
        } else {
            this.page='login';
        }
    }
}
</script>

<style>

</style>