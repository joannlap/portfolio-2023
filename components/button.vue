<template>
  <component
    :is="element === 'NuxtLink' ? nl : element"
    :to="url"
    :class="`Button ${color ? color : ''}`"
  >
    {{ title }}
  </component>
</template>

<script setup lang="ts">
defineProps(["url", "title", "element", "color"]);
const nl = defineNuxtLink({});
</script>

<style lang="scss" scoped>
.Button {
  border: none;
  background-color: $c-cta;
  padding: 12px 16px;
  cursor: pointer;
  font-family: "Raleway";
  font-weight: 900;
  color: $c-black;
  text-decoration: none;
  font-size: 20px;
  transition: 0.2s;
  &:hover {
    background-color: $c-primary;
    color: $c-white;
  }

  &.Purple {
    background-color: $c-primary;
    color: $c-white;

    &:hover {
      background-color: $c-black !important;
    }
  }
}
</style>
