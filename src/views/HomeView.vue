<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <MdEditor :value="result" :handle-change="onChange" />
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue";
import MdEditor from "@/components/MdEditor.vue";
import { ref } from "vue";

const result = ref();

const onChange = (v: string) => {
  console.log(v);
  result.value = v;
};
</script>
