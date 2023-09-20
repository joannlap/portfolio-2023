<template>
  <section id="maincontent" class="Container">
    <nuxt-img
      v-for="image in playground.images"
      key="image"
      class="PlaygroundImage Image"
      :src="image.src"
      :alt="image.alt"
      @click="modalStore.setLink(image.src)"
    />
  </section>
  <ImageModal v-if="modalStore.getLink" />
</template>

<script setup lang="ts">
import { useModalStore } from "~/stores/modal";
const modalStore = useModalStore();

const playground = {
  images: [
    {
      src: "/images/playground/appa.jpg",
      alt: "An illustration of Appa, the character of Avatar the Last Airbender",
    },
    {
      src: "/images/playground/DISNEY.jpg",
      alt: "An illustration of Disney Pin",
    },
    {
      src: "/images/playground/ramen.jpg",
      alt: "An illustration of an asian dish",
    },
    {
      src: "/images/playground/theOrphans.jpg",
      alt: "An 3D model of my work name, Joann Lap",
    },
    {
      src: "/images/playground/inflation.jpg",
      alt: "An 3D model of my name, Joann",
    },
    {
      src: "/images/playground/joannlap--round-v4.jpg",
      alt: "An 3D model of my name, Joann",
    },

    {
      src: "/images/playground/customs-kirby.jpg",
      alt: "An 3D model of my work name, Joann Lap",
    },
    {
      src: "/images/playground/custom-kirby-1.jpg",
      alt: "An 3D model of my work name, Joann Lap",
    },
    {
      src: "/images/playground/dragonball-1.jpg",
      alt: "An 3D model of my work name, Joann Lap",
    },
    {
      src: "/images/playground/dragonball-2.jpg",
      alt: "An 3D model of my work name, Joann Lap",
    },
  ],
};
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
  aspect-ratio: 1/1;
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
    cursor: pointer;
    grid-column: 2/3;
    &:nth-child(even) {
      grid-column: 3/4;
    }
  }
}
</style>
