<template>
    <form @submit="onSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="form.title" type="text" class="form-control" id="title" required>
      </div>
      <div class="form-group">
        <label for="episodes">Number of Episodes</label>
        <input v-model="form.episodes" type="number" class="form-control" id="episodes" required>
      </div>
      <div class="form-group">
        <label for="status">Status</label>
        <select v-model="form.status" class="form-control" id="status" required>
          <option value="OnGoing">OnGoing</option>
          <option value="Finished">Finished</option>
        </select>
      </div>
      <div class="form-group">
        <label for="imgUrl">Image URL</label>
        <input v-model="form.imgUrl" type="text" class="form-control" id="imgUrl" required>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-secondary" @click="closeModal">Cancel</button>
    </form>
  </template>
  
  <script>
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
        form: { ...this.anime },
      };
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        this.$emit("save", { ...this.form });
      },
      closeModal() {
        this.$emit("close");
      },
    },
  };
  </script>
  
  <style>
  </style>
  