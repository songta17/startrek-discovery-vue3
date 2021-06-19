import { createStore } from "vuex";
import apiModule from "@/store/modules/characters/index.js";

const store = createStore({
  modules: {
    characters: apiModule,
  },
});

export default store;
