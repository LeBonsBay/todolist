<script setup>

import {ref} from 'vue'

let y = ref(false)

const tasks = [
  {title: 'Finish Project'},
  {title: 'Finish Project'},
  {title: 'Finish Project'},
]
function changeCondition(){
  y = ref(true)

}
//@ToDo
//look how a v-if actually behaves and wors & look into v-model
//afterwards, implement drag and drop function

</script>

<template>
  <label for="myCheckbox" v-for="(task,index) in tasks">
    <input type="checkbox">
    {{task.title}}
    <br>
  </label>


</template>

<style scoped>
</style>