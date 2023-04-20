<template>
  <div class="calendar-wrapper">
    <img
      src="../assets/icons/left-arrow.png"
      style="width:30px"
      @click="onDateScroll('sub')"
    >
    <CalendarTile
      v-for="(item,idx) in timestamps"
      :key="item"
      :timestamp="timestamps[idx]"
      @on-click="onDateChange"
    />
    <img
      src="../assets/icons/right-arrow.png"
      style="width:30px"
      @click="onDateScroll('add')"
    >
  </div>
</template>

<script>
import CalendarTile from './CalendarTile.vue';
export default {
    components: { CalendarTile },
    emits: ['change-date'],
    data() {
        return {
            startDay: '2023-05-10',
            currentMonth: '05',
            daysInARow: 7,
            timestamps:[],
            daysToCompare:['SUN','MON','TUE','WED','THU','FRI','SAT']
        };
    },
    created(){
        let curDate = new Date(this.startDay)
        const timestampsTemp=[]
        for(let step = 0;step<this.daysInARow;step++){
            timestampsTemp.push(curDate.getTime())
            curDate.setDate(curDate.getDate()+1)
        }
        this.timestamps=timestampsTemp
    },
    methods: {
        onDateChange(time) {
            this.$emit('change-date', time);
        },
        onDateScroll(direction){
            let curDate = new Date(this.startDay);
            if(direction ==='add'){
                curDate.setDate(curDate.getDate() - this.daysInARow)
            }
            this.startDay=curDate
            const timestampsTemp=[]
            for(let step = 0;step<this.daysInARow;step++){
                timestampsTemp.push(curDate.getTime())
                curDate.setDate(curDate.getDate()+1)
            }
            this.timestamps=timestampsTemp
        }
    },
}
</script>

<style scoped>
.calendar-wrapper{
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  gap: 0.4em;
  margin-top: 1em;
}
.calendar-wrapper img{
  margin-bottom: 0.5em;
  cursor: pointer;
  transition: all;
  transition-duration: 200ms;
}
.calendar-wrapper img:hover{
  transform: scale(1.2);
}
.calendar-wrapper button{
  padding: 0.3em;
}
</style>