<template>
<!-- Start add task -->
    <section>
        <div id="add-task-page">
            <div class="container-fluid">

                <div class="row mx-3">
                    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
                        <div class="col-sm-4">
                            <div class="card mt-3 mb-5 shadow-lg">
                                <div class="card-header">
                                    <p class="medium-text text-center">ADD TASK</p>
                                </div>
                                <div class="card-body">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="title-task" placeholder="Create Something">
                                        <label for="title-task">Title</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="description-task" placeholder="Create with something.">
                                        <label for="description-task">Description</label>
                                    </div>

                                    <label for="task-category">Category</label>
                                    <select class="form-select mb-3" style="color: #8DAC50" id="task-category">
                                        <option value="backlog">Backlog</option>
                                        <option value="todo">To-Do</option>
                                        <option value="doing">Doing</option>
                                        <option value="done">Done</option>
                                    </select>

                                    <label for="task-category">Priority</label>
                                    <select class="form-select mb-3" style="color: #8DAC50" id="task-priority">
                                        <option value="very low">Very Low</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                        <option value="very high">Very High</option>
                                    </select>

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
<!-- End add task -->
</template>

<script>
export default {

}
</script>

<style>

</style>