<template>
    <div>
        <todo-input :addNewTodo='addNewTodo' />
        <div class="todos-container" v-if="todos.length">
            <todo v-for="todo in todos" :key="todo.id" :todo='todo' :toogleTodoCheck='toogleTodoCheck' />
        </div>
    </div>
</template>

<script>
import TodoInput from '@/components/TodoInput';
import Todo from '@/components/Todo';

export default {
    name: 'todo-list',
    data() {
        return {
            id: 0,
            todos: [],
        };
    },
    components: {
        TodoInput,
        Todo
    },
    methods: {
        addNewTodo: function (value) {
            this.todos.unshift({ id: this.id, value, status: 0 });
            ++this.id;
        },
        toogleTodoCheck: function(id) {
            this.todos = this.todos.map(todo => {
                if (todo.id !== id) return todo;
                return { ...todo, status: !todo.status };
            });
        },
    },
}
</script>


<style lang='scss' scoped>
.todos-container {
    margin-top: 10px;
    box-shadow: 0 0 3px 1px #b1b1b1;
    width: 100%;
}
</style>