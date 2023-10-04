<template>
  <section>
    <div class="field">
      <h2>Title</h2>
      <input type="text" v-model="title" />
    </div>
    <div class="field">
      <h2>Description</h2>
      <textarea v-model="description" />
    </div>
    <div class="field">
      <h2>Client</h2>
      <input type="text" v-model="client" />
    </div>
    <div class="field">
      <h2>Date</h2>
      <input type="text" v-model="date" />
    </div>
    <div class="field">
      <h2>Tags</h2>
      <div v-for="(tag, index) in tags" :key="`${index}-tag`">
        <input type="text" :value="tag" />
        <button>Delete</button>
      </div>
      <button>Add</button>
    </div>
    <div class="field">
      <button @click="updateLayout('mobile')">Mobile</button>
      <button @click="updateLayout('desktop')">Desktop</button>
    </div>
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
            v-if="media?.[calculateImageIndex(rows, rowIndex, colIndex)]?.mp4"
          >
            <video
              controls
              provider="cloudinary"
              :poster="
                createCloudinaryURL(
                  media?.[calculateImageIndex(rows, rowIndex, colIndex)]?.cover
                )
              "
            >
              <source
                :src="
                  createCloudinaryURL(
                    media?.[calculateImageIndex(rows, rowIndex, colIndex)]?.webm
                  )
                "
                type="video/webm"
              />
              <source
                :src="
                  createCloudinaryURL(
                    media?.[calculateImageIndex(rows, rowIndex, colIndex)]?.mp4
                  )
                "
                type="video/mp4"
              />
              Browser does not support video tag
            </video>
          </div>
          <nuxt-img
            v-if="
              !media?.[calculateImageIndex(rows, rowIndex, colIndex)]?.cover
            "
            provider="cloudinary"
            :src="
              media?.[calculateImageIndex(rows, rowIndex, colIndex)].image || ''
            "
            :alt="'Project ' + title + ' Afbeelding'"
          />
          <div
            class="column-add"
            @click="addItem(calculateImageIndex(rows, rowIndex, colIndex))"
          >
            Add item
          </div>
          <div class="column-replace">Replace item</div>
          <div class="column-remove"><SvgClose /> Remove item</div>
        </div>
        <div class="row-below">Add row below</div>
        <div class="row-above">Add row above</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useWorkStore } from "~/stores/work";
import SvgClose from "~/assets/icons/close.svg?component";
import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({
  cloud: {
    cloudName: "dkz244x00",
  },
});

// import { v2 as cloudinary } from "cloudinary";

type MediaElement = {
  mp4: string;
  webm: string;
  cover: string;
  image: string;
};

type Work = {
  title: string;
  description: string;
  client: string;
  date: string;
  tags: string[];
  images: MediaElement[];
  mobileLayout: string;
  desktopLayout: string;
};
const workStore = useWorkStore(); // Initialize the store
definePageMeta({
  title: "CMS",
  layout: "admin",
  middleware: ["auth"],
});

const route = useRoute();

// Your Component Code
let id = route.params.id;
let title: Ref<string> = ref("");
let description: Ref<string> = ref("");
let client: Ref<string> = ref("");
let date: Ref<string> = ref("");
let mobileLayout: Ref<string> = ref("");
let desktopLayout: Ref<string> = ref("");
let tags: Ref<string[]> = ref([]);
let media: Ref<MediaElement[]> = ref([]);
let rows: ComputedRef<string[][]> = computed(() => {
  return currentLayout.value.map((r) =>
    r
      .trim()
      .split(" ")
      .map((c) => c.trim())
  );
});

// const removeImage = (image) => {
//   cloudinary.v2.api
//     .delete_resources([image], { type: "upload", resource_type: "image" })
//     .then(console.log);
// };

// Store the current layout
const currentLayout = ref<string[]>([]);

// Function to update layout based on screen width
const updateLayout = (layout: string) => {
  if (layout === "mobile") {
    // Use mobile layout
    currentLayout.value = mobileLayout.value?.split("/") || [];
  } else {
    // Use desktop layout
    currentLayout.value = desktopLayout.value?.split("/") || [];
  }
};

const calculateImageIndex = (
  rows: string[][] | undefined,
  rowIndex: number,
  colIndex: number
) => {
  if (!rows || !media) return -1;
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
const createCloudinaryURL = (item: string) => {
  return cld.image(item).format("auto").quality("auto").toURL();
};
const addItem = (mediaIndex: number) => {
  console.log(mediaIndex);
};

onMounted(async () => {
  if (workStore.work.length === 0) await workStore.fetchWorks();
  const workItem = workStore.getWorkById(parseInt(id));
  console.log("WorkItem", workItem);
  if (!workItem) navigateTo("/cms/work");

  title.value = workItem[0].title;
  description.value = workItem[0].description;
  client.value = workItem[0].client;
  date.value = workItem[0].date;
  console.log(workItem[0].tags);
  tags.value = workItem[0].tags;
  console.log(tags.value);
  media.value = workItem[0].images;
  console.log(media.value);
  mobileLayout.value = workItem[0].mobileLayout;
  desktopLayout.value = workItem[0].desktopLayout;

  // Initial layout setting
  updateLayout("desktop");

  console.log("rows", rows);
});
</script>

<style lang="scss" scoped>
section > .field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
input,
textarea {
  width: 100%;
}
.Media {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  width: 50vw;
  height: auto;
  flex-wrap: wrap;
  flex: 1;
}
.grid-container {
  display: flex;
  flex-direction: column;
  width: 70%;
}
.row {
  position: relative;
  display: grid;
  column-gap: 1rem;
  margin-bottom: 1rem;
}
.column {
  width: 100%;
  height: auto; // or any desired height
  position: relative;
  img {
    object-fit: cover;
    height: 100%;

    width: 100%;
  }
}

.row-below,
.row-above,
.column-add,
.column-remove,
.column-replace {
  position: absolute;
  z-index: 10;
  display: flex;

  svg {
    width: 25px;
    height: 25px;
  }
}
.row-below {
  bottom: 0;
  right: -8em;
}
.row-above {
  top: 0;
  right: -8em;
}
.column-add {
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  background-color: green;
}
.column-remove {
  top: 0;
  transform: translateY(-50%);
  left: 0;
  background: red;
}
.column-replace {
  top: 0;
  transform: translateY(-50%);
  right: 0;
  background: yellow;
}
.Remove {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: none;
}
</style>
