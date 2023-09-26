<template>
  <footer>
    <div class="Socials">
      <a
        href="https://www.instagram.com/jafns_/"
        aria-label="Visit my Instagram"
        ><SvgInstagram
      /></a>
      <a
        href="https://www.linkedin.com/in/jo-ann-lieuw-a-peuw-056829192/"
        aria-label="Visit my LinkedIn"
        ><SvgLinkedIn
      /></a>
      <a
        href="https://www.behance.net/joannlieuw60d6"
        aria-label="Visit my Behance"
        ><SvgBehance
      /></a>
    </div>
    <a href="mailto:joannlieuw@gmail.com" class="Email">joannlieuw@gmail.com</a>
  </footer>
</template>

<script setup lang="ts">
import SvgInstagram from "~/assets/icons/instagram.svg?component";
import SvgLinkedIn from "~/assets/icons/linkedin.svg?component";
import SvgBehance from "~/assets/icons/behance.svg?component";
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  .Socials {
    display: flex;
    column-gap: 10px;
    a {
      color: $c-black;
      svg {
        width: 24px;
        height: 24px;
      }
      &:hover {
        color: $c-grey;
      }
    }
  }
  .Email {
    text-decoration: none;
    color: $c-black;
    &:hover {
      color: $c-grey;
    }
  }
}
</style>
