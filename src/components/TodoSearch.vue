<template>
    <input :value="value" @input="updateValue" type="text" placeholder="Search todos" class="search-input" />
</template>

<script>
    export default {
        name: 'todo-search',
        props: {
            value: {
                type: String,
                default: ''
            },
        },
        methods: {
            updateValue(event) {
                this.$emit('input', event.target.value);
            }
        },
    }
</script>

<style lang="scss" scoped>
.search-input {
    padding: 10px;
    border: none;
    box-shadow: 0 0 3px 1px #b1b1b1;
    &:focus {
        outline: none;
    }
}
</style>