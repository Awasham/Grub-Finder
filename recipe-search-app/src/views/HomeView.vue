<template>
  <div class="home">
    <h1>Recipe Search</h1>
    <RecipeSearch @search="fetchRecipes" />
    <RecipeList :recipes="recipes" @save-favorite="saveFavorite" />
  </div>
</template>

<script>
import RecipeSearch from '../components/RecipeSearch.vue';
import RecipeList from '../components/RecipeList.vue';
import { mapState } from 'vuex';

export default {
  components: {
    RecipeSearch,
    RecipeList,
  },
  data() {
    return {
      recipes: [],
    };
  },
  computed: {
    ...mapState(['favoriteRecipes']),
  },
  methods: {
    async fetchRecipes(ingredients) {
      // Call your recipe API here with the ingredients
      // Example: const response = await fetch(`API_URL?ingredients=${ingredients}`);
      // this.recipes = await response.json();
    },
    saveFavorite(recipe) {
      this.$store.dispatch('addFavorite', recipe);
    },
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>