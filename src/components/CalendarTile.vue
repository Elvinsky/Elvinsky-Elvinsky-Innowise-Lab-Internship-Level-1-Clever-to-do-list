<template>
  <div :class="day==='SUN'?'weekend tile':'tile'">
    {{ day }}
  </div>
</template>

<script>

export default {
    // eslint-disable-next-line vue/require-prop-types
    props:['timestamp'],
    data() {
        return {
            // startDay: '2023-04-10',
            // currentMonth: '04',
            // daysInARow: 7,
            // timestamps:[],
            daysToCompare:['SUN','MON','TUE','WED','THU','FRI','SAT'],
            day:''
        };
    },
    mounted(){
        // let curDate = new Date(this.startDay)
        // for(let step = 0;step<this.daysInARow;step++){
        //     this.timestamps.push(curDate.getTime())
        //     curDate.setDate(curDate.getDate()+1)
        //     console.log(this.timestamps[step],this.daysToCompare[new Date(this.timestamps[step]).getDay()] );
        // }
        this.day=this.daysToCompare[new Date(this.timestamp).getDay()]
    },
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