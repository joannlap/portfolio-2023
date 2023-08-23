<template>
  <div class="FooterContainer">
    <h3>Let’s connect</h3>
    <p>
      If you're looking for a skilled and enthusiastic web designer and
      developer who is eager to contribute to your company's success, I would be
      thrilled to discuss how my expertise can benefit your business. Please
      feel free to reach out, and let's create something extraordinary together.
    </p>
    <Button
      :element="'NuxtLink'"
      :title="'Get in touch'"
      :to="`/contact`"
    ></Button>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.FooterContainer {
  background-color: $c-black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 15% 3rem 20%;
  overflow: hidden;

  h3 {
    font-family: "Raleway";
    font-weight: 900;
    font-size: 1.5rem;
    font-size: clamp(1.5rem, 0.7857142857142858rem + 3.571428571428571vw, 4rem);
    color: $c-white;
  }
  p {
    color: $c-white;
    font-family: "Roboto";
    font-weight: 500;
    max-width: 580px;
    text-align: center;
    margin: 32px 0;
    font-size: 12px;
    @include breakpoint(small) {
      font-size: 14px;
    }
    @include breakpoint(xmedium) {
      font-size: 16px;
    }
  }
}
@include breakpoint(medium) {
  .FooterContainer {
    padding: 4% 0 5%;

    p {
      text-align: center;
    }
  }
}
</style>
