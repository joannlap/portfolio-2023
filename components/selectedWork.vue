<template>
  <nav class="SelectedWork">
    <h2 class="SubHeading">Selected Work</h2>
    <ul>
      <li
        v-for="workItem in work"
        :key="workItem.id"
        :aria-label="`Open ${workItem.title}`"
      >
        <NuxtLink :to="`/work/${workItem.title.toLowerCase()}`">
          <SvgArrowDownRight />{{ workItem.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
// import SvgArrowDownRight from "~/assets/icons/arrow-down-right.svg?component";
const props = defineProps<{
  work: {
    id: number;
    title: string;
  }[];
}>();
const work = props.work;
</script>

<style lang="scss" scoped>
.SubHeading {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @include breakpoint(xmedium) {
    justify-content: flex-start;
    flex-direction: column;
  }
  li {
    margin: 0;
    padding: 0;
    margin-bottom: 0.5rem;
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
      font-size: 14px;
      // svg {
      //   margin-right: 5px;
      //   margin-top: -2px;
      //   min-width: 26px;
      //   min-height: 26px;

      //   @include breakpoint(xmedium) {
      //     margin-right: 10px;
      //   }
      // }
    }
    &:hover {
      a {
        color: $c-grey;
      }
    }
  }
}
.SelectedWork {
  margin-bottom: 5rem;
  display: none;
  @include breakpoint(xmedium) {
    display: block;
  }
}
</style>
