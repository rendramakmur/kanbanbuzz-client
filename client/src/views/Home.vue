<template>
    <section>
            <div id="homepage">
                <BoardList :categories="categories" :tasks="tasks" :addPageProp="addPageProp" :fetchTasks="fetchTasks" :baseUrl="baseUrl" :changeEditTaskPage="changeEditTaskPage" @editedTaskOnBoardList="editedTaskOnHomepage"></BoardList>
            </div>
            <div id="editPage" v-if="editTask === true">
                <EditPage :changeEditTaskPage="changeEditTaskPage" :editedTask="editedTask" :baseUrl="baseUrl" :fetchTasks="fetchTasks"></EditPage>
            </div>
    </section>
</template>

<script>
import BoardList from '../components/BoardList.vue';
import EditPage from'./EditTask';

export default {
    name: 'HomePage',
    props: ["baseUrl", "addPageProp", "fetchTasks", "tasks"],
    data() {
        return {
            categories: ['backlog', 'todo', 'doing', 'done'],
            editTask: false,
            editedTask: ''
        }
    },
    methods: {
        changeEditTaskPage (value) {
            this.editTask = value;
        },
        editedTaskOnHomepage(value) {
            this.editedTask = value;
        }
    },
    components: {
        BoardList,
        EditPage
    },
    created() {
        this.fetchTasks();
    }
}
</script>

<style>

</style>