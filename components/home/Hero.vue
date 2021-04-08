<template>
  <div id="hero">
    <div class="hero-top">
      <img
        alt="Hero Image"
        id="hero-img"
        src="../../assets/images/main-page/hero-img.svg"
      />

      <section class="text-container">
        <h1>Sıfırdan kodlama öğren ve iş bul.</h1>
        <p class="heroText-2">
          Yazılım, İngilizce, kendini geliştirme ve iş bulmaya dair herşey...
        </p>
        <p class="heroText-3">Tamamen ücretsiz!</p>

        <button class="action-button">
          <span class="b-shadow"></span>
          <span class="b-edge"></span>
          <span class="b-front"> Şimdi Başla ! </span>
        </button>
      </section>
    </div>
    <div class="more">
      <a class="more-text" href="#slogan-anchor">Daha fazla öğren</a>
      <div class="arrows">
        <div class="arrow arrow-first"></div>
        <div class="arrow arrow-second"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .hero-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    #hero-img {
      user-select: none;
      width: 65vh;
      height: auto;
    }
    .text-container {
      text-align: center;
      margin-left: 10vh;
      h1 {
        font-size: 6vh;
      }
      .heroText-2 {
        margin-bottom: 5vh;
        font-size: 3.4vh;
        font-weight: lighter;
        letter-spacing: -0.1vh;
      }
      .heroText-3 {
        margin-top: -2vh;
        margin-bottom: 4vh;
        font-size: 2.5vh;
        letter-spacing: 0.08vh;
        font-weight: bold;
      }

      .action-button {
        position: relative;
        border: none;
        background: transparent;
        padding: 0;
        cursor: pointer;
        outline-offset: 4px;
        transition: filter 250ms;
        -webkit-tap-highlight-color: transparent;
        user-select: none;

        .b-shadow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          background: hsl(0deg 0% 0% / 0.25);
          will-change: transform;
          transform: translateY(2px);
          transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
          filter: blur(4px);
        }
        .b-edge {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          background: linear-gradient(
            to left,
            hsl(0, 95%, 37%) 0%,
            hsl(0, 95%, 57%) 8%,
            hsl(0, 95%, 57%) 92%,
            hsl(0, 95%, 37%) 100%
          );
        }
        .b-front {
          display: block;
          position: relative;
          padding: 12px 42px;
          border-radius: 12px;
          font-size: 1.25rem;
          color: white;
          background: var(--p-color);
          will-change: transform;
          transform: translateY(-4px);
          transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
        }
        &:hover {
          filter: brightness(110%);
        }
        &:hover .b-front {
          transform: translateY(-6px);
          transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
        }
        &:active .b-front {
          transform: translateY(-2px);
          transition: transform 34ms;
        }
        &:hover .b-shadow {
          transform: translateY(4px);
          transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
        }
        &:active .b-shadow {
          transform: translateY(1px);
          transition: transform 34ms;
        }
        &:focus:not(:focus-visible) {
          outline: none;
        }
      }
    }
  }
  .more {
    position: absolute;
    bottom: -2vh;
    padding-bottom: 9vh;
    .more-text {
      font-size: 2.3vh;
      text-align: center;
      padding-left: 2.5vh;
    }

    //Down moving arrows
    .arrows {
      .arrow {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: 50% 50%;
        transform: translate3d(-50%, -50%, 0);
      }
      $ani-speed: 3s;
      $ani-delay: 1.5s;

      .arrow-first {
        animation: arrow-movement $ani-speed ease-in-out infinite;
      }
      .arrow-second {
        animation: arrow-movement $ani-speed $ani-delay ease-in-out infinite;
      }

      .arrow:before,
      .arrow:after {
        background: var(--p-color);
        content: "";
        display: block;
        height: 0.3vh;
        position: absolute;
        top: 0;
        left: 0;
        width: 3vh;
      }

      .arrow:before {
        transform: rotate(45deg) translateX(-23%);
        transform-origin: top left;
      }

      .arrow:after {
        transform: rotate(-45deg) translateX(23%);
        transform-origin: top right;
      }

      // Animation
      @keyframes arrow-movement {
        0% {
          opacity: 0;
          top: 35%;
        }
        70% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    }
  }
}
// Small devices(Mobile)
@media (max-width: 575.98px), (max-width: 767.98px) {
  #hero {
    .hero-top {
      display: flex;
      flex-direction: column;
      #hero-img {
        margin-top: -8vh;
        width: 45vw;
        display: inline-block;
      }
      .texts {
        margin: 0;
        width: 95%;
        h1 {
          font-size: 2.2rem;
          line-height: 40px;
          margin-bottom: 2vh;
        }
        h2 {
          font-size: 1.2rem;
          line-height: 28px;
          margin: 0;
        }
        h3 {
          margin-top: 0.5vh;
        }
      }
    }
    .more {
      bottom: -4vh;
      .more-text {
        font-size: 2vh;
        padding: 0;
      }
      .arrows {
        .arrow {
          position: absolute;
          left: 40%;
        }
      }
    }
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
