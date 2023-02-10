<template>
  <ul class="breadcrumb" aria-label="Breadcrumb">
    <li><NuxtLink to="/" ariaCurrentValue="page">Accueil</NuxtLink></li>
    <span class="separator">&bull;</span>
    <!--
    <NuxtLink to="/graphotherapie" >La Graphothérapie</NuxtLink>
    <span class="separator">&bull;</span>
    <NuxtLink to="/tarifs" >Mes tarifs</NuxtLink>
    <span class="separator">&bull;</span>
    -->
    <li><NuxtLink to="/contacts" ariaCurrentValue="page">Me contacter</NuxtLink></li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>
  .breadcrumb {
    display: flex;
    flex-direction: column;
    font-size: 2em;
    align-items: center;
    justify-content: center;
    column-gap: 2%;
    width: 100vw;
    z-index: 1;
    position: fixed;
    bottom: 2%;
  }

  .breadcrumb a {
    text-decoration: none;
    color: black;
  }

  .breadcrumb li
  {
    list-style-type: none;
  }

  .breadcrumb a.router-link-active {
    text-decoration-line: underline;
  }

  .separator {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .breadcrumb {
      flex-direction: row;
    }

    .separator {
      display: block;
    }
  }
</style>