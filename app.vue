<template>
  <SeoKit />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
* {
  margin: 0 !important;
}
body,
#__nuxt,
#main {
  background-color: #ebe3d9ff;
  width: 100vw;
  height: 100vh;
  font-family: "hynings_handwriting";
}

@font-face {
  font-family: "free_penregular";
  src: url("~/assets/fonts/free_pen.woff2") format("woff2"),
    url("~/assets/fonts/free_pen.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "hynings_handwriting";
  src: url("~/assets/fonts/HyningsHandwritingV2-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.loading-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #ebe3d9ff;
  font-family: "hynings_handwriting";
}

.loading-div img {
  height: 5em;
  animation: breathing 3s ease-out infinite normal;
}

.loading-div span {
  font-size: 3em;
}

/* Loading slide-out transition */

.loading-enter-from,
.loading-leave-to {
  visibility: hidden;
  opacity: 0;
}

.loading-enter-active,
.loading-leave-active {
  transition: all 0.1s;
}

@keyframes breathing {
  0% {
    transform: translateX(-60px);
  }

  50% {
    transform: translateX(70px);
  }

  100% {
    transform: translateX(-60px);
  }
}
</style>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(true);

nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>
