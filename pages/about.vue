<template>
  <section id="maincontent" class="Container">
    <nuxt-img
      class="Image"
      src="/images/joann.jpg"
      alt="Joann"
      sizes="xs:280px sm:350px md:487px lg:487px xl:487px"
    />
    <p>
      My name is Jo-Ann, born and raised in Amsterdam. A graphic designer with passion for creating graphics and brand experiences that goes beyond the digital screen. I approach my work through a tangible touch, from applying textures to developing a product.    <br>
      <br>
      Services: 
      <br>
      Branding
      <br>
      Illustration
      <br>
      Motion Graphics 
      <br>
      3D modelling
      <br>
      <br>
      <a href="/resume-joannlap.pdf" target="_blank">Resume</a>
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
