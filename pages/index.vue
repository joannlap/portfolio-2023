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
          <div class="ImageContainer">
            <nuxt-img
              class="HomeImage"
              :src="workItem?.headerImage"
              :alt="workItem?.headerImageAlt"
              sizes="md:500px sm:300px xsm:250px"
              loading="lazy"
            />
            <div class="ImageHover">
              <h3>{{ workItem?.title }}</h3>
              <div class="ImageHoverBottom">
                <div class="TagGroup">
                  <Tag
                    v-for="tag in workItem?.tags"
                    :key="tag"
                    :tagName="tag"
                  />
                </div>
                <SvgArrowDownRight />
              </div>
            </div>
          </div>
          <div class="HomeItem-button">
            <SvgArrowDownRight />
            {{ workItem?.title }}
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

.ImageContainer {
  position: relative;
}
.HomeItem:hover {
  .ImageHover {
    opacity: 1;
  }
  h3 {
    animation: moveInTop 0.5s ease-out;
    opacity: 0;
  }
  svg {
    animation: moveInBottom 0.5s ease-out;
    opacity: 0;
  }
  .TagGroup .Tag {
    animation: moveInBottom 0.5s ease-out;
    opacity: 0;
    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
  }
}
.ImageHover {
  cursor: pointer;
  padding: 16px;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  color: $c-white;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);

  .TagGroup {
    display: flex;
    flex-direction: row;
    column-gap: 4px;
    > .Tag {
      border: solid 0.5px $c-white;
      opacity: 0;
    }
  }

  h3 {
    opacity: 0;
  }
}
.ImageHoverBottom {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  width: 100%;
  svg {
    opacity: 0;
    path {
      fill: $c-white;
    }
  }
}
@keyframes moveInTop {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes moveInBottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
