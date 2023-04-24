<template>
  <section>
    <div
      :class="daysToCompare[new Date(timestamp).getDay()]==='SUN'?
        activeFlag?
          'weekend active tile' : 'weekend tile'
        :
        activeFlag?
          'tile active' : 'tile'
      "
      @click="onClick"
    >
      {{ daysToCompare[new Date(timestamp).getDay()] }}
      {{ new Date(timestamp).getDate() }}
    </div>
    <div
      v-if="!flags.done && !flags.undone"
      class="filler"
    />
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
import { getTodosByDay } from '@/scripts/dbScripts/queries.js';
import {statusCheck} from '@/scripts/utils/utils.js'
export default {
    // eslint-disable-next-line vue/require-prop-types
    props:['timestamp','active'],
    data() {
        return {
            daysToCompare:['SUN','MON','TUE','WED','THU','FRI','SAT'],
            user:JSON.parse(localStorage.getItem('user')),
            activeFlag:false,
            todos:[],
            flags:{}
        };
    },
    mounted(){
        getTodosByDay(new Date(`2023-${new Date(this.timestamp).getMonth()+1}-${new Date(this.timestamp).getDate()}`),'/users/'+this.user.id+'/todos/').then(data=>{
            this.todos=data
            this.flags=statusCheck(this.todos)
        })
        this.activeFlag=this.active===this.timestamp
    },
    methods:{
        onClick(){
            this.$emit('on-click',this.timestamp)
            this.activeFlag=this.active===this.timestamp
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
    border-color: rgba(255, 0, 0, 0.651);

}
.active{
  border-width: 2px;
  border-style: solid;
  border-color: black;
}
.tile{
  padding: 1em;
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(127, 255, 212);
  border-radius: 8px;
  transition: all;
  transition-duration: 200ms;
}
.tile:hover{
  border-width: 2px;
  border-style: solid;
  border-color: black;
}
.indicators{
  display: flex;
  gap: 1em;
  margin-top: 0.2em;
}
.filler{
  height: 8px
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