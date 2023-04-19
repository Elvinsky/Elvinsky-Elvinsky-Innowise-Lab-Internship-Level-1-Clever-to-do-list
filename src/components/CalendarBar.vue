<template>
  <div class="calendar-wrapper">
    <!-- <button
      id="14"
      @click="onDateChange($event)"
    >
      14
    </button>
    <button
      id="15"
      @click="onDateChange($event)"
    >
      15
    </button> -->
    <CalendarTile
      v-for="(item,idx) in timestamps"
      :key="item"
      :timestamp="timestamps[idx]"
    />
  </div>
</template>

<script>
import CalendarTile from './CalendarTile.vue';

export default {
    components: { CalendarTile },
    emits: ['change-date'],
    data() {
        return {
            startDay: '2023-04-10',
            currentMonth: '04',
            daysInARow: 7,
            timestamps:[],
            daysToCompare:['SUN','MON','TUE','WED','THU','FRI','SAT']
        };
    },
    mounted(){
        let curDate = new Date(this.startDay)
        for(let step = 0;step<this.daysInARow;step++){
            this.timestamps.push(curDate.getTime())
            curDate.setDate(curDate.getDate()+1)
            console.log(this.timestamps[step],this.daysToCompare[new Date(this.timestamps[step]).getDay()] );
        }
    },
    methods: {
        onDateChange(event) {
            this.$emit('change-date', event.target.id, '04');
        }
    }
}
</script>

<style scoped>
.calendar-wrapper{
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  gap: 0.4em;
}
.calendar-wrapper button{
  padding: 0.3em;
}
</style>