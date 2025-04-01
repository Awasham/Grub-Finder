<template>
  <div>
    <h1>Your Favorite Recipes</h1>
    <FavoriteRecipes />
  </div>
</template>

<script>
import FavoriteRecipes from '../components/FavoriteRecipes.vue';

export default {
  components: {
    FavoriteRecipes
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>