<template>
  <header>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/community">Community</NuxtLink>
    </nav>
  </header>
  <NuxtPage />
</template>

<style>
header {
    background: #1e1e1e;
    padding: 10px;
    text-align: center;
}

nav a {
    color: #000000;
    margin: 0 15px;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: bold;
    transition: color 0.3s ease;
}


</style>
