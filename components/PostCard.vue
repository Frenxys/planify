<template>
    <div class="post-card">
      <h3>{{ author }}</h3>
      <p>{{ content }}</p>
      <span>{{ date }}</span>
    </div>
  </template>
  
  <script setup>
  defineProps({
    author: String,
    content: String,
    date: String
  });
  </script>
  
  <style scoped>
  .post-card {
      background: #1e1e1e;
      border: 1px solid #ffcc00;
      border-radius: 5px;
      padding: 15px;
      margin: 10px 0;
  }
  
  .post-card h3 {
      color: #ffcc00;
  }
  
  .post-card p {
      color: #cccccc;
  }
  
  .post-card span {
      font-size: 0.8em;
      color: #888888;
  }
  </style>
  