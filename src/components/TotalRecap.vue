<template>
  <MedicalHistory
    @medicalHistoryItems="getItems"
    @medicalPoints="getMedicalPoints"
  />
  <FunctionalState
    @functionalStateItems="getItems"
    @functionalPoints="getFunctionalPoints"
  />
  <NutritionalStatus
    @nutritionalItems="getItems"
    @nutritionalPoints="getNutritionalPoints"
  />
  <PerformanceTests
    @performanceItems="getPerformanceItems"
    @performancePoints="getPerformancePoints"
  />
  <div class="container mt-3 mb-5">
    <div class="row">
      <div class="col-12 bg-dark-subtle">
        <div class="col-4">
          Number of items assessed: {{ sentItems + performanceItems }}
        </div>
        <div class="col-4">
          Number of positive items:
          {{
            getTotalPoints()
          }}
        </div>
        <div class="col-4">CGA-FI (range 0.0-1.0): {{ getCGA() }}</div>
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
      medicalPoints: 0,
      functionalPoints: 0,
      nutritionalPoints: 0,
      performancePoints: 0,
      totalPoints: 0,
      totalItems: 0,
      cgaResult: 0,
    };
  },

  methods: {
    getItems: function (el) {
      this.sentItems = this.sentItems + el;
    },
    getPerformanceItems: function (el) {
      this.performanceItems = el;
    },
    getMedicalPoints: function (el) {
      this.medicalPoints = el;
    },
    getFunctionalPoints: function (el) {
      this.functionalPoints = el;
    },
    getNutritionalPoints: function (el) {
      this.nutritionalPoints = el;
    },
    getPerformancePoints: function (el) {
      this.performancePoints = el;
    },
    getTotalPoints: function () {
      return this.totalPoints =
        this.medicalPoints +
        this.functionalPoints +
        this.nutritionalPoints +
        this.performancePoints;
    },
    getCGA: function () {
      this.totalItems = this.sentItems + this.performanceItems;
      this.cgaResult = this.totalPoints / this.totalItems;
      return this.cgaResult.toFixed(3);
    },
  },
};
</script>

<style></style>
