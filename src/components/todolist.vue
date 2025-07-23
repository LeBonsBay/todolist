<script setup>

import {ref, } from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import * as byPrefixAndName from "@fortawesome/free-solid-svg-icons";

let y = ref(false)
let input = ref('')
let count = ref(0)
const tasks = ref([])
let menuVisible = ref(false)
let menuVisible1 = ref(false)
let isDelete = ref(true)

function addElement() {


  tasks.value.push({title: input.value, done: false})
  input.value = ''
}

function deleteTask(index) {
  if (isDelete) {
    tasks.value[index].title = ''
    tasks.value.splice(index, 1)
  }
}

//@ToDo
//Implement the delete Function         <FontAwesomeIcon :icon="['fas', 'trash']" />
//Finish Styling
//Implement drag

</script>
<template>
  <div class="min-h-screen bg-[#F5DEB3] p-4 relative font-sans">

    <h1 class="text-2xl font-bold mb-4 text-gray-700">Meine ToDo Liste</h1>

    <!-- Task List -->
    <div v-for="(task, index) in tasks" :key="index" class="flex items-center gap-3 mb-2">
      <input
          type="checkbox"
          v-model="tasks[index].done"
          class="w-5 h-5 accent-green-600"
      />
      <span :class="['flex-1', task.done ? 'text-gray-400 line-through' : 'text-black']">
        {{ task.title }}
              <FontAwesomeIcon :icon="['fas', 'trash']" class="text-red-500 cursor-pointer hover:text-red-700"
                               @click="deleteTask(index)"/>
      </span>

    </div>
    <!-- Floating Add Button -->
    <button
        type="button"
        class="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
        @click="menuVisible = !menuVisible"
    >
      +
    </button>

    <!-- Floating Menu -->
    <div
        v-if="menuVisible"
        class="absolute bottom-24 right-4 bg-white border shadow-lg p-4 rounded-xl w-64 flex flex-col gap-3 transition-all"
    >
      <!-- Add Task Toggle -->
      <button
          class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          @click="menuVisible1 = !menuVisible1"
      >
        Aufgabe hinzufügen
      </button>
      <!-- Add Task Input -->
      <form @submit.prevent="addElement" v-if="menuVisible1" class="flex flex-col gap-2">
        <input
            v-model="input"
            placeholder="New Task..."
            class="border border-gray-300 rounded px-2 py-1"
        />
        <button class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600" v-if="input.trim() !== ''">Hinzufügen</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>