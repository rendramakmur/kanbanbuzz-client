<template>
<!-- Start kanban card -->
    <div class="card mt-3 shadow">
        <div class="card-header">
            <p>Card Title</p>
        </div>
        <div class="card-body">
            <p class="very-small-text">Card Description</p>
            <div class="mt-2">
                <p class="mt-2 very-small-text" style="font-size: 12px">By: </p> <p class="very-small-text mb-2" style="font-size: 12px">Priority: </p>
                <a href="#" class="small-button btn-edit shadow-sm">Edit</a> <a href="#" class="small-button btn-delete shadow-sm">Delete</a>
            </div>
        </div>
    </div>
<!-- End kanban card -->
</template>

<script>
export default {
    name: 'TaskItem',
    data() {
        return {

        }
    }
}
</script>

<style>

</style>