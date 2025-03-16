<template>
  <div class="bg-black text-white w-screen min-h-screen px-10 pt-5">
    <div class="mb-10 sm:mb-15">
      <h1 class="text-5xl sm:text-9xl font-black mb-5">Utility Tools</h1>
      <a
        class="underline"
        href="https://github.com/teerapon19/utility-tools"
        target="_blank"
        >Github</a
      >
    </div>
    <ul class="text-lg sm:text-3xl list-disc list-inside">
      <li v-for="link in links" :key="link.name">
        <a class="underline" :href="link.href">{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    name: "UUID Generator (v4, v7)",
    href: "/uuid-generator",
  },
];
</script>

<style></style>
