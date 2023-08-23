<template>
  <div id="maincontent" class="HomeContainer">
    <div class="ImageContainer">
      <nuxt-img
        src="/images/self-portrait-mobile.png"
        alt="Portrait"
        class="Portrait-mobile"
        sizes="md:400px sm:300px xsm:300px"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

definePageMeta({
  layout: "default",
});

interface TypedInstance {
  destroy(): void;
}

type TypedConstructor = {
  new (selector: string, options: object): TypedInstance;
};

let Typed: TypedConstructor | null = null;
let typed = ref<TypedInstance | null>(null);

onMounted(async () => {
  if (process.client) {
    const module = await import("typed.js");
    Typed = module.default;
    const options = {
      strings: [
        "^1000 TypeScript Trendsetter",
        "^1000 SCSS Architect",
        "^1000 User Interface Craftsman",
        "^1000 Creative Web Designer",
        "^1000 Responsive Design Advocate",
        "^1000 Usability Evangelist",
        "^1000 Vue.js Enthusiast",
        "^1000 React.js Connoisseur",
        "^1000 Progressive Web App Pioneer",
        "^1000 Semantic Web Savant",
        "^1000 Browser Compatibility Chief",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    };
    if (Typed !== null) {
      typed.value = new Typed("#typed", options);
    }
  }
});

onBeforeUnmount(() => {
  if (process.client) {
    typed.value?.destroy();
  }
});
</script>
<style lang="scss">
.HomeContainer {
  display: flex;
  flex-direction: column-reverse;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
}

.ImageContainer {
  flex: 0.5;
  background-color: $c-primary-light;
  position: relative;
}
.ImageContainer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.Portrait,
.Portrait-mobile {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
}
.Portrait {
  padding-top: 15%;
  display: none;
}
.Portrait-mobile {
  display: block;
}

.ContentContainer {
  flex: 0.4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5%;
}

.HomeTitle {
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  font-size: 3rem;
  font-size: clamp(
    3rem,
    2.5357142857142856rem + 2.3214285714285716vw,
    4.625rem
  );
  line-height: 96px;
  letter-spacing: 2px;
  letter-spacing: clamp(
    0.125rem,
    -0.01785714285714285rem + 0.7142857142857143vw,
    0.625rem
  );
  margin: 0;
  margin-bottom: 2rem;
  color: $c-primary;
}

.Description,
.DynamicDescription {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 1.2rem;
  font-size: clamp(1.2rem, 0.9714285714285714rem + 1.1428571428571428vw, 2rem);
  line-height: 1.5rem;
  line-height: clamp(1.5rem, 1.0714285714285714rem + 2.142857142857143vw, 3rem);
  color: $c-black;
  margin: 0;
}
.Description strong {
  font-weight: 900;
}
#typed {
  // padding-left: 0.5rem;
  text-decoration: underline;
}
.HomeTitle-icon {
  display: inline-block;
  animation: wave-animation 10s infinite;
  transform-origin: 70% 70%;
}

@include breakpoint(xsmall) {
  .ImageContainer img {
    width: 100%;
    max-height: 100%;
  }
}

@include breakpoint(medium) {
  .HomeContainer {
    flex-direction: column;
  }

  .ImageContainer {
    flex: 1;
    background-color: $c-primary-light;
    position: relative;
  }
  .ImageContainer img {
    max-height: 100%;
    width: 100%;
    margin-left: 0;

    object-fit: contain;
  }

  .ContentContainer {
    flex: 1;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
@include breakpoint(large) {
  .HomeContainer {
    flex-direction: column-reverse;
  }
  .ContentContainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 0;
    padding-top: 10%;
    transform: none;
  }
  .Portrait-mobile {
    display: none;
  }
  .ImageContainer {
    padding-top: 0;
  }
  .ImageContainer img {
    object-fit: contain;
  }
  .Portrait {
    display: block;
  }
  .HomeContainer {
    flex-direction: row;
  }
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  2% {
    transform: rotate(14deg);
  }
  4% {
    transform: rotate(-8deg);
  }
  8% {
    transform: rotate(14deg);
  }
  12% {
    transform: rotate(-4deg);
  }
  16% {
    transform: rotate(10deg);
  }
  20% {
    transform: rotate(0deg);
  }
  24% {
    transform: rotate(0deg);
  }
}
@media (prefers-reduced-motion) {
  .HomeTitle-icon {
    animation: none;
  }
}
</style>
