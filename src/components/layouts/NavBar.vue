<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-md">
      <nav class="nav">
        <router-link class="nav-link text-white" :to="{ name: 'movie.index' }">
          Inicio
        </router-link>
        <router-link class="nav-link text-white" :to="{ name : 'movie.create' }">
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

</style>