<template>
    <section>
            <div id="homepage">
                <BoardList :categories="categories" :tasks="tasks" :editAddPageProp="editAddPageProp"></BoardList>
            </div>
    </section>
</template>

<script>
import BoardList from '../components/BoardList.vue'

export default {
    name: 'HomePage',
    props: ["baseUrl", "editAddPageProp", "fetchTasks", "tasks"],
    data() {
        return {
            categories: ['backlog', 'todo', 'doing', 'done']
        }
    },
    components: {
        BoardList
    },
    created() {
        this.fetchTasks();
    }
}
</script>

<style>

</style>