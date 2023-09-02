<template>
  <section id="maincontent" class="Container">
    <nuxt-img
      v-for="image in playground.images"
      key="image"
      class="PlaygroundImage Image"
      :src="image.src"
      :alt="image.alt"
    />
  </section>
</template>

<script setup lang="ts">
const playground = {
  images: [
    {
      src: "/images/playground/appa.jpg",
      alt: "An illustration of Appa, the character of Avatar the Last Airbender",
    },
    {
      src: "/images/playground/pin.jpg",
      alt: "An illustration of Disney Pin",
    },
    {
      src: "/images/playground/asianfood.jpg",
      alt: "An illustration of an asian dish",
    },
    {
      src: "/images/playground/joann.jpg",
      alt: "An 3D model of my name, Joann",
    },
    {
      src: "/images/playground/joannlap.jpg",
      alt: "An 3D model of my name, Joann",
    },
    {
      src: "/images/playground/theorphans.jpg",
      alt: "An 3D model of my work name, Joann Lap",
    },
    {
      src: "/images/playground/sketch.jpg",
      alt: "An 3D model of my work name, Joann Lap",
    },
    {
      src: "/images/playground/shoe2.jpg",
      alt: "An 3D model of my work name, Joann Lap",
    },
    {
      src: "/images/playground/shoe1.jpg",
      alt: "An 3D model of my work name, Joann Lap",
    },
    {
      src: "/images/playground/right-inside.jpg",
      alt: "An 3D model of my work name, Joann Lap",
    },
    {
      src: "/images/playground/right-outside.jpg",
      alt: "An 3D model of my work name, Joann Lap",
    },
  ],
};

onMounted(() => {
  // Animations n shit
});
</script>

<style lang="scss" scoped>
#maincontent.Container {
  display: grid;
  column-gap: 15px;
  row-gap: 15px;
  width: 100%;
  margin-left: 0;
  grid-template-columns: 1fr;

  @include breakpoint(medium) {
    grid-template-columns: 1fr 1fr;
  }
  @include breakpoint(xmedium) {
    grid-template-columns: 350px 1fr 1fr;
  }
}
.PlaygroundImage {
  object-fit: cover;
  height: 100%;
  width: 100%;
  grid-column: 1/-1;
  margin: 0;
  &:nth-child(even) {
    grid-column: 1/-1;
  }

  @include breakpoint(medium) {
    grid-column: 1/2;
    &:nth-child(even) {
      grid-column: 2/3;
    }
  }
  @include breakpoint(xmedium) {
    grid-column: 2/3;
    &:nth-child(even) {
      grid-column: 3/4;
    }
  }
}
</style>
