<template>
  <Navigation />
  <div class="Error">
    
    <h1 v-if="error.statusCode === 404">404</h1>
    <h1 v-else>An error occurred</h1>
    <h2>and i oop <br>page not found</h2>
    <a href="/">Back Home</a>
  </div>
</template>

<script setup lang="ts">
defineProps(["error"]);
</script>

<style lang="scss" scoped>
.Error {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding: 60px 30px;
  
  @include breakpoint(xmedium) {
    align-items: center;
    justify-content: center;
    margin-left: 350px;
  }
  // background-color: $c-primary-light;
}

h1 {
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: 6.25rem;
font-size: clamp(6.25rem, 3.7828947368421053rem + 13.157894736842104vw, 15.625rem);
  text-align: center;
  text-transform: uppercase;
}

h2 {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.25rem;
font-size: clamp(1.25rem, 0.756578947368421rem + 2.6315789473684212vw, 3.125rem);
  line-height: 50px;
  text-align: center;
  margin-bottom: 3rem;
}

a {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: $c-black;
  font-size: 1rem;
font-size: clamp(1rem, 0.7697368421052632rem + 1.2280701754385965vw, 1.875rem);
  text-decoration-thickness: 2px;
  text-underline-offset: 6px;

  &:hover {
    color: $c-grey;
    transition: .5s;
  }
}
</style>
