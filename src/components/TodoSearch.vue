<template>
    <input type="text" placeholder="Search todos" class="search-input" />
</template>

<script>
    export default {
        name: 'todo-search',
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