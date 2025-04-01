<template>
  <div class="recipe-search">
    <h1>Recipe Search</h1>
    <input
      type="text"
      v-model="ingredient"
      placeholder="Enter ingredients (comma separated)"
    />
    <button @click="searchRecipes">Search</button>
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <RecipeList v-if="recipes.length" :recipes="recipes" @save-favorite="saveFavorite" />
  </div>
</template>

<script>
import RecipeList from './RecipeList.vue';

export default {
  components: {
    RecipeList,
  },
  data() {
    return {
      ingredient: '',
      recipes: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async searchRecipes() {
      if (!this.ingredient) return;

      this.loading = true;
      this.error = null;

      try {
        const response = await fetch(`https://api.example.com/recipes?ingredients=${this.ingredient}`);
        if (!response.ok) throw new Error('Failed to fetch recipes');
        this.recipes = await response.json();
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    saveFavorite(recipe) {
      this.$emit('save-favorite', recipe);
    },
  },
};
</script>

<style scoped>
.recipe-search {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
.error {
  color: red;
}
</style>