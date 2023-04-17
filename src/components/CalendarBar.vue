<template>
  <div class="calendar-wrapper">
    <button
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
    </button>
  </div>
</template>

<script>
export default {
    emits:['change-date'],
    data(){
        return
    },
    methods:{
        onDateChange(event){
            this.$emit('change-date',event.target.id,'04')
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
}
.calendar-wrapper button{
  padding: 0.3em;
}
</style>