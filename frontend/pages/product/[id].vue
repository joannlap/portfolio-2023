<template>
  <div>
    <h1>{{ productTitle }}</h1>
    <p>{{ productDescription }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'
import { useUserStore } from '~/stores/user'

definePageMeta({
  layout: "user",
})
const userStore = useUserStore()
const router = useRouter()

onMounted(() => {
  if (Object.keys(userStore.user).length === 0 && !localStorage?.getItem('token')) {
    router.push('/signup')
  }
})

const route = useRoute()
const { findOne: findProduct } = useStrapi()

const productData = await findProduct<Product>('products', `${route.params.id}`).then((response) => {
  return response
})
const productTitle = productData.data.attributes.title 
const productDescription = productData.data.attributes.description 
</script>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 2rem;
  margin: 0.5em 0;
}
</style>