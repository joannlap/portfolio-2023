<template>
  <section id="maincontent">
    <section class="HomeContainer">
      <div
        v-for="workItem in work"
        :key="workItem.id"
        class="HomeItem"
        :aria-label="`Open ${workItem.title}`"
        tabindex="0"
      >
        <NuxtLink :to="`work/${workItem.title}`">
          <nuxt-img
            class="HomeImage"
            :src="workItem?.headerImage"
            :alt="workItem?.headerImageAlt"
            sizes="md:500px sm:300px xsm:250px"
          />
          <div class="HomeItem-button">
            <SvgArrowDownRight />
            {{ workItem.title }}
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
import { useWorkStore } from "~/stores/work";
import SvgArrowDownRight from "~/assets/icons/arrow-down-right.svg?component";

definePageMeta({
  layout: "default",
  title: "Home",
});

const workStore = useWorkStore();
const work = workStore.work;
console.log(work);
</script>

<style lang="scss">
.HomeContainer {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  @include breakpoint(small) {
    grid-template-columns: 1fr 1fr;
  }

  @include breakpoint(xmedium) {
    grid-template-columns: 1fr 1fr;
  }
  .HomeItem {
    cursor: pointer;
    img {
      width: 100%;
    }
    a {
      text-decoration: none;
      color: $c-black;
    }
    .HomeItem-button {
      margin: 10px 0 20px;
      display: flex;

      @include breakpoint(xmedium) {
        display: none;
      }

      svg {
        margin-top: -1px;
        min-width: 26px;
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
  @include breakpoint(xmedium) {
    display: none;
  }
}
</style>
