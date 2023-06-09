<template>
  <div class="container">
    <h1 class="title">Add a new Anime</h1>
    <anime-form></anime-form>
  </div>
</template>
  
  <script>
import AnimeForm from "@/components/AnimeForm.vue";
export default {
  components: { AnimeForm },
};
</script>
  
  <style>
 .title {
  display: flex;
  justify-content: center; /* Horizontally center the title */
  align-items: center; /* Vertically center the title */
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
</style>