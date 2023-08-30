<template>
  <div class="Tag">
    {{ props.tagName }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  tagName: String,
});
</script>

<style lang="scss" scoped>
.Tag {
  width: 100px;
  height: 25px;
  font-size: 12px;
  font-style: italic;
  text-align: center;
  line-height: 192%;
  border: solid 0.5px black;
  border-radius: 50px;
  margin-top: 12px;
}
</style>
