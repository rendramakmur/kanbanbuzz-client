<template>
<div>
<!-- Start kanban card -->
    <div class="card mt-3 shadow">
        <div class="card-header">
            <p>{{ taskData.title }}</p>
        </div>
        <div class="card-body">
            <p class="very-small-text">{{ taskData.description }}</p>
            <div class="mt-2">
                <p class="mt-2 very-small-text" style="font-size: 12px">By: {{ taskData.User.email }}</p> <p class="very-small-text mb-2" style="font-size: 12px">Priority: {{ taskData.priority }}</p>
                <a href="#" class="small-button btn-edit shadow-sm" @click.prevent="getEditTask(taskData.id)">Edit</a> <a href="#" class="small-button btn-delete shadow-sm" @click.prevent="deleteTask(taskData.id)">Delete</a>
            </div>
        </div>
    </div>
<!-- End kanban card -->
</div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'TaskItem',
    props: ['taskData', "fetchTasks", "baseUrl", "changeEditTaskPage"],
    data() {
        return {
            editedData: ''
        }
    },
    methods: {
        deleteTask(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete!'
            })
            .then((result) => {
                if (result.isConfirmed) {
                    axios({
                        url: `${this.baseUrl}/tasks/${id}`,
                        method: 'DELETE',
                        headers: {
                            access_token: localStorage.access_token
                        }
                    })
                    .then(({data}) => {
                        Swal.fire({
                            icon: 'success',
                            title: `Delete task success!`
                        })

                        this.fetchTasks();
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: 'error',
                            title: err.response.data.message
                        })
                    })
                }
            })

            
        },
        getEditTask(id) {
            axios({
                url: `${this.baseUrl}/tasks/${id}`,
                method: 'GET',
                headers: {
                    access_token: localStorage.access_token
                }
            })
            .then(({data}) => {
                this.editedData = data;
                this.$emit('editedTaskData', this.editedData)
                this.changeEditTaskPage(true);
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: err.response.data.message
                });
            })
        }
    }
}
</script>

<style>

</style>