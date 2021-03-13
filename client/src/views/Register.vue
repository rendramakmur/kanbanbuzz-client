<template>
  <section>
        <div id="register-page">
            <div class="container-fluid">

                <div class="row mx-3">
                    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
                        <div class="col-sm-4">
                            <div class="card mt-3 mb-5 shadow-lg">
                                <div class="card-header">
                                    <p class="medium-text text-center">REGISTER</p>
                                </div>
                                <div class="card-body">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="name-register" placeholder="Jon Doe" v-model="full_name">
                                        <label for="name-register">Full name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="email-register" placeholder="name@example.com" v-model="email">
                                        <label for="email-register">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="password-register" placeholder="Password" v-model="password">
                                        <label for="password-register">Password</label>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <div class="mt-2">
                                            <a href="#" class="btn medium-button my-1 px-4 shadow" @click.prevent="register">Submit</a>
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
import Swal from 'sweetalert2';

export default {
    name: 'RegisterPage',
    props: ["baseUrl", "changePageProp"],
    data() {
        return {
            full_name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            axios({
                url: `${this.baseUrl}/register`,
                method: 'POST',
                data: {
                    full_name: this.full_name,
                    email: this.email,
                    password: this.password
                }
            })
            .then(({data}) => {
                console.log(data);
                
                Swal.fire({
                    icon: 'success',
                    title: `Register success!`
                })

                this.changePageProp('login')
            })
            .catch(err => {
                let errMessage = ''
                err.response.data.forEach((data, i) => {  
                    if (i === err.response.data.length-1) {
                        errMessage += data.message;
                    } else {
                        errMessage += data.message;
                        errMessage += ', '
                    }
                });
                errMessage += '.'

                Swal.fire({
                    icon: 'error',
                    text: errMessage
                })
            })
            .then(() => {
                this.full_name,
                this.email,
                this.password
            })
        }
    }

}
</script>

<style>

</style>