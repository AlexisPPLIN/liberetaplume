<template>
  <div class="center">
    <img src="/img/logo.svg" />

    <div class="icons">
      <a class="icon" href="#" target="_blank">
        <img src="/img/icons/google-maps.svg" />
      </a>
      <a class="icon" href="#" target="_blank"><img src="/img/icons/instagram.svg" /></a>
      <a class="icon" href="#" target="_blank"><img src="/img/icons/facebook.svg" /></a>
      <a class="icon" href="#" target="_blank"><img src="/img/icons/linkedin.svg" /></a>
      <a class="icon" href="#" target="_blank"><img src="/img/icons/email-outline.svg" /></a>
    </div>
  </div>
  
</template>

<style scoped>
  .center
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    
  }

  .center > img {
    width: 70%;
    height: 70%;
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