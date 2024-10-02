<template>
  <section id="maincontent" class="Container">
    <nuxt-img
      class="Image"
      src="/images/joanndesktop.webp"
      alt="Joann"
      sizes="xs:280px sm:350px md:487px lg:487px xl:487px"
    />
    <p>
      My name is Jo-Ann, an Amsterdam based graphic designer. Influenced by brutalism, pop art and street culture.
      <br>
      <br>
      I really appreciate design that gains tangible value; there's more life in them. Therefore over time I've been more interested in product design and craftmanship.
      <br>
      <br>
      Specializing in branding, illustrations, motion graphics and 3D modelling. 
      <br>
      <br>
      Currently freelancing and available for commissions.
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
