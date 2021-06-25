<template>
  <li
    :class="[
      item.children && item.children.length > 0 ? 'has-sub' : '',
      item.active ? 'active' : '',
    ]"
  >
    <div class="link" @click="itemClick">
      <span>{{ item.title }}</span>
    </div>
    <ul class="sub-menu" v-if="item.children && item.children.length > 0">
      <template v-for="child in item.children">
        <SidebarItem :item="child"></SidebarItem>
      </template>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import { ISidebarList } from '../../types'

export default defineComponent({
  name: 'SidebarItem',
  props: {
    item: {
      type: Object as PropType<ISidebarList>,
      required: true,
    },
  },
  setup() {
    const itemClick = (e: MouseEvent) => {}
    return { itemClick }
  },
})
</script>

<style lang="scss"></style>
