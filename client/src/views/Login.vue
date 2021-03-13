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
                                            <a href="#" class="btn medium-button my-1 shadow" @click.prevent="registerButton">Register</a>
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <div class="mt-2">
                                            <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
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
import GoogleLogin from 'vue-google-login';
import Swal from 'sweetalert2';

export default {
    name: 'LoginPage',
    props: ["baseUrl", "changePageProp"],
    data() {
        return {
            login_email: "",
            login_password: "",
            params: {
                client_id: '619622577651-9pogieltd69pr9f4mv6alvk2m752t91m.apps.googleusercontent.com'
            },
            renderParams: {
                width: 100,
                height: 30,
                longtitle: false
            }
        };
    },
    components: {
        GoogleLogin
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

                Swal.fire({
                    icon: 'success',
                    title: `Welcome back ${localStorage.name}.`
                })

                this.changePageProp('home');
            })
            .catch(err => {
                console.log(err.response.data.message);
                Swal.fire({
                    icon: 'error',
                    title: err.response.data.message
                })
            })
            .then(() => {
                this.login_email = ''
                this.login_password = ''
            }) 
        },
        registerButton() {
            this.changePageProp('register');
        },
        onSuccess(googleUser) {
            let google_token = googleUser.getAuthResponse().id_token;

            axios({
                url: `${this.baseUrl}/google-login`,
                method: 'POST',
                data: {
                    google_token
                }
            })
            .then(({data}) => {
                localStorage.access_token = data.access_token;
                localStorage.name = data.name;
                localStorage.email = data.email;

                Swal.fire({
                    icon: 'success',
                    title: `Welcome back ${localStorage.name}.`
                })

                this.changePageProp('home')
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: err.response.data.message
                })
            })
        }
    }
}
</script>

<style>

</style>