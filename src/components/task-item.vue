<template>
  <dl class="taskitem" v-for="(todo, index) in list" :key="index">
    <input class="check" type="checkbox" v-model="todo.completed" />
    <span :class="{ 'completed-task': todo.completed }">{{ todo.text }}</span>
    <button @click="editTodo(index)">
      <i class="fa-solid fa-pen-to-square fa-beat"></i>
    </button>
    <button @click="deleteTodo(index)">
      <i class="fa-solid fa-trash fa-beat"></i>
    </button>
  </dl>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTodo } from '@/composables/use-todo';

export default defineComponent({
  setup() {
    const { todos, list, deleteTodo, editTodo } = useTodo();

    return {
      list,
      todos,
      deleteTodo,
      editTodo,
    };
  },
});
</script>

<style>
.completed-task {
  text-decoration: line-through;
  text-decoration-thickness: 3px;
}
</style>
