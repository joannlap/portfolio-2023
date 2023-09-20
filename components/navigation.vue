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
    <SelectedWork :work="work" />
    <SocialFooter />
  </aside>
</template>

<script setup lang="ts">
import SvgArrowDownRight from "~/assets/icons/arrow-down-right.svg?component";
import SvgLogo from "~/assets/icons/logo.svg?component";
import { useWorkStore } from "~/stores/work";

const workStore = useWorkStore();
const work = workStore.work;
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 60px 30px 0;
  left: 0;
  top: 0;
  bottom: 0;

  footer {
    display: none;
  }

  @include breakpoint(xmedium) {
    position: fixed;
    max-width: 350px;
    padding: 60px 30px;
    align-items: flex-start;

    footer {
      display: block;
    }
  }
}
.Navigation {
  margin: 35px 0 0;

  @include breakpoint(xmedium) {
    margin: 35px 0 65px;
  }

  ul {
    display: flex;
    flex-direction: row;
    @include breakpoint(xmedium) {
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

  @include breakpoint(xmedium) {
    justify-content: flex-start;
    flex-direction: column;
  }
  li {
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
    max-width: 260px;
    margin-right: 10px;

    @include breakpoint(xmedium) {
      margin-right: 0;
    }

    a {
      color: $c-black;
      text-decoration: none;
      display: flex;
      justify-content: flex-start;
      font-weight: 500;
      margin: 0 1rem;
      font-family: "Inter", sans-serif;
      margin: 0 1rem;
      @include breakpoint(xmedium) {
        margin-left: 0;
      }
      svg {
        margin-right: 5px;
        margin-top: -2px;
        min-width: 26px;
        min-height: 26px;
        display: none;

        @include breakpoint(xmedium) {
          display: block;
          margin-right: 10px;
          
        }
      }
    }
    &:hover {
      a {
        color: $c-grey;
      }
    }
  }
}
.SelectedWork {
  margin-bottom: auto;
  display: none;
  @include breakpoint(xmedium) {
    display: block;
  }
}
.Logo {
  min-width: 240px;
  max-width: 300px;
}
</style>
