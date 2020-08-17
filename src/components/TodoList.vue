<template>
    <div>
        <todo-input :addNewTodo='addNewTodo' />
        <div class="filter-container">
            <todo-filters @change="onFilterChange" />
            <todo-search />
        </div>
        <div class="todos-container" v-if="todos.length">
            <todo v-for="todo in getTodos" :key="todo.id" :todo='todo' :toogleTodoCheck='toogleTodoCheck' />
        </div>
    </div>
</template>

<script>
import TodoInput from '@/components/TodoInput';
import Todo from '@/components/Todo';
import TodoSearch from '@/components/TodoSearch.vue';
import TodoFilters from '@/components/TodoFilters.vue';

export default {
    name: 'todo-list',
    data() {
        return {
            id: 0,
            todos: [],
            filteredTodos: [],
            filter: 'all',
        };
    },
    components: {
        TodoInput,
        Todo,
        TodoSearch,
        TodoFilters,
    },
    computed: {
        getTodos() {
            switch (this.filter) {
                case 'all':
                    this.filteredTodos = this.todos;
                    break;
                case 'completed':
                    this.filteredTodos = this.todos.filter(todo => !!todo.status);
                    break;
                default:
                    break;
            }
            return this.filteredTodos;
        }
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
        onFilterChange(filter) {
            this.filter = filter;
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
.filter-container {
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;
}
</style>