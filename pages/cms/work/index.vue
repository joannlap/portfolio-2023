<template>
  <section>
    <h1> My work</h1>
    <div v-for="work in workStore.getWork">
      <h2>{{ work.title }}</h2>
      <button @click="router.push(`/cms/work/${work.id}`)">Edit</button>
    </div>
  </section>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useWorkStore } from "~/stores/work";
definePageMeta({
  title: "CMS",
  layout: "admin",
  middleware: [
    'auth'
  ],
});
const router = useRouter()
const workStore = useWorkStore(); // Initialize the store

// Fetch works when component is mounted
onMounted(async () => {
  await workStore.fetchWorks();
});
</script>