<template>
  <section>
    <div>
      <h2>Title</h2> <input type="text" v-model="title" />
    </div>
    <div>
      <h2>Description</h2> <textarea v-model="description" />
    </div>
    <div>
      <h2>Client</h2> <input type="text" v-model="client" />
    </div>
    <div>
      <h2>Date</h2> <input type="date" v-model="date" />
    </div>
    <div>
      <h2>Tags</h2>
    </div>
    <div>
      <h2>Media</h2>
    </div>

  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useWorkStore } from "~/stores/work";
const workStore = useWorkStore(); // Initialize the store
definePageMeta({
  title: "CMS",
  layout: "admin",
  middleware: [
    'auth',
  ],
});

const route = useRoute();

let id = route.params.id;
let title = ref('');
let description = ref('');
let client = ref('');
let date = ref('');

onMounted(async () => {
  if(workStore.work.length === 0) await workStore.fetchWorks();
  const workItem = workStore.getWorkById(parseInt(id));
  if(!workItem) navigate('/cms/work');
  title.value = workItem[0].title;
  description.value = workItem[0].description;
  client.value = workItem[0].client;
  date.value = workItem[0].date;
});

</script>


<style lang="scss" scoped>
section > div {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
}
input, textarea {
  width: 100%;
}
</style>