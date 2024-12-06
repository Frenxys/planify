<!-- components/ItineraryCard.vue -->
<template>
    <div class="card">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <NuxtLink :to="'/itineraries/' + id">Visualizza dettagli</NuxtLink>
    </div>
  </template>
  
  <script setup>
  defineProps({
    id: Number,
    title: String,
    description: String
  });
  </script>
  