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
                                        <p class="medium-text ms-2">EDIT TASK</p>
                                        <!-- Close button -->
                                        <a type="button" class="btn-close me-2" aria-label="Close" @click.prevent="changeEditTaskPage(false)"></a>
                                    </div>
                                    <div class="card-body">
                                        <!-- Call computed getId -->
                                        <span style="display: none;">{{ getId }}</span>
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="title-task" placeholder="Create Something" v-model="getTitle">
                                            <label for="title-task">Title</label>
                                        </div>

                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="description-task" placeholder="Create with something." v-model="getDescription">
                                            <label for="description-task">Description</label>
                                        </div>

                                        <label for="task-category">Category</label>
                                        <select class="form-select mb-3" style="color: #8DAC50" id="task-category" v-model="getCategory">
                                            <option value="backlog">Backlog</option>
                                            <option value="todo">To-Do</option>
                                            <option value="doing">Doing</option>
                                            <option value="done">Done</option>
                                        </select>

                                        <label for="task-category">Priority</label>
                                        <select class="form-select mb-3" style="color: #8DAC50" id="task-priority" v-model="getPriority">
                                            <option value="very low">Very Low</option>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                            <option value="very high">Very High</option>
                                        </select>

                                        <div class="d-flex justify-content-center">
                                            <div class="mt-2">
                                                <a href="#" class="btn medium-button my-1 px-4 shadow" @click.prevent="editTask">Submit</a>
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

export default {
    name: 'EditPage',
    props: ["changeEditTaskPage", "editedTask", "baseUrl", "fetchTasks"],
    data() {
        return {
            id: this.getId,
            title: '',
            description: '',
            category: '',
            priority: ''
        }
    },
    methods: {
        editTask () {
            axios({
                url: `${this.baseUrl}/tasks/${this.id}`,
                method: 'PUT',
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
                this.fetchTasks();
                this.changeEditTaskPage(false)
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    computed: {
        getId() {
            this.id = this.editedTask.id;
            return this.id = this.editedTask.id;
        },
        getTitle: {
            get: function () {
                this.title = this.editedTask.title
                return this.editedTask.title
            },
            set: function (value) {
                this.title = value;
            }
        },
        getDescription: {
            get: function () {
                this.description = this.editedTask.description
                return this.editedTask.description
            },
            set: function (value) {
                this.description = value;
            }
        },
        getCategory: {
            get: function () {
                this.category = this.editedTask.category
                return this.editedTask.category
            },
            set: function (value) {
                this.category = value;
            }
        },
        getPriority: {
            get: function () {
                this.priority = this.editedTask.priority
                return this.editedTask.priority
            },
            set: function (value) {
                this.priority = value;
            }
        }
    }
}
</script>

<style>

</style>