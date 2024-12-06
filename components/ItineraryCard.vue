<!-- components/ItineraryCard.vue -->
<template>
    <div class="card">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <button @click="viewDetails">Visualizza dettagli</button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    description: String
  });
  
  const viewDetails = () => {
    alert('Dettagli dell’itinerario!');
  };
  </script>
  
  <style scoped>
  .card {
      border: 1px solid #ddd;
      padding: 16px;
      margin: 8px;
      border-radius: 8px;
  }
  </style>
  