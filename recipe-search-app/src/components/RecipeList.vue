<template>
  <div class="recipe-list">
    <h2>Recipe List</h2>
    <ul>
      <li v-for="recipe in recipes" :key="recipe.id">
        <h3>{{ recipe.title }}</h3>
        <p>{{ recipe.description }}</p>
        <button @click="saveToFavorites(recipe)">Save to Favorites</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    recipes: {
      type: Array,
      required: true
    }
  },
  methods: {
    saveToFavorites(recipe) {
      this.$store.dispatch('addFavoriteRecipe', recipe);
    }
  }
}
</script>

<style scoped>
.recipe-list {
  padding: 20px;
}
.recipe-list h2 {
  margin-bottom: 10px;
}
.recipe-list ul {
  list-style-type: none;
  padding: 0;
}
.recipe-list li {
  margin-bottom: 15px;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>