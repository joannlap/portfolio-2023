<template>
  <div aria-hidden class="Project-background"></div>
  <article id="maincontent" class="Project">
    <header class="Project-header">
      <h1 class="Project-title">{{ project?.title }}</h1>
      <div class="Project-info">
        <div class="Project-data">
          <h2>Client: {{ project?.client }}</h2>
          <h2>Date: {{ project?.date }}</h2>
          <Tag v-for="tag in project?.tags" :key="tag" :tagName="tag" />
        </div>
        <p>
          {{ project?.description }}
        </p>
      </div>
      <nuxt-img
        class="Project-headerImage"
        :src="project?.headerImage"
        :alt="project?.headerImageAlt"
        sizes="md:1000px sm:300px xsm:250px"
      />
      <nuxt-img
        v-for="image in project?.images"
        key="image"
        class="Project-headerImage"
        :src="image"
        alt="#"
      />
    </header>
    <div class="Project-content"></div>
  </article>
</template>

<script setup lang="ts">
import { useProjectStore } from "~/stores/project";

definePageMeta({
  layout: "default",
});
const projectStore = useProjectStore();
const route = useRoute();

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

.Project-header {
  display: block;
  .Project-headerImage {
    width: 100vw;
    height: 100%;
    object-fit: cover;
    margin: 4rem 0 2rem;

    @include breakpoint(medium) {
      width: 100vw;
      max-width: 1100px;
      height: 100%;
      margin: 4rem auto 2rem;
    }
    @include breakpoint(xmedium) {
      margin: 4rem 0;
    }
  }
}

.Project-title {
  font-family: "Inter";
  font-weight: 600;
  font-size: 30px;
  font-size: clamp(3rem, 2.142857142857143rem + 4.285714285714286vw, 6rem);
  line-height: 130%;

  text-align: left;
  margin-bottom: 1rem;

  @include breakpoint(medium) {
    text-align: left;
    font-size: 50px;
  }
}
h2 {
  font-size: 16px;
  text-transform: uppercase;
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
    justify-content: flex-start;
    flex-direction: row;
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

.Project-info {
  display: block;
  @include breakpoint(medium) {
    column-gap: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  p {
    max-width: 540px;
    margin-top: 30px;
    @include breakpoint(medium) {
      margin-top: 0px;
    }
  }
}
</style>
