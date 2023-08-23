<template>
  <div class="Error">
    <h1 v-if="error.statusCode === 404">Sorry, this page doesn't exist</h1>
    <h1 v-else>An error occurred</h1>
    <Button :element="'NuxtLink'" :title="'Back to home'" :to="`/`"></Button>
  </div>
</template>

<script setup lang="ts">
defineProps(["error"]);
</script>

<style lang="scss" scoped>
.Error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: $c-primary-light;
}
.Button {
  margin-top: 32px;
}
h1 {
  font-family: "Raleway", sans-serif;
  font-size: clamp(3rem, 0.7857142857142858rem + 3.571428571428571vw, 4rem);
  text-align: center;
}
</style>
