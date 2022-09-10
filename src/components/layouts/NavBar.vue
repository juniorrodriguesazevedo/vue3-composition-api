<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-md justify-content-center">
      <nav class="nav">
        <router-link class="nav-link" :to="{ name: 'movie.index' }">
          Filmes
        </router-link>
        <router-link class="nav-link" :to="{ name: 'movie.create' }">
          Criar
        </router-link>
      </nav>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-link {
  color: white;
}
</style>