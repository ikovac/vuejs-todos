<template>
    <div>
        <input type="text" placeholder="What needs to be done?" class="input" v-model="newTodo" @keydown.enter="addTodo">
    </div>
</template>

<script>
export default {
    name: 'todo-input',
    props: {
        'addNewTodo': Function,
    },
    data() {
        return {
            newTodo: ''
        };
    },
    methods: {
        addTodo: function () {
            const value = this.newTodo && this.newTodo.trim();
            if (!value) {
                return;
            }
            this.addNewTodo(value);
            this.newTodo = '';
        },
    }
}
</script>

<style lang="scss" scoped>
.input {
    padding: 10px 20px;
    width: 100%;
    border: none;
    box-shadow: 0 0 3px 1px #b1b1b1;
    &:focus {
        outline: none;
    }
}
</style>