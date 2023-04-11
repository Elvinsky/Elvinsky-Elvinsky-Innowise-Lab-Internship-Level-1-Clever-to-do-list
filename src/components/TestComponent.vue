<template>
  <section>
    <h1>Testing Firebase</h1>
    <div>
      <div class="buttons">
        <button @click="addItem">
          Add Dummy data
        </button>
        <button>Export Dummy Data</button>
      </div>
    </div>
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
      >
        {{ item.name }} - {{ item.address }}
      </li>
    </ul>
  </section>
</template>

<script>
import {db} from '../firebase.js'
import { getItems,setItem } from '@/utils/utils';
export default{
    data(){
        return{
            items:[]
        }
    },
    mounted(){
        getItems(db).then(items=>this.items=items)
    },
    methods:{
        addItem() {
            setItem(db)
        },
    }
   
}
</script>

<style scoped>
    .buttons{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1em;
    }

    .buttons button{
        background-color: rgba(0, 255, 255, 0.505);
        font-size: 1em;

    }
</style>