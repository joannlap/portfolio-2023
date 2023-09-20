<template>
  <section id="maincontent">
    <section class="HomeContainer">
      <TransitionGroup name="list" tag="div">
        <div
          v-for="(workItem, index) in work"
          :key="workItem.id"
          class="HomeItem"
          :class="{
            'fade-out': clickedItem !== null && clickedItem !== workItem.id,
            'fade-late': clickedItem !== null && clickedItem === workItem.id,
            'disable-hover': clickedItem !== null,
          }"
          :style="{ '--stagger': `${index * 0.05}s` }"
          :aria-label="`Open ${workItem.title}`"
          tabindex="0"
          @click="handleClick(workItem.id, workItem.title)"
        >
          <!-- <NuxtLink :to="`work/${workItem.title}`"> -->
          <div class="ImageContainer">
            <nuxt-img
              class="HomeImage Image"
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
          <!-- </NuxtLink> -->
        </div>
      </TransitionGroup>
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
  title: "Home",
});
const router = useRouter();
const workStore = useWorkStore();
const work = workStore.work;
// New reactive variable
const clickedItem = ref<number | null>(null);

const handleClick = (id: number, title: string) => {
  clickedItem.value = id;

  setTimeout(() => {
    router.push(`work/${title}`);
  }, (work.length - 1) * 150);
};
</script>

<style lang="scss">
.HomeContainer {
  max-width: 1000px;
  margin: 0 auto;
}
.HomeContainer > div {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  @include breakpoint(small) {
    grid-template-columns: 1fr 1fr;
  }


  .HomeItem {
    cursor: pointer;
    transition: all 1s var(--stagger);
    transform: translateY(0);
    margin-left: 0;
    margin-right: 0;

    img {
      width: 100%;
      margin: 0;
    }
    a {
      text-decoration: none;
      color: $c-black;
    }
    .HomeItem-button {
      margin: 10px 0 20px;
      display: flex;

      font-family: "Inter", sans-serif;
      font-weight: 500;

      @include breakpoint(xmedium) {
        display: none;
      }

      svg {
        margin-top: -1px;
        min-width: 26px;
      }
    }

    &.fade-out {
      transition: opacity .2s var(--stagger) ease;
      opacity: 0;
    }
    &.fade-late {
      transition: opacity 1s .2s ease;
      opacity: 0;
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
    opacity: 0;
    @include breakpoint(xmedium) {
      opacity: 1;
    }
  }
  h3 {
    animation: moveInTop 0.5s ease-out forwards;
    opacity: 0;
  }
  .ImageHoverBottom svg {
    animation: moveInBottom 0.5s ease-out forwards;
    animation-delay: 0.75s;
    opacity: 0;
  }
  .TagGroup .Tag {
    $delay: 0.2;
    animation: moveInBottom 0.5s ease-out forwards;
    opacity: 0;

    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        animation-delay: #{$delay}s;
        $delay: $delay + 0.1;
      }
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
  border-radius: 5px;
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
.disable-hover .ImageHover {
  pointer-events: none;
  /* Add any other styles to disable hover */
  display: none;
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
