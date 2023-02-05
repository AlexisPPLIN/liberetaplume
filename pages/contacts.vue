<template>
  <div class="center">
    <h1>Me contacter</h1>

    <div class="icons">
      <a class="icon" href="#" target="_blank"><img src="/img/icons/google-maps.svg" alt="Fiche Google Maps de Libère ta plume"/></a>
      <a class="icon" href="#" target="_blank"><img src="/img/icons/instagram.svg" alt="Page instagram de Libère ta plume"/></a>
      <a class="icon" href="https://www.facebook.com/profile.php?id=100089095176948" target="_blank"><img src="/img/icons/facebook.svg" alt="Page Facebook de Libère ta plume"/></a>
      <a class="icon" href="#" target="_blank"><img src="/img/icons/linkedin.svg" alt="Page Linkedin de Libère ta plume"/></a>
      <a class="icon" href="mailto:contact@liberetaplume.fr" target="_blank"><img src="/img/icons/email-outline.svg" alt="Email de Libère ta plume"/></a>
      <a class="icon" href="tel:+33783751583"><img src="/img/icons/phone.svg" alt="Numéro de téléphone de Libère ta plume"/></a>
    </div>
    
    <Nav />
  </div>
  
</template>

<style scoped>
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