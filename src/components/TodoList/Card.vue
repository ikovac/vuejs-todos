<template>
  <div
    class="todo"
    :class="{ completed }">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "todo-card",
  props: {
    completed: { type: Boolean, default: false },
    value: { type: String, required: true }
  },
};
</script>

<style lang="scss" scoped>
.todo {
  padding: 10px;
  border-bottom: 1px solid #dadada;
  color: #7d7d7d;

  &:hover {
    color: #333;
    cursor: pointer;
  }

  &.completed {
    text-decoration: line-through;
    color: #fb7b7b;
  }
}
</style>
