<template>
  <PageHeader title="Projects" />
  <section id="maincontent">
    <section class="ProjectContainer">
      <div
        v-for="project in projects"
        :key="project.id"
        class="ProjectItem"
        :aria-label="`Open the ${project.title} project`"
        tabindex="0"
      >
        <NuxtLink :to="`project/${project.title.toLowerCase()}`">
          <nuxt-img
            class="Project-headerImage"
            :src="project?.headerImage"
            :alt="project?.headerImageAlt"
            sizes="md:500px sm:300px xsm:250px"
          />
          <div class="ProjectItem-button">
            <SvgArrowDownRight />
            {{ project.title }}
          </div>
        </NuxtLink>
      </div>
    </section>
  </section>
  <div class="MobileFooter">
    <SocialFooter />
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from "~/stores/project";
import SvgArrowDownRight from "~/assets/icons/arrow-down-right.svg?component";

definePageMeta({
  layout: "default",
  title: "Home",
});

const projectStore = useProjectStore();
const projects = projectStore.projects;
</script>

<style lang="scss">
#maincontent {
  margin-left: 0px;
  padding: 30px 30px 60px;

  @include breakpoint(medium) {
    padding: 60px 30px;
    margin-left: 350px;
  }
}
.ProjectContainer {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  row-gap: 1rem;

  @include breakpoint(medium) {
    grid-template-columns: 1fr 1fr;
  }
  .ProjectItem {
    cursor: pointer;
    img {
      width: 100%;
    }
    a {
      text-decoration: none;
      color: $c-black;
    }
    .ProjectItem-button {
      margin: 10px 0 20px;
      display: flex;

      @include breakpoint(medium) {
        display: none;
      }

      svg {
        margin-top: -1px;
      }
    }
  }
}

.MobileFooter {
  display: block;

  footer {
    text-align: center;
    padding-bottom: 5rem;
    .Socials {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
    }
  }
  @include breakpoint(medium) {
    display: none;
  }
}
</style>
