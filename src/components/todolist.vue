<script setup>

import {ref, vModelCheckbox} from 'vue'

let y = ref(false)
let input = ref('')
let count = ref(0)
const tasks = ref([])


function addElement() {
  tasks.value.push({title: input.value})
  input.value = ''
}

function deleteAfterFinish(index, event) {
  const isChecked = event.target.checked

  if (isChecked) {
    tasks.value[index].title = ''
    tasks.value.splice(index, 1)
  }
}

//@ToDo
//look how a v-if actually behaves and works & look into v-model computing etc..
//afterwards, implement drag and drop function.
//after the drag and drop make plus for adding entries, deleting etc...
</script>

<template>
  <form @submit.prevent="addElement"> <!--prevents to submit the form probably without text -->
    <label>Add Task:</label>
    <input v-model="input" placeholder="Bitte eingeben" class="border border-full ml-1 mt-1">
  </form>
  <br>
  <label for="myCheckbox" v-for="(task,index) in tasks" :key="index">
    <input type="checkbox" class="" draggable="true" @change="" v-model="tasks[index].done">
    {{ task.title }}
    <br>
  </label>
</template>
<style scoped>
</style>