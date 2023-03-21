<template>
  <div class="mb-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="display-4">Frailty Index (PC-FI)</div>
        </div>
      </div>
    </div>
    <TotalRecap />
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6"></div>
        <div class="col-12 col-md-6 mt-2">
            <em>
              Vetrano DL, Zucchelli A, Onder G, et al. Frailty detection among
              primary care older patients through the Primary Care Frailty Index
              (PC-FI). Sci Rep. 2023;13(1):3543. Published 2023 Mar 2.
              doi:10.1038/s41598-023-30350-3</em
            >
        </div>
      </div>
    </div>
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
