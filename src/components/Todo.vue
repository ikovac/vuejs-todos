<template>
    <div class="todo" :class="{completed: todo.status}" @click="toogleTodoCheck(todo.id)">
        {{ todo.value }}
    </div>
</template>

<script>
export default {
    name: 'todo',
    props: {
        'todo': Object,
        'toogleTodoCheck': Function,
    },
}
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