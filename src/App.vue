<script setup>
</script>

<template>
  <component :is="$route.meta.layout">
    <RouterView />
  </component>
</template>