<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand ms-3 large-text" href="#">KanbanBuzz</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="d-flex justify-content-end collapse navbar-collapse me-3" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li v-if="pageProp === 'login'" class="nav-item">
                    <a class="nav-link medium-text" href="#" @click.prevent="changePage('register')">Register</a>
                </li>
                <li v-else-if="pageProp === 'register'" class="nav-item">
                    <a class="nav-link medium-text" href="#" @click.prevent="changePage('login')">Login</a>
                </li>
                <li v-else class="nav-item">
                    <a class="nav-link medium-text" href="#" @click.prevent="logout" :params="params">Logout</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: ["pageProp"],
    data() {
        return {
            params: {
                client_id: '619622577651-73ec0okb417rhrvucc1inaeaqprfopec.apps.googleusercontent.com'
            }
        }
    },
    methods: {
        changePage(value) {
            if (value === 'login') {
                this.$emit('navbarLogin', 'login');
            } else if (value === 'register') {
                this.$emit('navbarRegister', 'register');
            }
        },
        logout() {
            this.signOut();
            this.$emit('navbarLogout');
        },
        signOut() {
            let auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
            console.log('User signed out.');
            });
        }
    }
}
</script>

<style>

</style>