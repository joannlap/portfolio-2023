<template>
  <div aria-hidden class="Work-background"></div>
  <section id="maincontent">
    <header class="Work-header">
      <h1 class="Work-title">{{ getWork?.title }}</h1>
      <div class="Work-info">
        <div class="Work-data">
          <h2>Client: {{ getWork?.client }}</h2>
          <h2>Date: {{ getWork?.date }}</h2>
          <div class="TagGroup">
            <Tag v-for="tag in getWork?.tags" :key="tag" :tagName="tag" />
          </div>
        </div>
        <p class="Work-paragraph">
          {{ getWork?.description }}
        </p>
      </div>
      
    </header>
    <div class="Work-gallery">
      <nuxt-img
        v-for="image, index in getWork?.images"
        key="image"
        class="Image"
        :style="{ '--stagger': `${index * 0.1}s`}"
        :src="image"
        alt="#"
        loading="lazy"
      />
    </div>
  </section>
  <div class="MobileFooter">
    <SelectedWork :work="filteredWork" />
    <SocialFooter />
  </div>
</template>

<script setup lang="ts">
import { useWorkStore } from "~/stores/work";

definePageMeta({
  layout: "detail",
});
const workStore = useWorkStore();
const route = useRoute();

let title = route.params.title;
const getWork = workStore.getWorkItem(title);

if (!getWork?.id) {
  throw createError({ statusCode: 404, statusMessage: "Work not found" });
}

// Get all work
const work = workStore.getWork;
const filteredWork = work.filter((workItem) => workItem.title !== title);

onMounted(() => {
  // Animations n shit
  document.documentElement.style.setProperty(
    "--grid-size-mobile",
    `${getWork.imageGridSize[0]}`
  );
  document.documentElement.style.setProperty(
    "--grid-size-desktop",
    `${getWork.imageGridSize[1]}`
  );
});
</script>

<style lang="scss" scoped>
:root {
  --grid-size-mobile: 1;
  --grid-size-desktop: 2;
}

.Work-gallery {
  display: grid;
  margin-top: 3rem;
  grid-template-columns: repeat(var(--grid-size-mobile), 1fr);
  column-gap: 15px;
  row-gap: 15px;

  @include breakpoint(xmedium) {
    grid-template-columns: repeat(var(--grid-size-desktop), 1fr);
  }

  .Image {
    object-fit: cover;
    margin: 0;
    animation-delay: var(--stagger);
  }
     
}
.Work-header {
  display: block;
  max-width: 1000px;
  animation: move-in .4s ease forwards;
  opacity: 0;
  transform: translateY(0);
}



h1.Work-title {
  font-family: "Inter";
  font-weight: 600;
  font-size: 30px;
  line-height: 130%;

  text-align: left;
  margin-bottom: 3rem;

  @include breakpoint(xmedium) {
    text-align: left;
    font-size: 50px;
  }
}
h2 {
  font-size: 16px;
  text-transform: uppercase;
}
.Work-paragraph {
  white-space: pre-line;
  font-size: 12px;
}
.Work-content {
  max-width: 580px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;

  @include breakpoint(xmedium) {
    margin: 0 auto;
    justify-content: flex-start;
    flex-direction: row;
  }

  p,
  img {
    padding-left: 0;
    @include breakpoint(xmedium) {
      padding-left: 15%;
    }
    @include breakpoint(xlarge) {
      padding-left: 0;
    }
  }
}

.Work-info {
  display: block;
  @include breakpoint(xmedium) {
    column-gap: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  p {
    max-width: 540px;
    margin-top: 30px;
    @include breakpoint(xmedium) {
      margin-top: 0px;
    }
  }
}
.TagGroup {
  display: flex;
  column-gap: 4px;
  row-gap: 4px;
  flex-wrap: wrap;
  margin-top: 1rem;
  @include breakpoint(xmedium) {
    margin-top: 12px;
  }
}
.MobileFooter {
  display: block;
  padding: 0 20px;
  @include breakpoint(xmedium) {
    padding: 0 3rem;
  }
  footer {
    text-align: center;
    padding-bottom: 5rem;
  }
  .Socials {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  @include breakpoint(xmedium) {
    display: none;
  }
}
.MobileFooter .SelectedWork {
  display: block !important;
  margin-bottom: 2rem;

  ul {
    justify-content: flex-start;
    flex-direction: column;
  }
}

</style>
