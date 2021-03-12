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
                                        <input type="text" class="form-control" id="name-register" placeholder="Jon Doe">
                                        <label for="name-register">Full name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="email-register" placeholder="name@example.com">
                                        <label for="email-register">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="password-register" placeholder="Password">
                                        <label for="password-register">Password</label>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <div class="mt-2">
                                            <a href="#" class="btn medium-button my-1 px-4 shadow">Submit</a>
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
export default {
    name: 'RegisterPage'

}
</script>

<style>

</style>