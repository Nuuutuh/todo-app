<template>
  <nav class="page">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Todo List</router-link>
  </nav>
  <router-view/>
</template>

<style>
.completed-task {
  text-decoration: line-through;
  text-decoration-thickness: 3px;
}
.listoftask {
  position: center;
  border: 1px solid black;
  border-radius: 6px;
  height: 50px;
  width: 1165px;
  background: transparent;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>