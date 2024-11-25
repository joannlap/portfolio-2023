<template>
  <section id="maincontent" class="Container">
    <nuxt-img
      class="Image"
      src="/images/joann.jpg"
      alt="Joann"
      sizes="xs:280px sm:350px md:487px lg:487px xl:487px"
    />
    <p>
      My name is Jo-Ann, an Amsterdam based graphic designer. With a passion for creating visuals and brand experiences that goes beyond the digital screen. I enjoy approaching my work through a tangible touch, whether that is developing a product or creating interactive visuals.       <br>
      <br>
      Specialties lies in branding, motion graphics, 3D modelling
      <br>
      <br>
      <a href="https://read.cv/joannlap" target="_blank">resume</a>
    </p>
  </section>
  <div class="MobileFooter">
    <SocialFooter />
  </div>
</template>

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

  @include breakpoint(medium) {
    max-width: 487px;
    margin-bottom: 0;
  }
}
p {
  margin-top: 3rem;
  max-width: 435px;
  font-size: 16px;
  animation: move-in 0.4s ease forwards;
  opacity: 0;
}
</style>
