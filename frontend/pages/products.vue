<template>
  <section>
    <suspense>
      <template #default>
        <ul class="CardList">
          <li v-for="product in productData.data" :key="product.id" class="Card" @click="$router.push(`product/${product.id}`)">
            {{ product.attributes.title }}
            {{ product.attributes.description }}
            <button @click="$router.push(`product/${product.id}/edit`)">Edit</button>
            <button @click="handleDelete(product.id)">Delete</button>
          </li>
        </ul>
      </template>

      <template #fallback>
        Loading...
      </template>
    </suspense>
    <nuxt-link :to="`product/create`">Create</nuxt-link>
  </section>
</template>

<script setup lang="ts">
import type { Product } from "~/types/product"

definePageMeta({
  layout: "user",
});

const { find: findProducts, delete: deleteProduct } = useStrapi()
const productData = await findProducts<Product>('products').then((response) => {
  return response
})

const handleDelete = async (productId: number) => {
  await deleteProduct<Product>('products', productId)
}
</script>

<style lang="scss">
.CardList {
  // @include grid(repeat($grid-columns, 1fr), $grid-gap);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100vh;
  width: 100vw;
  // grid-template-rows: auto 20%;
}
.Card {
  // grid-row: 1 / 2;
  // grid-column: 3 / 9;
  width: 80%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

button {
  max-height: 30px;
  margin-bottom: .5rem;
  max-width: 120px;
}
</style>