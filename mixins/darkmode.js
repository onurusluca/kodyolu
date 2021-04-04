//Dark Mode
export default {
  data() {
    return {
      darkLogo: false
    };
  },

  mounted() {
    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );
    /* Add to local storage  */
    const currentTheme = localStorage.getItem("theme");
    /*     const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
     */
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);

      if (currentTheme === "dark") {
        toggleSwitch.checked = true;
        this.darkLogo = true;
      }
    }
    //If user has darkmode on the browser or device
    /*     if (prefersDarkScheme.matches) {
      toggleSwitch.checked = true;
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      this.darkLogo = true;
    }
 */
    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        this.darkLogo = true;
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        this.darkLogo = false;
      }
    }
    toggleSwitch.addEventListener("change", switchTheme, false);
  }
};
