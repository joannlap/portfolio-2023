<template>
  <div>
    <h1>Admin Login</h1>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
definePageMeta({
  title: "Admin Login",
  layout: "admin",
});
const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/cms')
  } catch (error) {
    console.error("Failed to login:", error)
  }
}
</script>