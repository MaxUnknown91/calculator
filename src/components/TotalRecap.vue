<template>
  <MedicalHistory @medicalHistoryItems="getItems" />
  <FunctionalState @functionalStateItems="getItems" />
  <PerformanceTests @performanceTestsItems="getPerformanceItems" />
  <NutritionalStatus />
  <div class="container mt-3">
    <div class="row">
      <div class="col-12 bg-dark-subtle">
        <div class="col-4">Number of positive items: {{ sentItems }}</div>
        <div class="col-4">Number of items assessed: {{}}</div>
        <div class="col-4">CGA-FI (range 0.0-1.0): {{}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import MedicalHistory from "./MedicalHistory.vue";
import FunctionalState from "./FunctionalState.vue";
import PerformanceTests from "./PerformanceTests.vue";
import NutritionalStatus from "./NutritionalStatus.vue";

export default {
  name: "TotalRecap",

  components: {
    MedicalHistory,
    FunctionalState,
    PerformanceTests,
    NutritionalStatus,
  },

  data() {
    return {
      sentItems: 0,
      performanceItems: 0,
    };
  },

  methods: {
    getItems: function (el) {
      this.sentItems = this.sentItems + el;
    },
  },
};
</script>

<style></style>
