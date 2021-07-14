<template>
  <div
    :class="[
      'menu-item',
      hasSub ? 'has-sub' : null,
      current.indexOf(item.name) != -1 ? 'active' : null,
      expand.indexOf(item.name) != -1 ? 'expand' : null,
    ]"
  >
    <div class="menu-link" @click.stop="itemClick">
      <div class="menu-icon" v-if="item.icon">
        <i class="iconfont" :class="item.icon"></i>
      </div>
      <div class="menu-text">
        {{ item.title }}
      </div>
      <div class="menu-caret" v-if="hasSub"></div>
    </div>
    <div class="menu-submenu" v-if="hasSub">
      <template v-for="child in item.children">
        <SidebarItem
          :item="child"
          :current="current"
          :expand="expand"
          @nodeSelect="selectItem"
          @nodeExpand="expandItem"
        ></SidebarItem>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive, toRefs } from 'vue'
import { ISidebarList } from '../../types'

export default defineComponent({
  name: 'SidebarItem',
  props: {
    item: {
      type: Object as PropType<ISidebarList>,
      required: true,
    },
    current: {
      type: Array,
      required: false,
    },
    expand: {
      type: Array,
      required: false,
    },
  },
  emits: ['nodeSelect', 'nodeExpand'],
  setup(props, ctx) {
    const state = reactive({})
    const hasSub = computed(() => {
      return props.item.children && props.item.children.length > 0
    })

    const selectItem = (items: string[]) => {
      ctx.emit('nodeSelect', [props.item.name, ...items])
    }
    const expandItem = (items: string[]) => {
      ctx.emit('nodeExpand', [props.item.name, ...items])
    }

    const itemClick = () => {
      if (props.item.children && props.item.children.length > 0) {
        expandItem([])
      } else {
        selectItem([])
      }
    }

    return { ...toRefs(state), itemClick, hasSub, selectItem, expandItem }
  },
})
</script>

<style lang="scss"></style>
