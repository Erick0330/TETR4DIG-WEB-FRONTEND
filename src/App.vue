<template>
  <div class="page-wrapper">
    <PagesContainer></PagesContainer>
  </div>
</template>

<script setup lang="ts">
import PagesContainer from "./components/PagesContainer.vue";
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
