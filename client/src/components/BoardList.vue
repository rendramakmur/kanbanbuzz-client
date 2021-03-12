<template>
    <div class="container-fluid">

        <!-- Start first row + mx -->
        <div class="row mx-2">
            <TaskBoard v-for="(category, i) in categories" :key="i" :categoryName="category" :tasks="tasks" :editAddPageProp="editAddPageProp"></TaskBoard>
        </div>
    </div>
</template>

<script>
import TaskBoard from './TaskBoard'

export default {
    name: 'BoardList',
    props: ["categories", "tasks", "editAddPageProp"],
    data() {
        return {

        }
    },
    components: {
        TaskBoard
    }
}
</script>

<style>

</style>