<template>
  <div class="container mt-3 bg-body-secondary">
    <div class="row">
      <ItemRecap
        v-model:firstResult="points"
        v-model:selectedItems="items"
        sectionTitle="Nutritional Status"
      />
    </div>
    <div class="row">
      <div class="col-4">
        Weight loss > 10lbs in past year
        <button
          class="btn btn-sm"
          :class="firstElement ? 'btn-success' : 'btn-outline-success'"
          @click="(firstElement = true), (firstElementPoints = 1), pointsSum()"
        >
          No
        </button>
        <button
          class="btn btn-sm"
          :class="
            firstElement == null || firstElement == true
              ? 'btn-outline-danger'
              : 'btn-danger'
          "

          @click="(firstElement = false), (firstElementPoints = 0), pointsSum()"
        >Yes </button>
      </div>
      <div class="col-4">
        Body mass index minor than 21kg/m<sup>²</sup>
        <button
          class="btn btn-sm"
          :class="secondElement ? 'btn-success' : 'btn-outline-success'"

          @click="
            (secondElement = true), (secondElementPoints = 1), pointsSum()
          "
        >No </button>
        <button
          class="btn btn-sm"
          :class="
            secondElement == null || secondElement == true
              ? 'btn-outline-danger'
              : 'btn-danger'
          "

          @click="
            (secondElement = false), (secondElementPoints = 0), pointsSum()
          "
        >Yes </button>
      </div>
      <div class="col-4">
        Serum albumin minor than 3.5 g/L
        <button
          class="btn btn-sm"
          :class="thirdElement ? 'btn-success' : 'btn-outline-success'"

          @click="(thirdElement = true), (thirdElementPoints = 1), pointsSum()"
        >No </button>
        <button
          class="btn btn-sm"
          :class="
            thirdElement == null || thirdElement == true
              ? 'btn-outline-danger'
              : 'btn-danger'
          "

          @click="(thirdElement = false), (thirdElementPoints = 0), pointsSum()"
        >Yes </button>
      </div>
    </div>
  </div>
</template>

<script>
import ItemRecap from "./ItemRecap.vue";

export default {
  components: {
    ItemRecap,
  },
  data() {
    return {
      items: 3,
      points: 0,
      firstElement: null,
      firstElementPoints: 0,
      secondElement: null,
      secondElementPoints: 0,
      thirdElement: null,
      thirdElementPoints: 0,
    };
  },
  methods: {
    pointsSum: function () {
      return (this.points =
        this.firstElementPoints +
        this.secondElementPoints +
        this.thirdElementPoints);
    },
  },
  mounted() {
    this.$emit("nutritionalItems", this.items);
  },
  updated() {
    this.$emit('nutritionalPoints', this.points)
  }
};
</script>

<style scoped></style>
