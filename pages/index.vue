<!-- pages/index.vue -->
<template>
    <div>
      <h1>Benvenuto su Planify</h1>
      <p>Il tuo pianificatore di viaggi preferito!</p>
      <ItineraryCard
        title="Viaggio a Roma"
        description="Un tour di 3 giorni nella città eterna"
      />
    </div>
  </template>
  
  <script setup>
  import ItineraryCard from '@/components/ItineraryCard.vue';
  </script>
  