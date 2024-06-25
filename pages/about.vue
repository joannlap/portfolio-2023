<template>
  <section id="maincontent" class="Container">
    <nuxt-img
      class="Image"
      src="/images/joanndesktop.webp"
      alt="Joann"
      sizes="xs:280px sm:350px md:487px lg:487px xl:487px"
    />
    <p>
      I'm Jo-Ann, a graphic designer focussing on 3D modelling and motion graphics. I strongly believe that visual language can bridge
      communication gaps among people of different cultures and backgrounds.
      With a bachelors degree in interaction design, I have paved my way
      developing a strong interest in product design and craftsmanship. Next to
      design my passion for dance has grown over the past couple years that it
      has taken it’s own journey and career path.
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
