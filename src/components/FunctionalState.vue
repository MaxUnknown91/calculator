<template>
  <div class="container mt-3 bg-body-secondary">
    <div class="row">
      <ItemRecap
        v-model:firstResult="count"
        v-model:selectedItems="items"
        sectionTitle="Functional Status"
      />
      <div class="col-12 mb-3">
        <div>Selezionate: {{ count }} / 22</div>
        <div>Quali: {{ selected }}</div>
      </div>
      <div class="col-4">
        <h4>Activities of Daily Living</h4>
        <div
          class="form-check"
          v-for="medical in medicals.slice(0, 7)"
          :key="medical.id"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :value="medical.id"
            :id="medical.id"
            @click="addSelected($event, medical.title)"
          />
          <label
            class="form-check-label"
            :for="medical.id"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-custom-class="custom-tooltip"
            :data-bs-title="medical.tooltip"
          >
            {{ medical.title }}
          </label>
        </div>
      </div>

      <div class="col-4">
        <h4>Instrumental Activities of Daily Living</h4>
        <div
          class="form-check"
          v-for="medical in medicals.slice(7, 14)"
          :key="medical.id"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :value="medical.id"
            :id="medical.id"
            @click="addSelected($event, medical.title)"
          />
          <label
            class="form-check-label"
            :for="medical.id"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-custom-class="custom-tooltip"
            :data-bs-title="medical.tooltip"
          >
            {{ medical.title }}
          </label>
        </div>
      </div>

      <div class="col-4">
        <h4>Ulteriori items da definire</h4>
        <div
          class="form-check"
          v-for="medical in medicals.slice(14, 22)"
          :key="medical.id"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :value="medical.id"
            :id="medical.id"
            @click="addSelected($event, medical.title)"
          />
          <label
            class="form-check-label"
            :for="medical.id"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-custom-class="custom-tooltip"
            :data-bs-title="medical.tooltip"
          >
            {{ medical.title }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tooltip } from "bootstrap";
import ItemRecap from "./ItemRecap.vue";

export default {
  name: "FunctionalState",

  components: {
    ItemRecap,
  },

  data() {
    return {
      count: 0,
      medicals: [
        {
          id: 0,
          title: "Feeding",
          tooltip: "Tooltip",
        },
        {
          id: 1,
          title: "Dressing/undressing",
          tooltip: "Tooltip",
        },
        {
          id: 2,
          title: "Grooming",
          tooltip: "Tooltip",
        },
        {
          id: 3,
          title: "Walking (or use of a walker)",
          tooltip: "Tooltip",
        },
        {
          id: 4,
          title: "Getting in and out of bed",
          tooltip: "Tooltip",
        },
        {
          id: 5,
          title: "Toileting",
          tooltip: "Tooltip",
        },
        {
          id: 6,
          title: "Bathing or shower",
          tooltip: "Tooltip",
        },
        {
          id: 7,
          title: "Using telephone",
          tooltip: "Tooltip",
        },
        {
          id: 8,
          title: "Using transportation",
          tooltip: "Tooltip",
        },
        {
          id: 9,
          title: "Shopping",
          tooltip: "Tooltip",
        },
        {
          id: 10,
          title: "Preparing own meals",
          tooltip: "Tooltip",
        },
        {
          id: 11,
          title: "Housework",
          tooltip: "Tooltip",
        },
        {
          id: 12,
          title: "Taking own medications",
          tooltip: "Tooltip",
        },
        {
          id: 13,
          title: "Managing money",
          tooltip: "Tooltip",
        },
        {
          id: 14,
          title: "Da decidere",
          tooltip: "Tooltip",
        },
        {
          id: 15,
          title: "Da decidere",
          tooltip: "Tooltip",
        },
        {
          id: 16,
          title: "Da decidere",
          tooltip: "Tooltip",
        },
        {
          id: 17,
          title: "Da decidere",
          tooltip: "Tooltip",
        },
        {
          id: 18,
          title: "Da decidere",
          tooltip: "Sensory impairment is a type of motherfucker bitch",
        },
        {
          id: 19,
          title: "Da decidere",
          tooltip: "Tooltip",
        },
        {
          id: 20,
          title: "Da decidere",
          tooltip: "Tooltip",
        },
        {
          id: 21,
          title: "Da decidere",
          tooltip: "Tooltip",
        },
      ],
      oldmedicals: [
        "Angina",
        "Anxiety disorder",
        "Arthritis",
        "Asthma",
        "Atrial fibrillation/flutter",
        "Cancer within 5 years",
        "Chronic kidney disease (eGFR<60)",
        "COPD",
        "Coronary artery disease",
        "Degenerative spine disease",
        "Dementia",
        "Depression",
        "Diabetes",
        "Fall within the past year",
        "Heart failure",
        "Hypertension",
        "Myocardial infarction",
        "Peripheral vascular disease",
        "Sensory impairment",
        "Stroke/TIA",
        "Use of >=5 prescription drugs",
      ],
      selected: [],
      items: 22,
    };
  },

  methods: {
    addSelected: function (el, val) {
      if (el.target.checked == true) {
        this.count++;
        this.selected.push(val);
      } else {
        this.count--;
        this.selected.shift(val);
      }
    },
  },

  mounted() {
    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    });
    this.$emit('functionalStateItems', this.items)
  },

  updated() {
    this.$emit('functionalPoints', this.count)
  }
};
</script>

<style scoped>
.custom-tooltip {
  --bs-tooltip-bg: var(--bs-primary);
}
</style>
