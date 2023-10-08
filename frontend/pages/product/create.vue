<template>
  <div>
    <div><input type="text" v-model="product.title" /></div>
    <div><textarea v-model="product.description"></textarea></div>
    <button @click="createProduct();$router.go(-1)">Create</button>
    <button @click="$router.go(-1)">Cancel</button>
    {{ product }}
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/product"

const { create } = useStrapi()

const product = ref({ title: "", description: "" })

const createProduct = async () => {
  await create<Product>("products", { 
    title: product.value.title, 
    description: product.value.description })
}
</script>