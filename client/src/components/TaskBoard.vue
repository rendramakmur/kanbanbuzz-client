<template>
<!-- Start kanban column -->
    <div class="col-sm-3" style="height: 100vh;">
        <div class="card mt-3 mb-5 shadow-lg" style="height: 90vh;">
            <div class="card-header">
                <p class="medium-text text-center">Doing</p>
            </div>
            <div class="card-body overflow-auto">
                
                <!-- Task items -->
                <TaskItem></TaskItem>

            </div>

            <!-- Add task button -->
            <div class="card-footer">
                <a href="#" class="btn medium-button col-6 offset-3 my-1 shadow">Add task</a>
            </div>
            <!-- End task button -->

    </div>
<!-- End kanban cloumn -->
</template>

<script>
import TaskItem from './TaskItem.vue'

export default {
    name: 'TaskBoard',
    data() {
        return {

        }
    },
    components: {
        TaskItem
    }
}
</script>

<style>

</style>