import { createStore } from 'vuex';

export default createStore({
  state: {
    recipes: [],
    favoriteRecipes: []
  },
  mutations: {
    setRecipes(state, recipes) {
      state.recipes = recipes;
    },
    addFavoriteRecipe(state, recipe) {
      state.favoriteRecipes.push(recipe);
    },
    removeFavoriteRecipe(state, recipeId) {
      state.favoriteRecipes = state.favoriteRecipes.filter(recipe => recipe.id !== recipeId);
    }
  },
  actions: {
    fetchRecipes({ commit }, ingredients) {
      // Here you would typically make an API call to fetch recipes based on ingredients
      // For example:
      // axios.get(`api/recipes?ingredients=${ingredients}`).then(response => {
      //   commit('setRecipes', response.data);
      // });
    },
    saveFavoriteRecipe({ commit }, recipe) {
      commit('addFavoriteRecipe', recipe);
    },
    deleteFavoriteRecipe({ commit }, recipeId) {
      commit('removeFavoriteRecipe', recipeId);
    }
  },
  getters: {
    allRecipes: state => state.recipes,
    allFavoriteRecipes: state => state.favoriteRecipes
  }
});