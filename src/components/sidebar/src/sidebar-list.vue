<template>
  <div class="menu-list">
    <div class="menu-header">{{ header }}</div>
    <template v-for="item in list">
      <SidebarItem
        :item="item"
        :current="current"
        :expand="expand"
        @nodeSelect="selectItem"
        @nodeExpand="expandItem"
      ></SidebarItem>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue'
import { ISidebarList } from '../../types'
import SidebarItem from './sidebar-item.vue'

export default defineComponent({
  name: 'SidebarList',
  components: {
    SidebarItem,
  },
  props: {
    header: {
      type: String,
      required: true,
    },
    list: {
      type: Array as PropType<ISidebarList[]>,
      required: true,
    },
  },
  emits: ['select-item'],
  setup() {
    const state = reactive({
      current: [] as string[],
      expand: [] as string[],
    })
    const selectItem = (items: string[]) => {
      state.current = items
    }
    const expandItem = (items: string[]) => {
      if (items.length > 0) {
        const index = state.expand.indexOf(items[items.length - 1])
        if (index != -1) {
          state.expand.splice(index, 1)
          return
        }
      }
      state.expand = items
    }
    return { ...toRefs(state), selectItem, expandItem }
  },
})
</script>

<style lang="scss"></style>
