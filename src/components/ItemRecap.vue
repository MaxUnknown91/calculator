<template>
  <div class="col-12 bg-dark-subtle">
    <div>
      {{ sectionTitle }} Result: {{ sumOfResults() }} / {{ selectedItems }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemRecap",

  props: {
    firstResult: {
      type: Number,
    },
    secondResult: {
      type: Number,
      default: 0
    },
    selectedItems: {
      type: Number,
    },
    sectionTitle: {
      type: String,
      required: true,
    },
  },
  methods: {
    sumOfResults: function () {
      return this.firstResult + this.secondResult;
    },
  },
};
</script>

<style></style>
