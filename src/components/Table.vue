<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Ano</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movies" :key="movie.id">
          <th>{{ movie.id }}</th>
          <td>{{ movie.name }}</td>
          <td>{{ movie.year }}</td>
          <td class="actions">
            <button class="btn btn-primary">Editar</button>
            <button class="btn btn-danger">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
  table {
    width: 900px;
  }

  .actions {
    width: 175px;
  }
</style>