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
                createImageCloudinaryURL(
                  media?.[calculateImageIndex(rows, rowIndex, colIndex)]
                    ?.cover ?? ''
                )
              "
            >
              <source
                :src="
                  createVideoCloudinaryURL(
                    media?.[calculateImageIndex(rows, rowIndex, colIndex)]
                      ?.webm ?? ''
                  )
                "
                type="video/webm"
              />
              <source
                :src="
                  createVideoCloudinaryURL(
                    media?.[calculateImageIndex(rows, rowIndex, colIndex)]
                      ?.mp4 ?? ''
                  )
                "
                type="video/mp4"
              />
              Browser does not support video tag
            </video>
          </div>
          <nuxt-img
            v-if="media?.[calculateImageIndex(rows, rowIndex, colIndex)]?.image"
            provider="cloudinary"
            :src="media?.[calculateImageIndex(rows, rowIndex, colIndex)].image"
            :alt="'Project ' + title + ' Afbeelding'"
          />
          <button
            class="column-add"
            @click="
              addItem(calculateImageIndex(rows, rowIndex, colIndex), id, layout)
            "
          >
            <SvgAdd />
          </button>
          <!-- <button class="column-replace" @click="replaceImage()">Replace image</button> -->
          <label
            class="column-fr"
            :for="`fr-${calculateImageIndex(rows, rowIndex, colIndex)}`"
          >
            FR:
            <input
              :id="`fr-${calculateImageIndex(rows, rowIndex, colIndex)}`"
              type="number"
              :value="
                getAtGlobalIndex(
                  currentLayout,
                  calculateImageIndex(rows, rowIndex, colIndex)
                )?.replace('fr', '')
              "
              @keyup.enter="
                (e) =>
                  updateImageSize(
                    e,
                    calculateImageIndex(rows, rowIndex, colIndex)
                  )
              "
            />
          </label>
          <label
            :for="`replace-${calculateImageIndex(rows, rowIndex, colIndex)}`"
            class="column-replace"
          >
            <CldUploadWidget
              v-slot="{ open }"
              uploadPreset="unsigned_bootcamp"
              :onUpload="handleUpload"
            >
              <button type="button" @click="open">Upload an Image</button>
            </CldUploadWidget>
            <!-- <CldUploadButton
              signatureEndpoint="<API Endpoint (ex: /api/sign-cloudinary-params)>"
              >Upload</CldUploadButton
            > -->
            <!-- <input
              :id="`replace-${calculateImageIndex(rows, rowIndex, colIndex)}`"
              type="file"
              name="image"
              accept="image/webm"
              @click="
                (e) =>
                  replaceImage(e, calculateImageIndex(rows, rowIndex, colIndex))
              "
            /> -->
          </label>
          <button
            class="column-remove"
            @click="
              removeItem(calculateImageIndex(rows, rowIndex, colIndex), layout)
            "
          >
            <SvgTrash />
          </button>
        </div>
        <div class="row-below"><SvgArrowDown />Add row below</div>
        <div class="row-above"><SvgArrowUp />Add row above</div>
      </div>
    </div>
    <button @click="saveWorkItem()">saveWorkItem</button>
  </section>
</template>

<script setup lang="ts">
import { useWorkStore } from "~/stores/work";
import SvgTrash from "~/assets/icons/trash.svg?component";
import SvgAdd from "~/assets/icons/add.svg?component";
import SvgArrowUp from "~/assets/icons/arrow-up.svg?component";
import SvgArrowDown from "~/assets/icons/arrow-down.svg?component";
import insertAtGlobalIndex from "~/utils/insertAtGlobalIndex";
import removeAtGlobalIndex from "~/utils/removeAtGlobalIndex";
import getAtGlobalIndex from "~/utils/getAtGlobalIndex";
import { Cloudinary } from "@cloudinary/url-gen";
definePageMeta({
  title: "CMS",
  layout: "admin",
  middleware: ["auth"],
});
const { public: config } = useRuntimeConfig();

const cld = new Cloudinary({
  cloud: {
    cloudName: config.cloudinary.cloudName,
  },
});

