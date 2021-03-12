<template>
    <section>
            <div id="homepage">
                <BoardList></BoardList>
            </div>
    </section>
</template>

<script>
import BoardList from '../components/BoardList.vue'

export default {
    name: 'HomePage',
    data() {
        return {

        }
    },
    components: {
        BoardList
    }
}
</script>

<style>

</style>