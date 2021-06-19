<template>
  <div>
    <h1>This is characters page</h1>
    <li v-for="character in allCharacters" :key="character.id">
      {{ character.name }}
    </li>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Character",
  computed: {
    ...mapGetters("characters", ["allCharacters"]),
  },

  methods: {
    ...mapActions("characters", ["fetchCharacters"]),
  },
  created() {
    this.fetchCharacters();
  },
};
</script>
