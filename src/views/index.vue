<template>
  <!-- <TodoList></TodoList> -->
  <Sidebar></Sidebar>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '@c/sidebar/index'
import TodoList from '@c/TodoList.vue'
export default defineComponent({
  name: 'Home',
  components: {
    Sidebar,
    TodoList,
  },
})
</script>
