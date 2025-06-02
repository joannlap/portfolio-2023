<template>
  <section id="maincontent" class="Container">
    <nuxt-img
      class="Image"
      src="/images/joann.jpg"
      alt="Joann"
      sizes="xs:280px sm:350px md:487px lg:487px xl:487px"
    />
    <p>
      Hi, I’m Jo-Ann — a graphic designer based in Amsterdam. Working across branding, illustration, motion graphics, and 3D design. My approach lies in combining analog and digital techniques creating a tactile touch to my work.
      <br>  
      <br>  
      Currently freelancing and open to new projects. For inquiries or any questions, feel free to get in touch by email.
      <br>  
      <br>  

      <a href="/cv-joannlap.pdf" target="_blank">Resume</a>
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
