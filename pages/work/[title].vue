<template>
  <div aria-hidden class="Work-background"></div>
  <section id="maincontent">
    <header class="Work-header">
      <h1 class="Work-title">{{ getWork?.title }}</h1>
      <div class="Work-info">
        <div class="Work-data">
          <h2>
            Client: <span>{{ getWork?.client }}</span>
          </h2>
          <h2>
            Date: <span>{{ getWork?.date }}</span>
          </h2>
          <div class="TagGroup">
            <Tag v-for="tag in getWork?.tags" :key="tag" :tagName="tag" />
          </div>
        </div>
        <p class="Work-paragraph">
          {{ getWork?.description }}
        </p>
      </div>
    </header>
    <div class="grid-container">
      <div
        v-for="(row, rowIndex) in rows"
        :key="`row-${rowIndex}`"
        class="row"
        :style="{
          'grid-template-columns': row.join(' '),
        }"
      >
        <div
          v-for="(col, colIndex) in row"
          :key="`col-${colIndex}`"
          class="column"
        >
          <div
            class="video-container"
            v-if="
              Array.isArray(
                getWork?.images?.[calculateImageIndex(rows, rowIndex, colIndex)]
              )
            "
          >
            <video
              controls
              @play="handlePlay(colIndex)"
              @pause="handlePause(colIndex)"
              :poster="
                getWork?.images?.[
                  calculateImageIndex(rows, rowIndex, colIndex)
                ][1]
              "
            >
              <source
                :src="
                  getWork?.images?.[
                    calculateImageIndex(rows, rowIndex, colIndex)
                  ][0]
                "
                type="video/webm"
              />
              Browser does not support video tag
            </video>
            <div
              class="play-button"
              :data-video-index="colIndex"
              v-if="showPlayButtons[`video-${colIndex}`]"
              @click="playClickedVideo"
            >
              <SvgPlay />
            </div>
          </div>
          <nuxt-img
            v-if="
              !!getWork?.images?.[
                calculateImageIndex(rows, rowIndex, colIndex)
              ] &&
              !Array.isArray(
                getWork?.images?.[calculateImageIndex(rows, rowIndex, colIndex)]
              )
            "
            :src="
              getWork?.images?.[calculateImageIndex(rows, rowIndex, colIndex)] as string | undefined
            "
            :alt="'Project ' + getWork.title + ' Afbeelding'"
          />
        </div>
      </div>
    </div>
  </section>
  <div class="MobileFooter">
    <SelectedWork :work="filteredWork" />
    <SocialFooter />
  </div>
</template>

<script setup lang="ts">
import { useWorkStore } from "~/stores/work";
import animateElement from "~/utils/animateElement";
import SvgPlay from "~/assets/icons/play.svg?component";
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

// New reactive variable to store the current layout
const currentLayout = ref<string[]>([]);

// Function to update layout based on screen width
const updateLayout = () => {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    // Use mobile layout
    currentLayout.value = getWork?.mobileLayout?.split("/") || [];
  } else {
    // Use desktop layout
    currentLayout.value = getWork?.desktopLayout?.split("/") || [];
  }
};

// Initial layout setting
updateLayout();

// Listen for window resize
window.addEventListener("resize", updateLayout);

// Cleanup listener when component unmounts
watchEffect((onInvalidate) => {
  onInvalidate(() => {
    window.removeEventListener("resize", updateLayout);
  });
});
// Updated rows definition
const rows = computed(() => {
  return currentLayout.value.map((r) =>
    r
      .trim()
      .split(" ")
      .map((c) => c.trim())
  );
});
const calculateImageIndex = (
  rows: string[][] | undefined,
  rowIndex: number,
  colIndex: number
) => {
  if (!rows || !getWork?.images) return -1;
  let imageIndex = 0;
  for (let r = 0; r < rows?.length; r++) {
    // Loop through each row
    for (let c = 0; c < rows[r]?.length; c++) {
      // Loop through each column in the current row
      if (r === rowIndex && c === colIndex) {
        // Found the target cell
        return imageIndex; // Return the calculated image index
      }
      imageIndex++; // Increment the image index
    }
  }
  return -1; // If we can't find it for some reason, return an error code (-1)
};

const showPlayButtons = ref<{ [key: string]: boolean }>({});
const numVideos = getWork.images.filter((image) =>
  image[0].endsWith("webm")
).length;
for (let i = 0; i < numVideos; i++) {
  showPlayButtons.value[`video-${i}`] = true;
}
const playClickedVideo = (event: Event) => {
  const playButtonElement = event.target as HTMLElement;
  const videoContainer = playButtonElement?.closest(".video-container");
  const videoElement = videoContainer?.querySelector("video");

  if (videoElement instanceof HTMLVideoElement) {
    videoElement.play();
  }
};

const handlePlay = (index: number) => {
  showPlayButtons.value[`video-${index}`] = false;
};

const handlePause = (index: number) => {
  showPlayButtons.value[`video-${index}`] = true;
};

onMounted(() => {
  const media = document.querySelectorAll("video, img");
  animateElement(media);
});
</script>

<style lang="scss" scoped>
.Work-header {
  display: block;
  max-width: 1000px;
  animation: move-in 0.4s ease forwards;
  opacity: 0;
  transform: translateY(0);
  margin: 0 auto;
}

.row .Image {
  object-fit: cover;
  height: 100%;
  width: 100%;
  margin: 0;
  animation-delay: var(--stagger);

  @include breakpoint(xmedium) {
    margin: 0;
  }
}
h1.Work-title {
  font-family: "Inter";
  font-weight: 600;
  font-size: 30px;
  line-height: 130%;

  text-transform: uppercase;
  text-align: left;
  margin-bottom: 3rem;

  @include breakpoint(xmedium) {
    text-align: left;
    font-size: 50px;
  }
}
h2 {
  font-family: "Inter";
  font-size: 16px;

  span {
    font-weight: 400;
  }
}
.Work-paragraph {
  white-space: pre-line;
  font-size: 14px;
  max-width: 540px;
  margin-top: 30px;
  @include breakpoint(xmedium) {
    margin-top: 0px;
  }
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
}
.Work-data {
  min-width: 300px;
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

.grid-container {
  max-width: 1000px;
  margin: 2rem auto 0;
}
.row {
  display: grid;
  column-gap: 1rem;
  margin-bottom: 1rem;
}
.column {
  width: 100%;
  height: auto; // or any desired height

  img {
    object-fit: cover;
    height: 100%;

    width: 100%;
  }
}
video,
img {
  opacity: 0;
  transition: opacity 0.5s;
}

.video-container {
  position: relative;
}

.video-container video {
  width: 100%;
  height: auto;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em; /* Update based on your design */
  cursor: pointer;
  opacity: 0.7;
}

.animate-in {
  opacity: 1; /* When the animate-in class is added, the subtitles will become visible */
}
</style>
