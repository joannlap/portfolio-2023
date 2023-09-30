
<template>
  <section>
    <h1> Admin Panel</h1>
    <div>
      <button @click="router.push('/cms/work')">Work</button>
      <button @click="router.push('/cms/about')">About</button>
      <button @click="router.push('/cms/contact')">Contact</button>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  title: "CMS",
  layout: "admin",
  middleware: [
    'auth'
  ],
});
const router = useRouter()
</script>