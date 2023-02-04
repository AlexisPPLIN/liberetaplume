<template>
  <Transition name="loading">
    <div class="loading-div" v-if="loading">
        <img src="/img/icons/feather.svg" alt="Icône de chargement en forme de plume"/>
        <span>Chargement...</span>
    </div>
  </Transition>
  <Transition>
    <div id="main" v-show="!loading">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </Transition>
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
}

@font-face {
  font-family: 'free_penregular';
  src: url('~/assets/fonts/free_pen.woff2') format('woff2'),
      url('~/assets/fonts/free_pen.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

  .center
  {
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
  font-family: 'free_penregular';
}

.loading-div img {
  height: 5em;
  animation: breathing 5s ease-out infinite normal;
}

.loading-div span {
  font-size: 3em;
}

/* Loading slide-out transition */

.loading-leave-to {
  visibility: hidden;
  opacity: 0;
}

.loading-leave-active {
  transition: all 0.3s;
}


@keyframes breathing {
  0% {
    transform: translateX(-40px);
  }

  50% {
    transform: translateX(70px);
  }

  100% {
    transform: translateX(-40px);
  }
}

</style>

<script setup lang="ts">
  const nuxtApp = useNuxtApp();
  const loading = ref(false);

  loading.value = true;
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });
</script>
