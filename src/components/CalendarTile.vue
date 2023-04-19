<template>
  <div
    :class="day==='SUN'?'weekend tile':'tile'"
    @click="onClick"
  >
    {{ day }}
  </div>
</template>

<script>

export default {
    // eslint-disable-next-line vue/require-prop-types
    props:['timestamp'],
    data() {
        return {
            daysToCompare:['SUN','MON','TUE','WED','THU','FRI','SAT'],
            day:''
        };
    },
    mounted(){
        this.day=this.daysToCompare[new Date(this.timestamp).getDay()]
    },
    methods:{
        onClick(){
            this.$emit('on-click',this.timestamp)
        }
    }
}
</script>

<style scoped>
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
}
.tile:hover{
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
</style>