<template>
  <div class="container mt-3">
    <div class="row">
      <ItemRecap
        v-model:firstResult="count"
        v-model:selectedItems="items"
        sectionTitle="Medical History"
      />
    </div>
  </div>
  <div
    class="container bg-light bg-gradient border border-success rounded-bottom"
  >
    <div class="row my-4">
      <div class="col-12">
        <!-- <div>Quali: {{ selected }}</div> -->
      </div>
      <div class="col-12 col-md-6">
        <div
          class="form-check"
          v-for="medical in medicals.slice(0, 13)"
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
      <div class="col-12 col-md-6">
        <div
          class="form-check"
          v-for="medical in medicals.slice(13,25)"
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
      <!-- <div class="col-4 ">
        <div
          class="form-check"
          v-for="medical in medicals.slice(16, 25)"
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
      </div> -->
    </div>
  </div>
  
</template>

<script>
import { Tooltip } from "bootstrap";
import ItemRecap from "./ItemRecap.vue";

export default {
  name: "MedicalHistory",

  components: {
    ItemRecap,
  },

  data() {
    return {
      count: 0,
      medicals: [
        {
          id: 0,
          title: "Cognitive impairment or dementia",
          tooltip: "",
        },
        {
          id: 1,
          title: "Severe disability",
          tooltip: "",
        },
        {
          id: 2,
          title: "Cerebrovascular disease",
          tooltip: "",
        },
        {
          id: 3,
          title: "Solid neoplasm",
          tooltip: "",
        },
        {
          id: 4,
          title: "COPD, emphysema and chronic bronchitis",
          tooltip: "",
        },
        {
          id: 5,
          title: "Ischemic heart disease",
          tooltip: "",
        },
        {
          id: 6,
          title: "Heart failure",
          tooltip: "",
        },
        {
          id: 7,
          title: "Chronic kidney disease",
          tooltip: "",
        },
        {
          id: 8,
          title: "Atrial fibrillation",
          tooltip: "",
        },
        {
          id: 9,
          title: "Parkinson's disease and parkinsonism",
          tooltip: "",
        },
        {
          id: 10,
          title: "Previous hip fracture",
          tooltip: "",
        },
        {
          id: 11,
          title: "Anemia",
          tooltip: "",
        },
        {
          id: 12,
          title: "Partial/total financial support for medical expenses",
          tooltip: "",
        },
        {
          id: 13,
          title: "Oxygen prescription in the last 6 months",
          tooltip: "",
        },
        {
          id: 14,
          title: "Any hospital overnight staying in the last 6 months",
          tooltip: "",
        },
        {
          id: 15,
          title: "Chronic ulcers of the skin",
          tooltip: "",
        },
        {
          id: 16,
          title: "Bradycardias and rhythm conduction disorders",
          tooltip: "",
        },
        {
          id: 17,
          title: "Other neurological diseases*",
          tooltip:
            "This category includes among others: paraplegia, chorea, cerebellar degeneration, Duchenne palsy, sequelae of meningitis, unspecific neuro-myopathy, familiar palsy, ataxia, dystonia, cerebral stenosis,several congenital malformations of the nervous system.",
        },
        {
          id: 18,
          title: "Constipation",
          tooltip: "",
        },
        {
          id: 19,
          title: "Prescription of LMWH in the last 6 months",
          tooltip: "",
        },
        {
          id: 20,
          title: "Peripheral vascular diseases",
          tooltip: "",
        },
        {
          id: 21,
          title: "Nutritional problems",
          tooltip: "",
        },
        {
          id: 22,
          title: "Diabetes",
          tooltip: "",
        },
        {
          id: 23,
          title: "Schizophrenia and other delusional diseases",
          tooltip: "",
        },
        {
          id: 24,
          title: "Edema",
          tooltip: "",
        },
      ],
      oldmedicals: [
        "Cognitive impairment or dementia",
        "Severe disability",
        "Cerebrovascular disease",
        "Solid neoplasm",
        "COPD, emphysema and chronic bronchitis",
        "Ischemic heart disease",
        "Heart failure",
        "Chronic kidney disease",
        "Atrial fibrillation",
        "Parkinson's disease and parkinsonism",
        "Previous hip fracture",
        "Anemia",
        "Partial/total financial support for medical expenses",
        "Oxygen prescription in the last 6 months",
        "Any hospital overnight staying in the last 6 months",
        "Chronic ulcers of the skin",
        "Bradycardias and rhythm conduction disorders",
        "Other neurological diseases*",
        "Constipation",
        "Prescription of LMWH in the last 6 months",
        "Peripheral vascular diseases",
        "Nutritional problems",
        "Diabetes",
        "Schizophrenia and other delusional diseases",
        "Edema",
      ],
      selected: [],
      items: 25,
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
    this.$emit("medicalHistoryItems", this.items);
  },

  updated() {
    this.$emit("medicalPoints", this.count);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-tooltip {
  --bs-tooltip-bg: var(--bs-primary);
}
</style>
