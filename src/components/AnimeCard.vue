<template>
  <div>
    <b-card
      :title="anime.title"
      :img-src="anime.imgUrl"
      :img-alt="`${anime.title}-Image`"
      img-top
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>Number of episodes: {{ anime.episodes }}</b-card-text>
      <b-card-text>Status: {{ anime.status }}</b-card-text>

      <b-button @click="editAnime" variant="outline-primary">Edit</b-button>
    </b-card>

    <b-modal v-model="showEditModal" title="Edit Anime Info">
      <edit-anime-form
        :anime="anime"
        @save="saveAnime"
        @close="showEditModal = false"
      ></edit-anime-form>
    </b-modal>
  </div>
</template>

<script>
import EditAnimeForm from "@/components/EditAnimeForm.vue";

export default {
  props: {
    anime: {
      type: Object,
      default: function () {
        return {
          id: null,
          title: "",
          episodes: 0,
          status: null,
          imgUrl: "",
        };
      },
    },
  },
  data() {
    return {
      showEditModal: false,
    };
  },
  methods: {
    editAnime() {
      this.showEditModal = true;
    },
    saveAnime(updatedAnime) {
  const updatedAnimeCopy = { ...updatedAnime };
  this.$store.dispatch("updateAnime", updatedAnimeCopy);
  this.showEditModal = false;
},

  },
  components: {
    EditAnimeForm,
  },
};
</script>

<style>
</style>
