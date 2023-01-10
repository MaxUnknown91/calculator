<template>
  <div class="container mt-3 bg-body-secondary">
    <div class="row">
      <ItemRecap
        v-model:firstResult="points"
        v-model:selectedItems="items"
        sectionTitle="Performance Tests"
      />
    </div>
    <div class="row">
      <div class="col-4">
        Weight loss > 10lbs in past year
        <font-awesome-icon
          class="btn btn-sm"
          :class="firstElement ? 'btn-success' : 'btn-outline-success'"
          icon="check"
          @click="(firstElement = true), (firstElementPoints = 1), pointsSum()"
        />
        <font-awesome-icon
          class="btn btn-sm"
          :class="
            firstElement == null || firstElement == true
              ? 'btn-outline-danger'
              : 'btn-danger'
          "
          icon="xmark"
          @click="(firstElement = false), (firstElementPoints = 0), pointsSum()"
        />
      </div>
      <div class="col-4">
        Body mass index major than 21kg/m<sup>²</sup>
        <font-awesome-icon
          class="btn btn-sm"
          :class="secondElement ? 'btn-success' : 'btn-outline-success'"
          icon="check"
          @click="
            (secondElement = true), (secondElementPoints = 1), pointsSum()
          "
        />
        <font-awesome-icon
          class="btn btn-sm"
          :class="
            secondElement == null || secondElement == true
              ? 'btn-outline-danger'
              : 'btn-danger'
          "
          icon="xmark"
          @click="
            (secondElement = false), (secondElementPoints = 0), pointsSum()
          "
        />
      </div>
      <div class="col-4">
        Serum albumin major than 3.5 g/L
        <font-awesome-icon
          class="btn btn-sm"
          :class="thirdElement ? 'btn-success' : 'btn-outline-success'"
          icon="check"
          @click="(thirdElement = true), (thirdElementPoints = 1), pointsSum()"
        />
        <font-awesome-icon
          class="btn btn-sm"
          :class="
            thirdElement == null || thirdElement == true
              ? 'btn-outline-danger'
              : 'btn-danger'
          "
          icon="xmark"
          @click="(thirdElement = false), (thirdElementPoints = 0), pointsSum()"
        />
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
};
</script>

<style scoped></style>
