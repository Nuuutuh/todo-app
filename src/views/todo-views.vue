<template>
     <div class="about">
    <h1>TO DO LIST</h1>
    <form @submit.prevent="addNewTodo">
      <br /><br />
      <label>WHAT DO YOU WANT TO DO?</label>
      <br /><br />
      <input class="addnewtodo" v-model="newTodo" name="newTodo" autocomplete="off" placeholder="ADD NEW TO DO">
      <button>
        <i class="fa-solid fa-plus fa-beat"></i>
      </button>
    </form>
    <h2>TASK</h2>
    <ul>
      <taskitem 
      ></taskitem>
    </ul>
  </div>
  <wrapper-background>

  </wrapper-background>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTodo } from '@/composables/use-todo';
import taskitem from '@/components/task-item.vue';
import wrapperBackground from '@/components/wrapper-background.vue';

export default defineComponent({
  components: {
    taskitem,
    wrapperBackground,
  },
  setup() {
    const { newTodo, todos, addNewTodo, deleteTodo, editTodo} = useTodo();

    return {
      newTodo,
      todos,
      addNewTodo,
      deleteTodo,
      editTodo,
    };
  },
});
</script>

