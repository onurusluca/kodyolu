<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import Vue from "vue";

/* Scroll mixin */
import scrollShow from "../mixins/scrollShow";
Vue.mixin(scrollShow);

export default Vue.extend({});
</script>

<style>
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
