<template>
  <div class="col-12 text-bg-success bg-gradient rounded-top py-2">
    <div>
      Selezionati: {{ sumOfResults() }} / {{ selectedItems }} = {{sumOfResults() / selectedItems}}
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
