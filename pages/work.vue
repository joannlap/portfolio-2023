<template>
  <PageHeader title="Projects" />
  <section id="maincontent">
    <section class="Triangle-container">
      <div
        v-for="project in projects"
        :key="project.id"
        class="Triangle"
        @click="$router.push(`project/${project.title.toLowerCase()}`)"
        :aria-label="`Open the ${project.title} project`"
        tabindex="0"
      >
        <div class="Triangle-inner">
          <div>{{ project?.title }}</div>
        </div>
        <span class="Triangle-button"> Read about {{ project.title }} </span>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
  title: "Projects",
});

import { useProjectStore } from "~/stores/project";
// Example SVG: import SvgRinus from "~/assets/images/rinus.svg?component";

const projectStore = useProjectStore();
const projects = projectStore.projects;
console.log(projects);
onMounted(() => {
  // Animations
});
</script>

<style lang="scss">
.Triangle-container {
  display: grid;
  padding-left: 0;
  grid-template-columns: $triangle-width;
  column-gap: $column-gap;
  margin: 0 auto;
  width: $triangle-width;
  padding-bottom: 100px;

  @include breakpoint(medium) {
    width: calc(2 * $triangle-width + $column-gap);
    grid-template-columns: repeat(2, $triangle-width);
  }

  @include breakpoint(xlarge) {
    transform: scale(1.5);
    transform-origin: top center;
  }
}

.Triangle-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(1, -0.03, 0.83, 0.67);
  background: rgb(224, 229, 234);
  z-index: 2;

  svg {
    position: absolute;
    width: 120px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.Triangle:nth-child(odd):hover .Triangle-inner {
  transform: translateX(100%);
}
.Triangle:nth-child(even):hover .Triangle-inner {
  transform: translateX(-100%);
}
.Triangle-button {
  position: absolute;
  white-space: nowrap;
  font-family: Raleway;
  font-weight: 800;
  color: $c-white;
  z-index: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
}

.animate-in {
  opacity: 1; /* When the animate-in class is added, the triangles will become visible */
  transform: translateY(0px);
}
</style>
