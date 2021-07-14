<template>
  <div class="sidebar">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import SidebarUser from './sidebar-user.vue'
import SidebarList from './sidebar-list.vue'
import { ISidebarList } from '../../types'
import './index1.scss'

export default defineComponent({
  name: 'Sidebar',
  components: {
    SidebarUser,
    SidebarList,
  },
  props: {},
  setup: () => {
    const state = reactive({
      img: 'http://wx.qlogo.cn/mmopen/e97Mg1zhZ93GvXkPNQ3HFofGs7P0241ozDVBibZhKWC5zibQn3zuA76qg27Ff6NLEibdarMQian9aXQcjia91b9j5wuWiaaYkbxZDp/0',
      title: 'Admin',
      desc: '系统管理员',
      header: '项目列表',
      list: [
        {
          name: '1',
          title: '银河水滴',
        },
        {
          name: '2',
          title: '银河水滴',
          children: [
            {
              name: '2-1',
              title: '银河水滴',
            },
            {
              name: '2-2',
              title: '银河水滴',
              children: [
                {
                  name: '2-2-1',
                  title: '银河水滴',
                },
                {
                  name: '2-2-2',
                  title: '银河水滴',
                },
                {
                  name: '2-2-3',
                  title: '银河水滴',
                },
                {
                  name: '2-2-4',
                  title: '银河水滴',
                },
              ],
            },
            {
              name: '2-3',
              title: '银河水滴',
            },
            {
              name: '2-4',
              title: '银河水滴',
            },
          ],
        },
        {
          name: '3',
          title: '银河水滴',
          children: [
            {
              name: '3-1',
              title: '银河水滴',
            },
            {
              name: '3-2',
              title: '银河水滴',
            },
            {
              name: '3-3',
              title: '银河水滴',
            },
            {
              name: '3-4',
              title: '银河水滴',
            },
          ],
        },
      ] as ISidebarList[],
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss"></style>
