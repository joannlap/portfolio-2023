<template>
  <footer>
    <div class="Socials">
      <a href="https://instagram.com"><SvgInstagram /></a>
      <a href="https://linkedin.com"><SvgLinkedIn /></a>
      <a href="https://behance.com"><SvgBehance /></a>
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
