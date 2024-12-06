<template>
    <div>
      <h1>Community di Viaggiatori</h1>
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :author="post.author"
        :content="post.content"
        :date="post.date"
      />
      <button @click="addPost">Aggiungi Post</button>
    </div>
  </template>
  
  <script setup>
  const posts = [
    { id: 1, author: 'Mario', content: 'Roma è meravigliosa in primavera!', date: '2024-12-01' },
    { id: 2, author: 'Luca', content: 'Consiglio un weekend a Parigi, il Louvre è fantastico!', date: '2024-12-03' }
  ];
  
  function addPost() {
    // Funzione di esempio per aggiungere nuovi post
    posts.push({
      id: posts.length + 1,
      author: 'Nuovo Utente',
      content: 'Post di esempio!',
      date: new Date().toISOString().split('T')[0]
    });
  }
  </script>
  
  <style scoped>
  h1 {
      text-align: center;
      margin-bottom: 20px;
      color: #ffcc00;
  }
  </style>
  