<template>
<!-- Start kanban column -->
    <div class="col-sm-3" style="height: 100vh;">
        <div class="card mt-3 mb-5 shadow-lg" style="height: 90vh;">
            <div class="card-header">
                <p class="medium-text text-center" style="text-transform: capitalize;">{{ categoryName }}</p>
            </div>
            <div class="card-body overflow-auto">
                
                <!-- Task items -->
                <TaskItem v-for="task in filterCategory" :key="task.id" :taskData="task" :fetchTasks="fetchTasks" :baseUrl="baseUrl" :changeEditTaskPage="changeEditTaskPage" @editedTaskData="editedTaskOnTaskBoard"></TaskItem>

            </div>

            <!-- Add task button -->
            <div class="card-footer">
                <a href="#" class="btn medium-button col-6 offset-3 my-1 shadow" @click.prevent="addPageProp(true)">Add task</a>
            </div>
            <!-- End task button -->

    </div>
<!-- End kanban cloumn -->
</template>

<script>
import TaskItem from './TaskItem.vue'

export default {
    name: 'TaskBoard',
    props: ['categoryName', 'tasks', "addPageProp", "fetchTasks", "baseUrl", "changeEditTaskPage"],
    data() {
        return {

        }
    },
    components: {
        TaskItem
    },
    methods: {
        editedTaskOnTaskBoard(value) {
            this.$emit('editedTaskOnTaskBoard', value);
        }
    },
    computed: {
        filterCategory () {
            return this.tasks.filter(task => task.category.toLowerCase() === this.categoryName.toLowerCase());
        }
    }
}
</script>

<style>

</style>