<template>
  <div class="center">
    <img src="/img/logo.svg" alt="Logo de Libère ta plume"/>
    <h1 style="visibility: hidden;">Libère ta plume - Graphothérapie</h1>
    <Nav />
  </div>
  
</template>

<style scoped>
  .center > img {
    width: 70%;
    height: 50%;
    margin-bottom: 1% !important;
  }

  @media only screen and (min-width: 768px) {
    .center > img {
      width: 50%;
      height: 50%;
    }
  }

  .icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: auto;
  }

  .icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 4em;
    width: 4em;
    color: black;
  }

  .icon img {
    transition: transform .1s;
    height: 3em;
    width: 3em;
  }

  .icon img:hover {
    opacity: 100%;
    transform: scale(1.5);
  }
</style>

<script setup>

</script>