import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const state = {
  animeList: [],
};

const mutations = {
  saveAnime(state, anime) {
    state.animeList.push(anime);
  },
  updateAnime(state, updatedAnime) {
    const index = state.animeList.findIndex(
      (anime) => anime.id === updatedAnime.id
    );
    if (index !== -1) {
      state.animeList.splice(index, 1, updatedAnime);
    }
  },
};

const actions = {
  addAnime({ commit }, anime) {
    commit("saveAnime", anime);
  },
  updateAnime({ commit }, updatedAnime) {
    commit("updateAnime", updatedAnime);
  },
};

const getters = {
  animeList: (state) => state.animeList,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
