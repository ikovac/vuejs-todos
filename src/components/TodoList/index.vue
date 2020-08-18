<template>
  <div>
    <input class="add-input" @keydown.enter="addNewTodo" v-model.trim="todo"/>
    <div class="filter-container">
      <todo-filters :filters="filters" v-model="filter" />
      <input class="search-input" v-model="searchValue" />
    </div>
    <div class="todos-container">
      <span v-show="!todos.length">No results found.</span>
      <todo-card
        v-for="todo in visibleTodos"
        :key="todo.id"
        @click.native="toogleTodoCheck(todo.id)"
        v-bind="todo"
      />
    </div>
  </div>
</template>

<script>
import TodoCard from "./Card";
import TodoFilters from "./Filters";
import { values as filters, filters as callbacks } from './todoFilters';

export default {
  name: "todo-list",
  data() {
    return {
      todo: '',
      todos: [],
      filter: filters.ALL,
      searchValue: '',
    };
  },
  components: {
    TodoCard,
    TodoFilters,
  },
  computed: {
    filters: () => filters,
    visibleTodos() {
      return !this.searchValue
        ? this.filteredTodos
        : this.filteredTodos.filter((todo) =>
          todo.value.toLowerCase().includes(this.searchValue)
        );
    },
    filteredTodos() {
      if (!callbacks[this.filter]) return this.todos;
      return this.todos.filter(callbacks[this.filter]);
    },
    nextId() {
      return this.todos.reduce((acc, it) => {
        return it.id >= acc ? it.id + 1 : acc;
      }, 1);
    }
  },
  methods: {
    addNewTodo() {
      const { nextId: id, todo: value } = this;
      this.todos.unshift({ id, value });
      this.todo = '';
    },
    toogleTodoCheck(id) {
      const todo = this.todos.find(it => it.id === id);
      if (!todo) return;
      this.$set(todo, 'completed', !todo.completed);
    }
  },
};
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
.add-input {
    padding: 10px 20px;
    width: 100%;
    border: none;
    box-shadow: 0 0 3px 1px #b1b1b1;
    &:focus {
        outline: none;
    }
}
.search-input {
  padding: 10px;
  border: none;
  box-shadow: 0 0 3px 1px #b1b1b1;
  &:focus {
    outline: none;
  }
}
</style>
