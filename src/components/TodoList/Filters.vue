<template>
  <div class="filters">
    <div
      v-for="filter in filters"
      :key="filter"
      @click="$emit('change', filter)"
      :class="{ active: selected === filter }">
      {{ filter }}
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-filters",
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    filters: { type: Object, required: true },
    selected: { type: String, required: true }
  }
};
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
