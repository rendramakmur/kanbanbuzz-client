<template>
    <div class="container-fluid">

        <!-- Start first row + mx -->
        <div class="row mx-2">
            <TaskBoard></TaskBoard>
        </div>
    </div>
</template>

<script>
import TaskBoard from './TaskBoard'

export default {
    name: 'BoardList',
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