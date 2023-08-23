<template>
  <PageHeader title="About" image="/images/about-header.jpg" />
  <section id="maincontent" class="Container">
    <article></article>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
onMounted(() => {
  // Animations n shit
});
</script>

<style lang="scss" scoped>
.Container {
  padding: 0 3rem 8rem;
}
article {
  position: relative;
  max-width: 580px;
  margin: 0 auto;
  padding-top: 0;
}

h2 {
  position: relative;
  opacity: 0;
  transition: all 0.5s ease-out; /* Transition effect for the animation */
  transform: translateY(100px);
}

p {
  opacity: 0;
  transition: all 0.8s ease-in-out;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
}
.animate-in {
  opacity: 1; /* When the animate-in class is added, the subtitles will become visible */
  transform: translateY(0px);
}
h2::before {
  content: "";
  z-index: -1;
  position: absolute;
  width: calc($triangle-width/2.5);
  height: calc($triangle-height/2.5);
  overflow: hidden;
  clip-path: polygon(100% 0, 0 50%, 100% 100%);
  background-color: $c-primary-light;
  transform: translate(32px, -38px);
  transition: all 0.2s ease-in-out;
  opacity: inherit;
}
h2.Rotated::before {
  transform: rotate(160deg) translate(-70px, 45px);
}

@include breakpoint(xmedium) {
  h2:first-of-type {
    position: absolute;
    top: -100px;
    right: 100px;
    margin: 0;
  }
  article {
    padding-top: 64px;
  }
}
</style>
