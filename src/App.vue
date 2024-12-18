<template>
  <div class="page-wrapper">
    <PagesContainer/>
  </div>


</template>

<script setup lang="ts">
  import PagesContainer from './components/PagesContainer.vue';
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}


</style>
