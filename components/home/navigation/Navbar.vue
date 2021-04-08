<template>
  <!-- Hide on scroll -->
  <nav
    class="navbar"
    :class="{ 'hidden-navbar': !showOnScroll, 'scroll-nav': scrollNav }"
  >
    <nuxt-link to="/">
      <img
        alt="Kodyolu Logo"
        id="logo"
        src="@/assets/images/logos/logo.png"
        v-show="!darkLogo"
      />
      <!-- Dark mode logo -->
      <img
        alt="Kodyolu Logo"
        id="logo"
        src="@/assets/images/logos/logo-darkmode.png"
        v-show="darkLogo"
      />
    </nuxt-link>
    <!--     <div class="mobile-bar"><MobileNav /></div>
 -->
    <ul class="nav-links">
      <li><nuxt-link class="navlink" to="/neden">Neden?</nuxt-link></li>
      <li><nuxt-link class="navlink" to="/bize-ulas">Bize Ulaş</nuxt-link></li>
      <li><nuxt-link class="navlink" to="/yardım-et">Yardım Et</nuxt-link></li>
      <!--       <li><nuxt-link class="navlink" to="/about/">Bağış Yap</nuxt-link></li>
 -->
      <li class="dark-mode">
        <label class="theme-switch" for="checkbox">
          <input
            @change="darkLogo = !darkLogo"
            type="checkbox"
            id="theme-toggle"
          />
          <label for="theme-toggle"><span></span></label>
        </label>
      </li>
    </ul>
  </nav>
</template>

<script>
/* import MobileNavbar from "./MobileNavbar";
 */

/* Dark Mode */
import darkMode from "~/mixins/darkMode";

export default {
  name: "Navbar",
  mixins: [darkMode],
  data() {
    return {};
  },
  /*   components: { MobileNavbar },
   */
};
</script>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5vh;
  padding: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  transform: translate3d(0, 0, 0);
  transition: all 200ms;
  z-index: 9999;
  box-shadow: none;
  border: none;
  #logo {
    padding-top: 1vh;
    width: 20vh;
    height: auto;
    transition: all 300ms;
    cursor: pointer;
    /*     filter: drop-shadow(5px 5px 3px var(--sh-color)) contrast(1.25);
 */
    &:hover {
      transform: scale(1.03);
    }
  }
  //Nav style when hidden
  &.hidden-navbar {
    box-shadow: none;
    transform: translate3d(0, -120%, 0);
  }
  //Nav style when scrolled up to show
  &.scroll-nav {
    background-color: var(--bg-color);
    box-shadow: 0 2px 10px var(--sh-color);
    padding: 3vh;
    #logo {
      width: 15vh;
    }
  }

  //Navbar links
  .nav-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .navlink {
      padding: 0 2vh;
      font-weight: bolder;
      transition: all 100ms;
      font-size: 2.2vh;
      color: var(--h-color);
      &:hover {
        color: var(--p-color);
      }
    }
  }
}

//Dark mode CSS
.dark-mode {
  margin-left: 2vh;
  margin-bottom: 0.6vh;
  #theme-toggle {
    display: none;
    cursor: pointer;
    & + label {
      font-size: var(--toggle-size);
      display: flex;
      height: var(--switch-h);
      width: var(--switch-w);
      border-radius: calc(var(--switch-h) / 2);
      background-size: auto 8em;
      background-position: bottom;
      background-image: linear-gradient(
        180deg,
        #021037 0%,
        #20206a 19%,
        #4184b1 66%,
        #62e7f7 100%
      );
      transition: var(--switch-transition-duration);
      border: 0.125em solid hsl(207, 30%, 95%);
      overflow: hidden;
      cursor: pointer;

      span {
        background: #fffad8;
        border-radius: 50%;
        height: var(--switch-h);
        width: var(--switch-h);
        transform: translateX(var(--switch-off-handle-x))
          scale(var(--switch-handle-scale));
        transition: var(--switch-transition-duration);
        cursor: pointer;
        box-shadow: 0 0 0.25em 0.0625em #fbee8d, 0 0 2em 0 #ffeb3b,
          inset -0.25em -0.25em 0 0 #fbee8e,
          inset -0.3125em -0.3125em 0 0.625em #fff5b2;
        margin-top: var(--switch-off-handle-x);
      }
    }

    &:checked {
      font-size: var(--switch-font-size);

      & + label {
        background-position: top;
        border-color: hsl(207, 30%, 50%);

        span {
          background: transparent;
          transform: translateX(var(--switch-on-handle-x))
            scale(var(--switch-handle-scale));
          box-shadow: inset -0.1875em -0.1875em 0 0 #fbe7ef,
            inset -0.5625em -0.5625em 0 0 #fffff7;
        }
      }
    }
  }
}

//Dark mode icon sizes
:root {
  --toggle-size: 1.4vh;
  --switch-w: 4em;
  --switch-h: 2.2em;
  --switch-handle-scale: 0.65;
  --switch-off-handle-x: -0.125em;
  --switch-on-handle-x: calc(100% - 0.425em);
  --switch-transition-duration: 0.2s;
}

// Small devices(Mobile)
@media (max-width: 575.98px) {
  .navlink {
    display: none !important;
  }
  .navbar {
    display: flex;
    justify-content: space-between;

    .dark-mode {
      z-index: 555;
    }
  }

  //Dark mode icon sizes for media queries
  :root {
    --toggle-size: 1.6vh;
    --switch-w: 4em;
    --switch-h: 2.4em;
    --switch-handle-scale: 0.65;
    --switch-off-handle-x: -0.125em;
    --switch-on-handle-x: calc(100% - 1em);
    --switch-transition-duration: 0.2s;
  }
}

// Small-medium devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
}
</style>