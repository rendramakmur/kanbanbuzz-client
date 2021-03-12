<template>
  <section>
        <div id="login-page">
            <div class="container-fluid">

                <div class="row mx-3">
                    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
                        <div class="col-sm-4">
                            <div class="card mt-3 mb-5 shadow-lg">
                                <div class="card-header">
                                    <p class="medium-text text-center">LOGIN</p>
                                </div>
                                <div class="card-body">
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="email-login" placeholder="name@example.com" v-model="login_email">
                                        <label for="email-login">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="password-login" placeholder="Password" v-model="login_password">
                                        <label for="password-login">Password</label>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <div class="mt-2">
                                            <a href="#" class="btn medium-button my-1 px-3 shadow" @click.prevent="login">Login</a>
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <div class="mt-2">
                                            <a href="#" class="btn medium-button my-1 shadow">Register</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginPage',
    props: ["baseUrl", "changePageProp"],
    data() {
        return {
            login_email: "",
            login_password: "" 
        };
    },
    methods: {
        login() {
            axios({
                url: `${this.baseUrl}/login`,
                method: 'POST',
                data: {
                    email: this.login_email,
                    password: this.login_password
                }
            })
            .then(({data}) => {
                localStorage.access_token = data.access_token;
                localStorage.name = data.name;
                localStorage.email = data.email;

                this.changePageProp('home');
            })
            .catch(err => {
                console.log(err);
            })
            .then(() => {
                this.login_email = ''
                this.login_password = ''
            }) 
        }
    }
}
</script>

<style>

</style>