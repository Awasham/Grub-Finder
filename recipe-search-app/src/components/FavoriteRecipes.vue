<template>
  <div>
    <h1>Favorite Recipes</h1>
    <ul>
      <li v-for="recipe in favoriteRecipes" :key="recipe.id">
        <h2>{{ recipe.title }}</h2>
        <button @click="removeFromFavorites(recipe.id)">Remove from Favorites</button>
      </li>
    </ul>
    <p v-if="favoriteRecipes.length === 0">No favorite recipes found.</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      favoriteRecipes: state => state.favoriteRecipes
    })
  },
  methods: {
    removeFromFavorites(recipeId) {
      this.$store.commit('REMOVE_FROM_FAVORITES', recipeId);
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 1em;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 1em 0;
}
button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
}
button:hover {
  background-color: #ff1a1a;
}
</style>