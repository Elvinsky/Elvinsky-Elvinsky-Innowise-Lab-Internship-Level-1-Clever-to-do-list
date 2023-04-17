<template>
  <section>
    <header>
      <h1 class="title">
        Taskker
      </h1>
    </header>
    <CalendarBar />
    <div>
      <TodosCollection :user="user" />
    </div>
  </section>
</template>

<script>
import CalendarBar from './CalendarBar.vue';
import TodosCollection from './TodosCollection.vue';
export default {
    components: { CalendarBar, TodosCollection },
    data() {
        return {
            user: {},
            todos:{},
        };
    },
    created() {
        this.user=JSON.parse(localStorage.getItem('user'))
    }
}
</script>

<style scoped>
section{
    width: 780px;
    margin: auto;
    padding: 1em;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.405);
    border-radius: 5px;
}
header{
    align-self: start;
}
</style>