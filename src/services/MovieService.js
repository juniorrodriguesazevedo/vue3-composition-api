import api from "@/configs/api.js";

class MovieService {
  static async getAll() {
    return await api.get("/movies");
  }
}

export default MovieService;
