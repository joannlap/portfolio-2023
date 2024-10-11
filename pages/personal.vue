<template>
  <div class="PersonalContainer">
    <section id="maincontent" class="Container">
      <nuxt-img
        v-for="image in personal.images"
        key="image"
        class="PersonalImage Image"
        :src="image.src"
        :alt="image.alt"
        @click="modalStore.setLink(image.src)"
        sizes="md:455px sm:360px xsm:260px"
      />
    </section>
  </div>
  <ImageModal v-if="modalStore.getLink" />
</template>

<script setup lang="ts">
import { useModalStore } from "~/stores/modal";
const modalStore = useModalStore();

const personal = {
  images: [
    {
      src: "/images/personal/appa.webp",
      alt: "An illustration of Appa, the character of Avatar the Last Airbender",
    },
    {
      src: "/images/personal/DISNEY.webp",
      alt: "An illustration of Disney Pin",
    },
    {
      src: "/images/personal/ramen.webp",
      alt: "An illustration of an asian dish",
    },
    {
      src: "/images/personal/theOrphans.webp",
      alt: "An Illustration of my game, the Orphans",
    },
    {
      src: "/images/personal/inflation.webp",
      alt: "A 3D model of my name, Joann",
    },
    {
      src: "/images/personal/joannlap--round-v4.webp",
      alt: "A 3D model of my name, Joann Lap",
    },
    {
      src: "/images/personal/customs-kirby.webp",
      alt: "Kirby Shoe design side 1",
    },
    {
      src: "/images/personal/custom-kirby-1.webp",
      alt: "Kirby Shoe design side 2",
    },
    {
      src: "/images/personal/dragonball-1.webp",
      alt: "Dragonball Shoe design side 1",
    },
    {
      src: "/images/personal/dragonball-2.webp",
      alt: "Dragonball Shoe design side 2",
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
    width: calc(100vw - 350px);
    max-width: 1000px;
    margin: 0 auto;
    grid-template-columns: 1fr;
  }
}
.PersonalContainer {
  margin-left: 0;
  @include breakpoint(xmedium) {
    margin-left: 350px;
  }
}
.PersonalImage {
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