type MediaElement = {
  mp4?: string;
  webm?: string;
  cover?: string;
  image?: string;
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

const route = useRoute();

// Your Component Code
let id = route.params.id;
const title: Ref<string> = ref("");
const description: Ref<string> = ref("");
const client: Ref<string> = ref("");
const date: Ref<string> = ref("");
const mobileLayout: Ref<string> = ref("");
const desktopLayout: Ref<string> = ref("");
const tags: Ref<string[]> = ref([]);
const media: Ref<MediaElement[]> = ref([]);

// Store the current layout
const currentLayout = ref<string[]>([]);
const dormantLayout = ref<string[]>([]);
const layout = ref<string>("desktop");
const rows: ComputedRef<string[][]> = computed(() => {
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

// Function to update layout based on screen width
const updateLayout = (newLayout: string) => {
  if (newLayout === "mobile") {
    // Use mobile layout
    currentLayout.value = mobileLayout.value?.split("/") || [];
    dormantLayout.value = desktopLayout.value?.split("/") || [];
    layout.value = "mobile";
  } else {
    // Use desktop layout
    currentLayout.value = desktopLayout.value?.split("/") || [];
    dormantLayout.value = mobileLayout.value?.split("/") || [];
    layout.value = "desktop";
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
const createImageCloudinaryURL = (item: string) => {
  return cld.image(item).format("auto").quality("auto").toURL();
};
const createVideoCloudinaryURL = (item: string) => {
  return cld.video(item).format("auto").quality("auto").toURL();
};
const arrayToString = (array: string[]): string => {
  return array.join(" / ");
};
const addItem = (mediaIndex: number, id: string, layout: string) => {
  media.value.splice(mediaIndex + 1, 0, {
    image: "placeholder-image.jpeg",
  });
  insertAtGlobalIndex(currentLayout, "1fr", mediaIndex);
  insertAtGlobalIndex(dormantLayout, "1fr", mediaIndex);

  if (layout === "desktop") {
    desktopLayout.value = arrayToString(currentLayout.value);
    mobileLayout.value = arrayToString(dormantLayout.value);
  } else if (layout === "mobile") {
    mobileLayout.value = arrayToString(currentLayout.value);
    desktopLayout.value = arrayToString(dormantLayout.value);
  }
};
const removeItem = (mediaIndex: number, layout: string) => {
  media.value.splice(mediaIndex, 1);
  removeAtGlobalIndex(currentLayout, mediaIndex);
  removeAtGlobalIndex(dormantLayout, mediaIndex);
  if (layout === "desktop") {
    desktopLayout.value = arrayToString(currentLayout.value);
    mobileLayout.value = arrayToString(dormantLayout.value);
  } else if (layout === "mobile") {
    mobileLayout.value = arrayToString(currentLayout.value);
    desktopLayout.value = arrayToString(dormantLayout.value);
  }
};

const saveWorkItem = () => {
  if (media.value && desktopLayout && mobileLayout) {
    workStore.saveWorkItem(
      id,
      media.value,
      desktopLayout.value,
      mobileLayout.value
    );
  }
};
const replaceImage = (e: Event, mediaIndex: number, test: any) => {
  console.log(media.value[0]);
  media.value.splice(mediaIndex, 1);
  console.log("Event replace", e);
  console.log("Event test", test);
  media.value.splice(mediaIndex, 0, { image: "placeholder-image" });
};

const updateImageSize = (e: any, mediaIndex: number) => {
  removeAtGlobalIndex(currentLayout, mediaIndex);
  insertAtGlobalIndex(
    currentLayout,
    `${e.target.value < 0.3 ? "0.3" : e.target.value}fr`,
    mediaIndex - 1
  );
};

const handleUpload = (result: any, widget: any) => {
  console.log("result", result);
  console.log("widget", widget);
};

onMounted(async () => {
  if (workStore.work.length === 0) await workStore.fetchWorks();
  const workItem = workStore.getWorkById(parseInt(id));
  if (!workItem) navigateTo("/cms/work");

  title.value = workItem[0].title;
  description.value = workItem[0].description;
  client.value = workItem[0].client;
  date.value = workItem[0].date;
  tags.value = workItem[0].tags;
  media.value = workItem[0].media;
  mobileLayout.value = workItem[0].mobileLayout;
  desktopLayout.value = workItem[0].desktopLayout;

  // Initial layout setting
  updateLayout("desktop");
  console.log("Cloudinary: ", cld);
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
  margin-bottom: 3rem;
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
.column-replace,
.column-fr {
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: row;

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

.column-fr {
  bottom: 2em;
  left: 50%;
  transform: translateX(-50%);
  column-gap: 1em;
  input {
    max-width: 30px;
  }
}
.column-add {
  top: 50%;
  transform: translateY(-50%);
  right: -1em;
  background-color: darkgreen;
  color: white;
  border: solid 1px black;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.column-remove {
  top: 0;
  transform: translateY(-50%);
  left: 0;
  background: darkred;
  color: white;
  border: solid 1px black;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.column-replace {
  top: 0;
  right: 0;
  background: yellow;
  width: 30px;
  height: 30px;
  input {
    display: none;
  }
}
.Remove {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: none;
}
</style>
