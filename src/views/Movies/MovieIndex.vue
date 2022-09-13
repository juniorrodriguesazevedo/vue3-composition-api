<template>
  <div>
    <h1>Lista de Filmes</h1>

    <Table :movies="movies" />
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import MovieService from "@/services/MovieService.js";
import { onMounted, ref } from "vue";

export default {
  name: "MovieIndex",
  components: {
    Table,
  },

  setup() {
    const movies = ref([]);

    onMounted(() => {
      MovieService.getAll()
        .then((response) => (movies.value = response.data))
        .catch((error) => console.error(error));
    });

    return {
      movies,
    };
  },
};
</script>

<style>
</style>