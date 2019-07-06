<template>
  <div class="home">
    <h1>Home</h1>
    <hr />
    <TodoList />
  </div>
</template>

<script>
import TodoList from "../components/TodoList";

export default {
  components: {
    TodoList
  }
};
</script>
