<template>
  <section>
    <div class="header-wrapper">
      <div
        class="back-btn"
        @click="goBack"
      >
        &Lt;
      </div>
      <h1 class="title">
        Taskker
      </h1>
    </div>
    <div class="todo-wrapper">
      <h3>{{ todo.name }}</h3>
      <p>{{ todo.content }}</p>
      <div class="button-wrapper">
        <div @click="onDelete">
          Delete
        </div>
        <div @click="handleEditorOpen">
          Edit
        </div>
      </div>
    </div>
    <div
      v-if="modalIsOpen"
      class="edit-modal"
    >
      <div class="edit-window">
        <input
          id="title"
          v-model="title"
          name="title"
        >
        <input
          id="content"
          v-model="content"
          name="content"
        >
        <input
          id="timestamp"
          name="content"
          type="date"
          @change="handleChangeDate($event)"
        >
        <div>
          <div
            class="save-btn"
            @click="handleEdit"
          >
            Save
          </div>
          <div
            class="cancel-btn"
            @click="handleCancel"
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {getItems, deleteItem, updateItem} from '../scripts/dbScripts/crudApi.js'

export default {
    emits:['on-delete'],
    data(){
        return{
            id: this.$route.params.id,
            user: JSON.parse(localStorage.getItem('user')),
            todo:{},
            modalIsOpen:false,

            title:'',
            content:'',
            timestamp:''
        }
    },
    created(){
        getItems(`/users/${this.user.id}/todos/`).then(data=>{
            this.todo=data.find(el=>el.id===this.id)
            this.title=this.todo.name;
            this.content=this.todo.content
            this.timestamp=this.todo.date
        })
    },
    methods:{
        onDelete() {
            deleteItem(`users/${this.user.id}/todos`,this.id).then(()=>this.$router.push('/home'))
        },
        handleEditorOpen(){
            this.modalIsOpen=!this.modalIsOpen
        },
        handleChangeDate(e){
            this.timestamp=e.target.valueAsNumber
        },
        handleEdit(){
            updateItem(`/users/${this.user.id}/todos`,this.todo.id,
                {...this.todo,
                    name:this.title,
                    content:this.content,
                    date:this.timestamp
                }).then(()=>{
                this.modalIsOpen=false
                this.todo={...this.todo,
                    name:this.title,
                    content:this.content,
                    date:this.timestamp
                }
            })
        },
        handleCancel(){
            this.modalIsOpen=false
        },
        goBack(){
            this.$router.push('/home')
        }
    }
}
</script>

<style scoped>
section{
    width: 580px;
    margin: auto;
    padding: 1em;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.405);
    border-radius: 5px;
}
.back-btn{
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.5em;
}
.header-wrapper{
    align-self: start;
    display: flex;
    gap: 1em;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    text-align: center;
}
.todo-wrapper{
    border: 1px;
    padding: 0.7em;
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.button-wrapper{
    display: flex;
    gap: 2em;
}
.button-wrapper div{
    padding: 0.7em;
    background-color: rgba(0, 157, 255, 0.425);
    cursor: pointer;

}
.button-wrapper div:hover{
    background-color: rgba(0, 157, 255, 0.704);
}

.edit-modal{
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
}
.edit-window{
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    justify-content: center;
}
.edit-window input{
    padding: 0.6em;
    font-size: 1em;
    width: 300px;
}
.edit-window div{
    align-self: start;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
}
.save-btn, .cancel-btn{
    padding: 0.6em;
    border-radius: 5px;
    cursor: pointer;
}
.save-btn{
    background-color: rgba(0, 205, 0, 0.604);
    color: white;
}
.cancel-btn{
    background-color: rgba(255, 0, 0, 0.604);
    color: white;

}
</style>