<template>
  <header class="navbar">
    <div>
      <nav>
        <RouterLink to="/">Posts</RouterLink> - 
        <RouterLink to="/authors">Authors</RouterLink> - 
        <RouterLink to="/others">Others</RouterLink>
      </nav>
    </div>
  </header> 

  <RouterView />
</template>

<style>
  .navbar {
    background-color: lightgreen;
    padding: 1.2rem;
  }
</style>