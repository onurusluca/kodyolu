<template>
  <div id="error">
    <h1>Sitede böyle bir sayfa bulunmuyor.</h1>
    <nuxt-link to="javascript:history.back()"
      >Bir önceki sayfaya gidin</nuxt-link
    >
    <nuxt-link to="/">Anasayfaya gidin</nuxt-link>
    <nuxt-link to="/kurslar">Kurslar Paneline gidin</nuxt-link>nuxt-link
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Error-Page",
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
#error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 30vh;
  a {
    color: var(--f-color);
    border: 2px solid var(--p-color);
    margin: 1vh 0;
    padding: 1vh;
    transition: 200ms;
    &:hover {
      color: white;
      background-color: var(--p-color);
    }
  }
}
</style>
