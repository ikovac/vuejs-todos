<template>
    <div class="filters">
        <div @click="onFilterClick('all')" :class="selectedFilter === 'all' ? 'active' : ''">All</div>
        <div @click="onFilterClick('completed')" :class="selectedFilter === 'completed' ? 'active' : ''">Completed</div>
    </div>
</template>

<script>
    export default {
        name: 'todo-filters',
        data() {
            return {
                selectedFilter: 'all'
            }
        },
        methods: {
            onFilterClick(filter) {
                this.selectedFilter = filter;
                this.$emit('change', filter);
            }
        },
    }
</script>

<style lang="scss" scoped>
.filters {
    display: flex;
    align-items: center;
    > div {
        &:first-child {
            margin-right: 10px;
            padding-right: 10px;
            border-right: 1px solid black;
        }
        &:last-child {
            margin-right: 15px;
        }
        &.active {
            text-decoration: underline;
        }
        &:hover {
            cursor: pointer;
        }
    }
}
</style>