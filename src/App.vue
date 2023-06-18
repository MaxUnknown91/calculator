<template>
  <div class="mb-5">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-6">
          <div class="display-4" v-if="lang==true">Frailty Index (PC-FI)</div>
          <div class="display-4" v-else>Indice di fragilità (PC-FI)</div>
        </div>
        <div class="col-3 d-flex flex-column-reverse">
          <div @click="lang=true"><img src="./assets/united-kingdom.png" alt="flag-uk" style="width:30px"></div>
          <div @click="lang=false"><img src="./assets/italy.png" alt="flag-it" style="width:30px"></div>
        </div>
      </div>
    </div>
    <TotalRecap :langChoice="lang" />
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6"></div>
        <div class="col-12 col-md-6 mt-2" v-if="lang==true">
          <em> {{ calceEng }}</em>
        </div>
        <div class="col-12 col-md-6 mt-2" v-else>
          <em> {{ calceIta }}</em>
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
  data() {
    return {
      lang: false,
      calceEng: `Vetrano DL, Zucchelli A, Onder G, et al. Frailty detection among
              primary care older patients through the Primary Care Frailty Index
              (PC-FI). Sci Rep. 2023;13(1):3543. Published 2023 Mar 2.
              doi:10.1038/s41598-023-30350-3`,
      calceIta: `Vetrano DL, Zucchelli A, Onder G, et al. rilevazione della fragilità tra i pazienti anziani dell'assistenza primaria attraverso il Primary Cafe Frailty Index
              (PC-FI). Sci Rep. 2023;13(1):3543. Pubblicato il 2 Mar 2023.
              doi:10.1038/s41598-023-30350-3`,
    };
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
