<template>
  <nav>
    <NuxtLink to="/">Accueil</NuxtLink>
    <span class="separator">&bull;</span>
    <!--
    <NuxtLink to="/graphotherapie" >La Graphothérapie</NuxtLink>
    <span class="separator">&bull;</span>
    <NuxtLink to="/tarifs" >Mes tarifs</NuxtLink>
    <span class="separator">&bull;</span>
    -->
    <NuxtLink to="/contacts" >Me contacter</NuxtLink>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
  nav {
    display: flex;
    flex-direction: column;
    font-size: 2em;
    align-items: center;
    justify-content: center;
    column-gap: 2%;
    width: 100vw;
    z-index: 1;
  }

  nav a {
    text-decoration: none;
    color: black;
  }

  nav a.router-link-active {
    text-decoration-line: underline;
  }

  .separator {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    nav {
      flex-direction: row;
    }

    .separator {
      display: block;
    }
  }
</style>