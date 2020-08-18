<template>
  <div id="app" class="container">
    <h1 class='title'>Todos</h1>
    <todo-list />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList/index';

export default {
  name: "App",
  components: {
    TodoList
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body {
	margin: 0;
	padding: 0;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

.title {
  color: #1f4e29;
}
</style>
