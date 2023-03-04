<template>
  <div class="center">
    <h1>Mes tarifs</h1>

    <div class="tarifs">
      <div class="tarif">
        10€
      </div>
      <div class="tarif">
        10€
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  position: fixed;
  top: 2%;
}

.tarifs {
  min-width: 90vw;
  min-height: 80%;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

.tarif {
  border: 2px solid #000000;
  border-radius: 15px;
}
</style>

<script setup>
useSchemaOrg([
  defineWebPage({
    "@type": "ContactPage",
    name: "Me contacter",
    description:
      "Contactez-moi par téléphone, email ou sur les réseaux sociaux",
  }),
]);

definePageMeta({
  title: "Mes tarfis",
  meta: [
    {
      name: "description",
      content: "Description de mes tarifs et des différentes formules",
    },
  ],
});
</script>