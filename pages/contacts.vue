<template>
  <div class="center">
    <h1>Me contacter</h1>

    <div class="icons">
      <a class="icon" href="#" target="_blank" v-if="false">
        <img src="/img/icons/google-maps.svg" alt="Fiche Google Maps de Libère ta plume"/>
        <span>Google Maps</span>
      </a>

      <a class="icon" href="#" target="_blank" v-if="false">
        <img src="/img/icons/instagram.svg" alt="Page instagram de Libère ta plume"/>
        <span>Instagram</span>
      </a>
      
      <a class="icon" href="https://www.facebook.com/profile.php?id=100089095176948" target="_blank">
        <img src="/img/icons/facebook.svg" alt="Page Facebook de Libère ta plume"/>
        <span>Facebook</span>
      </a>

      <a class="icon" href="#" target="_blank" v-if="false">
        <img src="/img/icons/linkedin.svg" alt="Page Linkedin de Libère ta plume"/>
        <span>Linkedin</span>
      </a>

      <a class="icon" href="mailto:contact@liberetaplume.fr" target="_blank">
        <img src="/img/icons/email-outline.svg" alt="Email de Libère ta plume"/>
        <span>contact@liberetaplume.fr</span>
      </a>
      <a class="icon" href="tel:+33783751583">
        <img src="/img/icons/phone.svg" alt="Numéro de téléphone de Libère ta plume"/>
        <span>07 83 75 15 83</span>
      </a>
    </div>
    
    <Nav />
  </div>
  
</template>

<style scoped>
  h1 {
    position: fixed;
    top: 2%;
  }

  .icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 4em;
    color: black;
    padding: 3%;
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

  .icon span {
    text-decoration: none !important;
    font-size: 1.5em;
  }
</style>

<script setup>
  useSchemaOrg([
    defineWebPage({
      '@type': 'ContactPage',
      'name': 'Me contacter',
      'description': 'Contactez-moi par téléphone, email ou sur les réseaux sociaux'
    })
  ]);

  definePageMeta({
    title: 'Me contacter',
    meta: [ { name: 'description', content: 'Contactez-moi par téléphone, email ou sur les réseaux sociaux' } ],
  });


</script>