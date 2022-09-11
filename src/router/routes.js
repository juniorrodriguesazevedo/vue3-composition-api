import MovieIndex from "../views/Movies/MovieIndex.vue";
import MovieCreate from "../views/Movies/MovieCreate.vue";

const routes = [
  {
    path: "/",
    name: "movie.index",
    component: MovieIndex,
  },
  {
    path: "/criar",
    name: "movie.create",
    component: MovieCreate,
  },
];

export default routes;
