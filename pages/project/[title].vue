<template>
  <div
    aria-hidden
    class="Project-background"
    :style="{ background: project?.color, opacity: 0.1 }"
  ></div>
  <article id="maincontent" class="Project">
    <header class="Project-header">
      <nuxt-img
        class="Project-headerImage"
        :src="project?.headerImage"
        :alt="project?.headerImageAlt"
        sizes="md:500px sm:300px xsm:250px"
      />
      {{ project?.title }}
    </header>
    <div class="Project-content"></div>
  </article>
</template>

<script setup lang="ts">
// Example SVG: import SvgBack from "~/assets/images/arrow-back.svg?component";
import { useProjectStore } from "~/stores/project";

definePageMeta({
  layout: "default",
});
const projectStore = useProjectStore();
const route = useRoute();

console.log(route.params.title);
let title = Array.isArray(route.params.title)
  ? route.params.title[0]
  : route.params.title;
const project = projectStore.getProject(title.toLowerCase());
console.log("Hello!", project);
if (!project?.id) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
}

// Get all projects
const projects = projectStore.getProjects;

onMounted(() => {
  // Animations n shit
});
</script>

<style lang="scss" scoped>
.Project {
  padding: 2rem 3rem 4rem;

  @include breakpoint(medium) {
    padding: 2rem 3rem 4rem;
  }
}

.Project-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  height: calc(800px + 5%);

  z-index: -1;
  overflow: hidden;

  @include breakpoint(small) {
    height: calc(700px + 5%);
  }
  @include breakpoint(xmedium) {
    height: calc(820px + 5%);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-top: 400px solid white;
    border-left: 600px solid transparent;
    width: 0;
    height: 0;

    @include breakpoint(medium) {
      border-top: 600px solid white;
      border-left: 600px solid transparent;
    }
  }
}

.Project-header {
  display: block;

  @include breakpoint(medium) {
    justify-content: flex-end;
  }
  @include breakpoint(xmedium) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
  }
  .Project-headerImage {
    width: 100vw;
    height: 100%;
    object-fit: cover;
    margin: 4rem 0 2rem;

    @include breakpoint(medium) {
      width: 500px;
      height: 100%;
      margin: 4rem auto 2rem;
    }
    @include breakpoint(xmedium) {
      margin: 4rem 0;
    }
  }
}
.Project-imageSpot {
  width: 100%;
  height: 400px;
  margin: 2rem 0;
  object-fit: contain;
}
.Project-textBlock {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
}
.Project-title {
  font-family: "Raleway";
  font-weight: 900;
  font-size: 3rem;
  font-size: clamp(3rem, 2.142857142857143rem + 4.285714285714286vw, 6rem);
  line-height: clamp(3rem, 2.1428571429rem + 4.2857142857vw, 6rem);

  text-align: left;
  margin-bottom: 1rem;

  @include breakpoint(medium) {
    text-align: right;
  }
}
.Project-paragraph {
  white-space: pre-line;
  opacity: 0;
  transition: all 0.8s ease-out;
}
.Project-content {
  max-width: 580px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;

  @include breakpoint(medium) {
    margin: 0 auto;
  }

  p,
  img {
    padding-left: 0;
    @include breakpoint(medium) {
      padding-left: 15%;
    }
    @include breakpoint(xlarge) {
      padding-left: 0;
    }
  }
}
.Project-subTitle {
  font-family: "Raleway";
  font-weight: 900;
  font-size: 2rem;
  margin: clamp(5rem, 3.5714285714285716rem + 7.142857142857142vw, 10rem) 0
    clamp(4rem, 3.428571428571429rem + 2.857142857142857vw, 6rem);
  opacity: 0; /* Initially, the subtitles will be invisible */
  transition: all 0.5s ease-out; /* Transition effect for the animation */
  transform: translateY(100px);
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    width: calc($triangle-width/2.5);
    height: calc($triangle-height/2.5);
    overflow: hidden;
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
    background-color: $c-primary-light;
    transform: translate(32px, -34px);
    transition: all 0.2s ease-in-out;
    opacity: inherit;
  }
  &:first-of-type {
    @include breakpoint(xmedium) {
      margin: 6rem 0
        clamp(4rem, 3.428571428571429rem + 2.857142857142857vw, 6rem);
    }
    &::before {
      transform: translate(-40px, -34px) rotate(180deg);
    }
  }
  &:nth-of-type(2) {
    &::before {
      transform: translate(90px, -34px);
    }
  }
  &:nth-of-type(3) {
    &::before {
      transform: translate(50px, -58px) rotate(160deg);
    }
  }
  &:nth-of-type(4) {
    &::before {
      transform: translate(50px, -48px) rotate(90deg);
    }
  }
}
.animate-in {
  opacity: 1; /* When the animate-in class is added, the subtitles will become visible */
  transform: translateY(0px);
}
.Project-buttonContainer {
  display: flex;
  justify-content: center;
  column-gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  row-gap: 2rem;
  .Button:last-child {
    background-color: $c-primary;
    color: $c-white;
  }
}
.Project-back {
  text-align: left;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: $c-black;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;
  padding-bottom: 1rem;

  &:hover {
    color: $c-primary;
  }
  svg {
    width: 25px;
    height: auto;
    margin-right: 5px;
  }
}
</style>
