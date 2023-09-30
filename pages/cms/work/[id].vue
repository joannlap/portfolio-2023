<template>
  <section>
    <div>
      <h2>Title</h2>
      <input type="text" v-model="title" />
    </div>
    <div>
      <h2>Description</h2>
      <textarea v-model="description" />
    </div>
    <div>
      <h2>Client</h2>
      <input type="text" v-model="client" />
    </div>
    <div>
      <h2>Date</h2>
      <input type="date" v-model="date" />
    </div>
    <div>
      <h2>Tags</h2>
      <div v-for="(tag, index) in tags" :key="`${index}-tag`">
        <input type="text" :value="tag" />
        <button>Delete</button>
      </div>
      <button>Add</button>
    </div>
    <div>
      <h2>Media</h2>
      <div v-for="item in media">
        <video v-if="item.mp4" controls :poster="item.cover">
          <source :src="item.webm" type="video/webm" />
          <source :src="item.mp4" type="video/mp4" />
          Browser does not support video tag
        </video>
        <nuxt-img provider="cloudinary" :src="item" v-else />
        {{ item }}
        <button>Remove</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useWorkStore } from "~/stores/work";
// import { v2 as cloudinary } from "cloudinary";

const workStore = useWorkStore(); // Initialize the store
definePageMeta({
  title: "CMS",
  layout: "admin",
  middleware: ["auth"],
});

const route = useRoute();

let id = route.params.id;
let title = ref("");
let description = ref("");
let client = ref("");
let date = ref("");
let tags = ref([]);
let media = ref([]);
// const removeImage = (image) => {
//   cloudinary.v2.api
//     .delete_resources([image], { type: "upload", resource_type: "image" })
//     .then(console.log);
// };
onMounted(async () => {
  if (workStore.work.length === 0) await workStore.fetchWorks();
  const workItem = workStore.getWorkById(parseInt(id));
  if (!workItem) navigate("/cms/work");

  title.value = workItem[0].title;
  description.value = workItem[0].description;
  client.value = workItem[0].client;
  date.value = workItem[0].date;
  console.log(workItem[0].tags);
  tags.value = workItem[0].tags;
  console.log(tags.value);
  media.value = workItem[0].images;
});
</script>

<style lang="scss" scoped>
section > div {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
}
input,
textarea {
  width: 100%;
}
</style>
