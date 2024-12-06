<!-- pages/index.vue -->
<template>
    <div>
      <h1>Benvenuto su Planify</h1>
      <ItineraryCard
        v-for="itinerary in itineraries"
        :key="itinerary.id"
        :id="itinerary.id"
        :title="itinerary.title"
        :description="itinerary.description"
      />
    </div>
  </template>
  
  <script setup>
  const itineraries = [
    { id: 1, title: 'Viaggio a Roma', description: 'Un tour di 3 giorni nella città eterna' },
    { id: 2, title: 'Weekend a Parigi', description: 'Scopri la città dell\'amore in 2 giorni' }
  ];
  </script>
  