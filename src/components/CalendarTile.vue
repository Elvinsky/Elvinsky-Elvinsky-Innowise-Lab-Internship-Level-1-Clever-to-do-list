<template>
  <section>
    <div
      :class="daysToCompare[new Date(timestamp).getDay()]==='SUN'?'weekend tile':'tile'"
      @click="onClick"
    >
      {{ daysToCompare[new Date(timestamp).getDay()] }}
      {{ new Date(timestamp).getDate() }}.{{ new Date(timestamp).getMonth() }}
      <!-- {{ new Date(timestamp).toLocaleDateString() }} -->
    </div>
    <div class="indicators">
      <div
        v-if="flags.done"
        class="done"
      />
      <div
        v-if="flags.undone"
        class="undone"
      />
    </div>
  </section>
</template>

<script>
import { getTodosByDay } from '@/scripts/dbScripts/queries';
import {statusCheck} from '../scripts/utils'
export default {
    // eslint-disable-next-line vue/require-prop-types
    props:['timestamp'],
    data() {
        return {
            daysToCompare:['SUN','MON','TUE','WED','THU','FRI','SAT'],
            user:JSON.parse(localStorage.getItem('user')),
            todos:[],
            flags:{}
        };
    },
    mounted(){
        
        getTodosByDay(new Date(`2023-${new Date(this.timestamp).getMonth()}-${new Date(this.timestamp).getDate()}`),'/users/'+this.user.id+'/todos/').then(data=>{
            this.todos=data
            this.flags=statusCheck(this.todos)
        })

    },
    methods:{
        onClick(){
            this.$emit('on-click',this.timestamp)
        }
    },
}
</script>

<style scoped>
section{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.tile.weekend{
  background-color: rgba(255, 0, 0, 0.612);
}
.tile{
  padding: 1em;
  background-color: rgba(127, 255, 212, 0.508);
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0);
  transition: all;
  transition-duration: 200ms;
}
.tile:hover{
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
.indicators{
  display: flex;
  gap: 1em;
  margin-top: 0.2em;
}
.indicators div{
  border-radius: 50%;
  width: 8px;
  height: 8px;
}
.done{
  background-color: rgba(255, 255, 0, 0.662);
}
.undone{
  background-color: grey;
}
</style>