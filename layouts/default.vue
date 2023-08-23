<template>
  <a href="#maincontent" class="SkipLink">Skip to content</a>
  <aside>
    <h1>Joann Lap</h1>
    <nav>
      <ul>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
  </aside>
  <NuxtPage />
  <Footer />
</template>

<script setup lang="ts">
useHead({
  title: "Jo-ann Lap",
  meta: [
    {
      name: "description",
      content: "Portfolio website of Jo-ann Lap",
    },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
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
