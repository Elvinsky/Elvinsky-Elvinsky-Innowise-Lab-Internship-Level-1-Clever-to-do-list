<template>
  <section>
    <div class="header-wrapper">
      <h1 class="title">
        Taskker
      </h1>
    </div>
    <CalendarBar @change-date="handleChangeDate" />
    <div>
      <TodosCollection
        :user="user"
        :todos="todos"
      />
    </div>
  </section>
</template>

<script>
import CalendarBar from './CalendarBar.vue';
import TodosCollection from './TodosCollection.vue';
import { getTodosByDay } from '@/scripts/dbScripts/queries';
export default {
    components: { CalendarBar, TodosCollection },
    data() {
        return {
            user: {},
            todos:{},
            day:'14',
            month:'04'
        };
    },
    watch:{
        day(){
            getTodosByDay(new Date('2023-04-'+this.day),'/users/'+this.user.id+'/todos/').then(data=>this.todos=data)
        },
        month(){
            getTodosByDay(new Date('2023-'+this.month+'-14'),'/users/'+this.user.id+'/todos/').then(data=>this.todos=data)
        }
    },
    created() {
        this.user=JSON.parse(localStorage.getItem('user'))
        getTodosByDay(new Date('2023-'+this.month+'-14'),'/users/'+this.user.id+'/todos/').then(data=>this.todos=data)
    },
    methods:{
        handleChangeDate(day,month){
            this.day=day;
            this.month=month
        }
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
.header-wrapper{
    align-self: start;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>