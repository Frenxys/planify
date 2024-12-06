<!-- pages/itineraries/[id].vue -->
<template>
    <div>
      <h1>Itinerario {{ id }}</h1>
      <p>Dettagli dell'itinerario in arrivo...</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const { id } = route.params;
  </script>
  