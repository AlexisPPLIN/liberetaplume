<template>
  <transition name="list">
    <div class="loading-div" v-if="loading">
      <img src="/img/icons/feather.svg" />
      Chargement...
    </div>
  </transition>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
* {
  margin: 0 !important;
}
body,
#__nuxt {
  background-color: #ebe3d9ff;
  width: 100vw;
  height: 100vh;
}

.loading-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #ebe3d9ff;
}

.loading-div img {
  height: 5em;
  animation: breathing 5s ease-out infinite normal;
}

.list-enter,
.list-leave-to {
  visibility: hidden;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
}

</style>

<script setup lang="ts">
  const nuxtApp = useNuxtApp();
  const loading = ref(false);

  loading.value = true;
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
    console.log("finished");
  });
</script>
