export default {
  data() {
    return {
        readingTime: "",

    };
  },
  mounted() {
    this.calculateReadingTime();
  },
  methods: {
    calculateReadingTime() {
      let tnt = document.querySelector("#articleLenght").innerHTML;
      const wordsPerMinute = 200; // Average case.
      let result;
      let textLength = tnt.split(" ").length; // Split by words
      if (textLength > 0) {
        let value = Math.ceil(textLength / wordsPerMinute);
        result = `~${value} dakika.`;
      }
      this.readingTime = result;
    },
  },
};
