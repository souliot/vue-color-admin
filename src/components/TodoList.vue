<template>
  <div>
    <input
      type="text"
      v-model="title"
      @keyup.enter="addTodo"
      placeholder="新增列表"
      autocomplete="off"
      autofocus="false"
    />
  </div>
  <div>
    <div v-for="item in todoList">
      <span>{{ item.id }}</span>
      <span>{{ item.title }}</span>
      <span>{{ item.completed }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { ITodoList } from './types'

export default defineComponent({
  setup() {
    const state = reactive({
      todoList: [] as ITodoList[],
      title: '' as string,
    })

    const addTodo = () => {
      const todo: ITodoList = {
        id: state.todoList.length + 1,
        title: state.title,
        completed: false,
      }
      state.title = ''
      state.todoList.push(todo)
    }
    return { ...toRefs(state), addTodo }
  },
})
</script>

<style scoped></style>
