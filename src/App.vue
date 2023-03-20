<template>
  <div class="mb-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="display-4">Frailty Index</div>
        </div>
      </div>
    </div>
    <TotalRecap />
  </div>
</template>

<script>
import TotalRecap from "./components/TotalRecap.vue";

export default {
  name: "App",
  components: {
    TotalRecap,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
