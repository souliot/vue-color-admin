<template>
  <!-- <TodoList></TodoList> -->
  <Sidebar>
    <SidebarUser :img="img" :title="title" :desc="desc"></SidebarUser>
    <SidebarList :header="header" :list="list"></SidebarList>
    <SidebarFooter></SidebarFooter>
  </Sidebar>
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'
import Sidebar from '@c/sidebar/index'
import TodoList from '@c/TodoList.vue'
import SidebarUser from '@c/sidebar/src/sidebar-user.vue'
import SidebarList from '@c/sidebar/src/sidebar-list.vue'
import SidebarFooter from '@c/sidebar/src/sidebar-footer.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Sidebar,
    TodoList,
    SidebarUser,
    SidebarList,
    SidebarFooter,
  },
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
          icon: 'si-ic_body',
        },
        {
          name: '2',
          title: '银河水滴',
          icon: 'si-ic_list',
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
          icon: 'si-ic_side',
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
      ],
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>
