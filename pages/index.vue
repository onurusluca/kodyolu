<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">kodyolu-official</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Home-Page",
  data() {
    return {};
  },
  /*  head() {
    return {
      title: "Kodyolu",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Sıfırdan kodlama öğren ve iş bul.",
        },
      ],
    };
  }, */
  /*  layout: 'users' */ //alternative layout
});
</script>

<style lang="scss" scoped>
</style>
