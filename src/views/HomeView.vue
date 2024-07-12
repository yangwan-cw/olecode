<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <MdEditor :value="result" :handle-change="onChange" />
    <CodeEditor />
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue";
import MdEditor from "@/components/MdEditor.vue";
import { ref } from "vue";
import CodeEditor from "@/components/CodeEditor.vue";

const result = ref();

const onChange = (v: string) => {
  console.log(v);
  result.value = v;
};
</script>
