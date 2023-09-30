<template>
  <a href="#maincontent" class="SkipLink">Skip to content</a>
  <!-- <Navigation /> -->
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  title: "[ADMIN] Jo-Ann LAP",
  meta: [
    {
      name: "description",
      content: "CMS of Jo-ann Lap",
    },
    {
      name: "msapplication-TileColor",
      content: "#da532c",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
  ],
  link: [
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});
</script>
<style lang="scss">
.Container {
  width: 100%;
  height: 100%;
  padding-bottom: 200px;
}
.SkipLink {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 10px;
  background-color: $c-black;
  color: $c-white;
  text-decoration: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 1000;
  &:focus {
    opacity: 1;
    top: 0;
    outline: none !important;
    border: 1px solid $c-primary;
  }
}
</style>
