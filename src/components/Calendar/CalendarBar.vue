<template>
  <div class="calendar-wrapper">
    <img
      src="@/assets/icons/left-arrow.png"
      style="width:30px"
      @click="onDateScroll('sub')"
    >
    <CalendarTile
      v-for="(item,idx) in timestamps"
      :key="item"
      :timestamp="timestamps[idx]"
      :active="activetimestamp"
      @on-click="onDateChange"
    />
    <img
      src="@/assets/icons/right-arrow.png"
      style="width:30px"
      @click="onDateScroll('add')"
    >
  </div>
</template>

<script>
import CalendarTile from '../Calendar/CalendarTile.vue';
const DAY_TIMESTAMP = 86400000 //ms
export default {
    components: { CalendarTile },
    emits: ['change-date'],
    data() {
        return {
            startDay: new Date().toISOString().slice(0, 10),
            daysInARow: 7,
            timestamps:[],
            activetimestamp:'',
            daysToCompare:['SUN','MON','TUE','WED','THU','FRI','SAT']
        };
    },
    created(){
        let curDate = new Date(this.startDay);
        const timestampsTemp=[]
        for(let step = 0;step<this.daysInARow;step++){
            timestampsTemp.push(curDate.getTime())
            curDate.setDate(curDate.getDate()+1)
        }
        this.timestamps=timestampsTemp
        this.activetimestamp=curDate.setHours(0,0,0,0)
    },
    methods: {
        onDateChange(time) {
            this.$emit('change-date', time);
            this.activetimestamp=time
        },
        onDateScroll(direction){
            const newDatesTimestamps = this.timestamps.map(el=>{
                if(direction==='add'){
                    let tmpTimestamp = el+(DAY_TIMESTAMP*7);
                    return new Date(tmpTimestamp).getTime()
                }
                else{
                    let tmpTimestamp = el-(DAY_TIMESTAMP*7);
                    return new Date(tmpTimestamp).getTime()
                }
                
            })
            this.timestamps=newDatesTimestamps
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