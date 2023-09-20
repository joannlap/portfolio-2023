<template>
  <section class="ImageModal" @click="modalStore.setLink('')">
    <div class="ImageModal-modal">
      <nuxt-img :src="modalStore.getLink" />
      <div class="ImageModal-close" @click="modalStore.setLink('')">
        <SvgClose />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SvgClose from "~/assets/icons/close.svg?component";
import { useModalStore } from "~/stores/modal";
const modalStore = useModalStore();
</script>

<style lang="scss" scoped>
.ImageModal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
}

.ImageModal-modal {
  text-align: center;
  width: 80vw;
    height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}

.ImageModal-close {
  position: absolute;
  margin: 0;
  cursor: pointer;
  right: -2rem;
  top: 0;
  
  background-color: white;
  border-radius: 50%;
  padding: 5px;
  svg {
    width: 32px;
    height: 32px;
  }
}
</style>
