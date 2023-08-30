<template>
  <aside>
    <NuxtLink to="/" class="Logo"><SvgLogo /></NuxtLink>
    <nav class="Navigation">
      <ul>
        <li>
          <NuxtLink to="/about"><SvgArrowDownRight />About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/playground"><SvgArrowDownRight />Playground</NuxtLink>
        </li>
      </ul>
    </nav>
    <nav class="SelectedWork">
      <h2 class="SubHeading">Selected Work</h2>
      <ul>
        <li
          v-for="project in projects"
          :key="project.id"
          :aria-label="`Open the ${project.title} project`"
        >
          <NuxtLink :to="`/project/${project.title.toLowerCase()}`">
            <SvgArrowDownRight />{{ project.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <SocialFooter />
  </aside>
</template>

<script setup lang="ts">
import SvgArrowDownRight from "~/assets/icons/arrow-down-right.svg?component";
import SvgLogo from "~/assets/icons/logo.svg?component";
import { useProjectStore } from "~/stores/project";

const projectStore = useProjectStore();
const projects = projectStore.projects;
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 60px 30px 0;
  left: 0;
  top: 0;
  bottom: 0;

  footer {
    display: none;
  }

  @include breakpoint(medium) {
    position: fixed;
    max-width: 350px;
    padding: 60px 30px;

    footer {
      display: block;
    }
  }
}
.Navigation {
  margin: 35px 0 0;

  @include breakpoint(medium) {
    margin: 35px 0 65px;
  }

  ul {
    display: flex;
    flex-direction: row;
    @include breakpoint(medium) {
      flex-direction: column;
    }
  }
}
.SubHeading {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 1rem;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;

  @include breakpoint(medium) {
    justify-content: flex-start;
    flex-direction: column;
  }
  li {
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
    max-width: 260px;
    margin-right: 10px;

    @include breakpoint(medium) {
      margin-right: 0;
    }

    a {
      color: $c-black;
      text-decoration: none;
      display: flex;
      justify-content: flex-start;
      font-weight: 500;
      svg {
        margin-right: 5px;
        margin-top: -2px;
        min-width: 26px;
        min-height: 26px;

        @include breakpoint(medium) {
          margin-right: 10px;
        }
      }
    }
  }
}
.SelectedWork {
  margin-bottom: auto;
  display: none;
  @include breakpoint(medium) {
    display: block;
  }
}

.Logo {
  display: flex;
  justify-content: center;

  @include breakpoint(medium) {
    justify-content: flex-start;
  }
}
</style>
