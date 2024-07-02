<template>
  <div id="basic-layout">
    <a-layout style="height: 400px">
      <a-layout-header class="basic-layout-header">
        <BasicHeader />
      </a-layout-header>
      <a-layout-content class="basic-layout-content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="basic-layout-footer">
        <p>oleCode-vue3</p>
        由
        <a href="https://github.com/yangwan-cw">
          <div class="link-my-github">
            ioomex....
            <img
              src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif"
              width="25"
            />
          </div>
        </a>
        所开发
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import BasicHeader from "@/components/BasicHeader.vue";
</script>

<style scoped lang="less">
#basic-layout {
  .basic-layout-content {
    background-color: #009cff;
    margin-bottom: 16px;
  }

  .basic-layout-footer {
    font-size: 16px;
    text-align: center;
    padding: 16px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    a {
      text-decoration: none;
      color: @font-color;
      text-transform: capitalize;
    }

    .link-my-github {
      display: inline-block;
    }

    p {
      display: inline-block;
      //color: #08c161;
      text-transform: capitalize;
    }
  }
}
</style>
