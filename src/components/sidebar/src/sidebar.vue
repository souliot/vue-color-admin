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
  .menu-profile {
    padding: 20px;
    color: #fff;
    background-color: #1a2229;
    &-image {
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
    &-info {
      font-size: 14px;
      .desc {
        font-size: 85%;
        color: #889097;
      }
    }
  }
  .menu-list {
    padding-left: 0;
    margin-bottom: 0;
    .menu-header {
      margin: 0;
      padding: 10px 20px;
      line-height: 20px;
      font-size: 11px;
      color: #6d7983;
    }
    .menu-item {
      position: relative;
      display: block;
      &.active > .menu-link {
        color: #fff;
        background: #00acac;
        &:focus,
        &:hover {
          color: #fff;
          background: #00acac;
        }
      }
      .menu-link {
        position: relative;
        display: flex;
        padding: 8px 20px;
        line-height: 20px;
        color: #a8acb1;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: all 0.2s ease-in-out;
        &:focus,
        &:hover {
          background: #232a2f;
          color: #fff;
        }
        .menu-icon {
          width: 14px;
          text-align: center;
          line-height: 20px;
          font-size: 0.875rem;
          display: flex;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          margin-right: 10px;
        }
        .menu-text {
          -webkit-box-flex: 1;
          flex: 1;
        }
        .menu-caret {
          display: block;
          width: 20px;
          text-align: center;
          font-size: 0.6875rem;
          border: none;
          font-family: 'iconfont' !important;
          font-weight: 900;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          margin-left: auto;
          &::before {
            content: '\e700';
            display: block;
            font-size: 20px;
            text-align: center;
            opacity: 0.5;
            transition: all 0.2s linear;
          }
        }
      }
      &.has-sub.expand > .menu-submenu {
        display: block;
      }
      &.has-sub.expand > .menu-link > .menu-caret::before {
        transform: rotate(90deg);
      }
      .menu-submenu {
        padding: 5px 0 10px 39px;
        margin: 0;
        background: #1a2229;
        position: relative;
        display: none;
        .menu-submenu {
          padding: 0 0 0 15px;
        }
        .menu-item {
          &::before {
            content: '';
            position: absolute;
            left: -12px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #10181f;
          }
          &:first-child::before {
            top: -5px;
          }
          .menu-item:first-child::before {
            top: -14px;
          }
          &:last-child::before {
            bottom: auto;
            height: 16px;
          }
          &.active .menu-link {
            background: #1a2229;
          }
          &.active:after {
            border-color: #00acac;
          }
          &::after {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            left: 0;
            top: 11px;
            border: 2px solid #889097;
            border-radius: 50%;
          }
          .menu-link {
            padding: 5px 20px 5px 15px;
            &:focus,
            &:hover {
              color: #fff;
              background: inherit;
            }
            &::after {
              content: '';
              position: absolute;
              width: 11px;
              height: 2px;
              left: -11px;
              top: 14px;
              background: #10181f;
            }
          }
        }
      }
    }
  }
  .menu-footer {
    display: flex;
    .menu-minify-btn {
      margin: 10px 0;
      padding: 5px 20px 5px 10px !important;
      background: #242b30;
      color: #fff;
      border-radius: 20px 0 0 20px;
      margin-left: auto;
      cursor: pointer;
    }
  }
}

.sliedDown {
  animation: sliedDown 1s ease-in-out;
}
@keyframes sliedDown {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}

*::before,
*::after {
  box-sizing: border-box;
}
</style>
