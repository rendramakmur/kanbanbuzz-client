<template>
<!-- Start add task -->
    <section>
        <div id="add-task-page">
            <div class="container-fluid">
                <div class="overlay">
                    
                    <div class="row mx-3">
                        <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
                            <div class="col-sm-4">
                                <div class="card mt-3 mb-5 shadow-lg">
                                    <div class="card-header d-flex justify-content-between">
                                        <p class="medium-text ms-2">ADD TASK</p>
                                        <!-- Close button -->
                                        <a type="button" class="btn-close me-2" aria-label="Close" @click.prevent="editAddPageProp(false)"></a>
                                    </div>
                                    <div class="card-body">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="title-task" placeholder="Create Something" v-model="title">
                                            <label for="title-task">Title</label>
                                        </div>

                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="description-task" placeholder="Create with something." v-model="description">
                                            <label for="description-task">Description</label>
                                        </div>

                                        <label for="task-category">Category</label>
                                        <select class="form-select mb-3" style="color: #8DAC50" id="task-category" v-model="category">
                                            <option value="backlog">Backlog</option>
                                            <option value="todo">To-Do</option>
                                            <option value="doing">Doing</option>
                                            <option value="done">Done</option>
                                        </select>

                                        <label for="task-category">Priority</label>
                                        <select class="form-select mb-3" style="color: #8DAC50" id="task-priority" v-model="priority">
                                            <option value="very low">Very Low</option>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                            <option value="very high">Very High</option>
                                        </select>

                                        <div class="d-flex justify-content-center">
                                            <div class="mt-2">
                                                <a href="#" class="btn medium-button my-1 px-4 shadow" @click.prevent="addTask">Submit</a>
                                            </div>
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
<!-- End add task -->
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'AddPage',
    props: ['editAddPageProp', 'baseUrl', 'fetchTasks'],
    data() {
        return {
            title: '',
            description: '',
            category: '',
            priority: ''
        }
    },
    methods: {
        addTask() {
            axios({
                url: `${this.baseUrl}/tasks`,
                method: 'POST',
                headers: {
                    access_token: localStorage.access_token
                },
                data: {
                    title: this.title,
                    description: this.description,
                    category: this.category,
                    priority: this.priority
                }
            })
            .then(({data}) => {
                console.log(data);

                Swal.fire({
                    icon: 'success',
                    title: `Add task success!`
                })

                this.fetchTasks();
                this.editAddPageProp(false);
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
                this.title = '';
                this.description = '';
                this.category = '';
                this.priority = '';
            })
        }
    }
}
</script>

<style>

</style>