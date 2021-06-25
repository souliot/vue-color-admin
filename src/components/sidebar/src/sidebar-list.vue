<template>
  <ul class="nav">
    <li class="nav-header">{{ header }}</li>
    <template v-for="item in list">
      <SidebarItem :item="item"></SidebarItem>
    </template>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
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
  setup() {
    return {}
  },
})
</script>

<style lang="scss"></style>
