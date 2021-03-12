<template>
    <div class="container-fluid">

        <!-- Start first row + mx -->
        <div class="row mx-2">
            <TaskBoard v-for="(category, i) in categories" :key="i" :categoryName="category" :tasks="tasks" :addPageProp="addPageProp" :fetchTasks="fetchTasks" :baseUrl="baseUrl" :changeEditTaskPage="changeEditTaskPage" @editedTaskOnTaskBoard="editedTaskOnBoardList"></TaskBoard>
        </div>
    </div>
</template>

<script>
import TaskBoard from './TaskBoard'

export default {
    name: 'BoardList',
    props: ["categories", "tasks", "addPageProp", "fetchTasks", "baseUrl", "changeEditTaskPage"],
    data() {
        return {

        }
    },
    methods: {
        editedTaskOnBoardList(value) {
            this.$emit('editedTaskOnBoardList', value);
        }
    },
    components: {
        TaskBoard
    }
}
</script>

<style>

</style>