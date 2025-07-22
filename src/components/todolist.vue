<script setup>

import {ref, vModelCheckbox} from 'vue'

let y = ref(false)
let input = ref('')
let count = ref(0)
const tasks = ref([

])
let menuVisible = ref(false)
let menuVisible1 =ref(false)

function addElement() {
  tasks.value.push({title: input.value, done: false})
  input.value = ''
}

function deleteAfterFinish(index, event) {
  const isChecked = event.target.checked

  if (isChecked) {
    tasks.value[index].title = ''
    tasks.value[index].done = 'true'
    tasks.value.splice(index, 1)
  }
}
function windowPrompt(){

  window.prompt('test')


}
//@ToDo
//Implement the delete Function
//Finish Styling
//Implement drag


//implement grey text when checked and maybe start with the draggable thing (without vue library just html, js)
//design the UI
//
</script>
<template>
  <div class="min-h-screen bg-[#F5DEB3]">
    <br>
    <label for="myCheckbox" v-for="(task,index) in tasks" :key="index">
      <input type="checkbox" class="" draggable="true" @change="" v-model="tasks[index].done">
      <span :class="task.done ? 'text-gray-400' : 'text-black'">
      {{task.title}}
    </span>
      <br>
    </label>
    <button type="button" class="bg-blue-500 text-white p-3 rounded-full" @click="menuVisible = !menuVisible">
      Click me
    </button>
    <div v-if="menuVisible" class="absolute bottom-16 right-4 bg-white border shadow-lg p-4 rounded-xl flex flex-col gap-2 " >

      <button class="bg-blue-500 text-white p-3 rounded-full" @click="menuVisible1 = !menuVisible1"> Add Element</button>
      <form @submit.prevent="addElement"> <!--prevents to submit the form probably without text -->
        <label v-if="menuVisible1">Add Task:</label>
        <input  v-if="menuVisible1"  v-model="input" placeholder="Bitte eingeben" class="border border-full ml-1 mt-1">
      </form>

    </div>


  </div>
</template>
<style scoped>
</style>