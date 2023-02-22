<template>
  <div class="center">
    <img src="/img/logo-notitle.svg" alt="Logo de Libère ta plume" height="303" width="221" />
    <h1>Graphothérapie</h1>
    <Nav />
  </div>
  
</template>

<style scoped>
  h1 {
    font-family: "nixie_one";
    font-size: 3em;
  }

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
  useSchemaOrg([
    defineLocalBusiness({
      name: 'Libère ta plume - Graphothérapie',
      logo: '/img/logo.png',
      telephone: '07 83 75 15 83',
      email: 'contact@liberetaplume.fr',
      image: 'https://liberetaplume.fr/img/logo.png',
      address: {
        addressCountry: 'FR',
        postalCode: '85500',
        streetAddress: '76 Rue Yves Ramoz',
        addressLocality: 'Saint-Paul-en-Pareds'
      },
      openingHoursSpecification: [
        {
          dayOfWeek: 'Wednesday',
          opens: '09:00',
          closes: '12:00',
        },
        {
          dayOfWeek: 'Wednesday',
          opens: '14:00',
          closes: '18:00',
        },
        {
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '12:00',
        },
      ]
    }),
    defineWebSite(),
    defineWebPage(),
  ]);

  definePageMeta({
    title: ' ',
  });

</script>