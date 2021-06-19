import axios from "axios";
const api_url = "http://localhost:3000/api/character";

export default {
  async fetchCharacters(context) {
    const response = await axios.get(api_url);
    context.commit("setCharacters", response.data);
  },
};
