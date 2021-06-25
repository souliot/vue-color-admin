<template>
  <div class="sidebar">
    <SidebarUser :img="img" :title="title" :desc="desc"></SidebarUser>
    <SidebarList :header="header" :list="list"></SidebarList>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import SidebarUser from './sidebar-user.vue'
import SidebarList from './sidebar-list.vue'
import { ISidebarList } from '../../types'

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
          title: '银河水滴',
          children: [
            {
              title: '银河水滴',
            },
            {
              title: '银河水滴',
            },
            {
              title: '银河水滴',
            },
            {
              title: '银河水滴',
            },
          ],
        },
        {
          title: '银河水滴',
          children: [
            {
              title: '银河水滴',
            },
            {
              title: '银河水滴',
            },
            {
              title: '银河水滴',
            },
            {
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

<style lang="scss">
.sidebar {
  font-size: 12px;
  position: fixed;
  background-color: #2d353c;
  width: 220px;
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  .link {
    cursor: pointer;
  }
  .nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    li {
      position: relative;
      display: block;
      .link {
        position: relative;
        display: block;
        padding: 8px 20px;
        line-height: 20px;
        color: #a8acb1;
        &:focus,
        &:hover {
          background: #232a2f;
          color: #a8acb1;
        }
      }
    }
    li.nav-profile {
      padding: 20px;
      color: #fff;
      background-color: #1a2229;
      .image {
        float: left;
        width: 34px;
        height: 34px;
        margin-top: 2px;
        margin-right: 15px;
        overflow: hidden;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        cursor: pointer;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      .info {
        font-size: 14px;
        .desc {
          font-size: 85%;
          color: #889097;
        }
      }
    }
    .nav-header {
      margin: 0;
      padding: 10px 20px;
      line-height: 20px;
      font-size: 11px;
      color: #6d7983;
    }
    .sub-menu {
      list-style: none;
      padding: 10px 0 10px 30px;
      margin: 0;
      background: #1a2229;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 28px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: #10181f;
      }
      li {
        .link {
          padding: 5px 18px;
          display: block;
          font-weight: 300;
          color: #889097;
          text-decoration: none;
          position: relative;
          &:focus,
          &:hover {
            color: #fff;
            background: inherit;
          }
          &::before {
            content: '';
            position: absolute;
            // color: #889097;
            width: 12px;
            height: 12px;
            left: 0;
            top: 50%;
            margin-left: -7px;
            margin-top: -6px;
            border: 2px solid #889097;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
a:link {
  text-decoration: none;
}
*::before,
*::after {
  box-sizing: border-box;
}
</style>
