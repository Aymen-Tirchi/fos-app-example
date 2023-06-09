<template>
  <div class="anime-list-container">
    <h1 class="title">Anime List</h1>
    <div v-if="animeList.length === 0" class="no-anime">No anime found.</div>
    <div v-else class="anime-card-list">
      <anime-card
        v-for="anime in animeList"
        :key="anime.id"
        :anime="anime"
        @save="updateAnime"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AnimeCard from "@/components/AnimeCard.vue";

export default {
  components: {
    AnimeCard,
  },
  computed: {
    ...mapState(["animeList"]),
  },
  methods: {
    ...mapActions(["updateAnime"]),
  },
  created() {
    // Load anime list from local storage
    const storedAnimeList = localStorage.getItem("animeList");
    if (storedAnimeList) {
      this.$store.commit("setAnimeList", JSON.parse(storedAnimeList));
    }
  },
  watch: {
    animeList: {
      deep: true,
      handler(newAnimeList) {
        // Store anime list in local storage
        localStorage.setItem("animeList", JSON.stringify(newAnimeList));
      },
    },
  },
};
</script>

<style scoped>
.anime-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 20px;
}
.title {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
  animation: titleAnimation 0.5s ease;
}

@keyframes titleAnimation {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.no-anime {
  font-size: 18px;
  color: #888;
  margin-top: 20px;
}

.anime-card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}
.anime-card {
  flex: 0 0 calc(25% - 10px);
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .anime-list-container {
    padding: 10px;
  }
}
</style>
