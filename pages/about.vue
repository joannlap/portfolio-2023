<template>
  <section id="maincontent" class="Container">
    <nuxt-img class="Image" src="/images/joanndesktop.jpg" alt="Joann" />
    <p>
      Hi! my name is Jo-Ann, I’m a designer focussed on graphic design,
      illustration and 3D/Motion. Graduated in the summer of 2022 from Amsterdam
      University of Applied Sciences as an Interaction Designer.
    </p>
  </section>
  <div class="MobileFooter">
    <SocialFooter />
  </div>
</template>

<script setup lang="ts" scoped>

onMounted(() => {
  // Animations n shit
});
</script>

<style lang="scss" scoped>
.Container {
  display: flex;
  align-items: center;
  flex-direction: column;
  column-gap: 2rem;
  width: unset;
  flex-wrap: wrap;
  @include breakpoint(xmedium) {
    align-items: flex-start;
    flex-direction: row;
  }
}
.Image {
  margin-top: 0;
  margin-bottom: 30px;
  @include breakpoint(xmedium) {
    max-width: 487px;
    margin-bottom: 0;
  }
}
p {
  margin-top: 3rem;
  max-width: 435px;
  font-size: 14px;
}
</style>
