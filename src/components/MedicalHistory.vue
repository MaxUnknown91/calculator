<template>
  <div class="container mt-3 bg-body-secondary">
    <div class="row">
      <ItemRecap
        v-model:firstResult="count"
        v-model:selectedItems="items"
        sectionTitle="Medical History"
      />
      <div class="col-12 mb-3">
        <div>Selezionate: {{ count }} / 21</div>
        <div>Quali: {{ selected }}</div>
      </div>
      <div class="col-4">
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
        <div
          class="form-check"
          v-for="medical in medicals.slice(14, 21)"
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
          title: "Angina",
          tooltip: "Angina is a type of motherfucker bitch",
        },
        {
          id: 1,
          title: "Anxiety disorder",
          tooltip: "Anxiety disorder is a type of motherfucker bitch",
        },
        {
          id: 2,
          title: "Arthritis",
          tooltip: "Arthritis is a type of motherfucker bitch",
        },
        {
          id: 3,
          title: "Asthma",
          tooltip: "Asthma is a type of motherfucker bitch",
        },
        {
          id: 4,
          title: "Atrial fibrillation/flutter",
          tooltip:
            "Atrial fibrillation/flutter is a type of motherfucker bitch",
        },
        {
          id: 5,
          title: "Cancer within 5 years",
          tooltip: "Cancer within 5 years is a type of motherfucker bitch",
        },
        {
          id: 6,
          title: "Chronic kidney disease (eGFR<60)",
          tooltip:
            "Chronic kidney disease (eGFR<60) is a type of motherfucker bitch",
        },
        {
          id: 7,
          title: "COPD",
          tooltip: "COPD is a type of motherfucker bitch",
        },
        {
          id: 8,
          title: "Coronary artery disease",
          tooltip: "Coronary artery disease is a type of motherfucker bitch",
        },
        {
          id: 9,
          title: "Degenerative spine disease",
          tooltip: "Degenerative spine disease is a type of motherfucker bitch",
        },
        {
          id: 10,
          title: "Dementia",
          tooltip: "Dementia is a type of motherfucker bitch",
        },
        {
          id: 11,
          title: "Depression",
          tooltip: "Depression is a type of motherfucker bitch",
        },
        {
          id: 12,
          title: "Diabetes",
          tooltip: "Diabetes is a type of motherfucker bitch",
        },
        {
          id: 13,
          title: "Fall within the past year",
          tooltip: "Fall within the past year is a type of motherfucker bitch",
        },
        {
          id: 14,
          title: "Heart failure",
          tooltip: "Heart failure is a type of motherfucker bitch",
        },
        {
          id: 15,
          title: "Hypertension",
          tooltip: "Hypertension is a type of motherfucker bitch",
        },
        {
          id: 16,
          title: "Myocardial infarction",
          tooltip: "Myocardial infarction is a type of motherfucker bitch",
        },
        {
          id: 17,
          title: "Peripheral vascular disease",
          tooltip:
            "Peripheral vascular disease is a type of motherfucker bitch",
        },
        {
          id: 18,
          title: "Sensory impairment",
          tooltip: "Sensory impairment is a type of motherfucker bitch",
        },
        {
          id: 19,
          title: "Stroke/TIA",
          tooltip: "Stroke/TIA is a type of motherfucker bitch",
        },
        {
          id: 20,
          title: "Use of >=5 prescription drugs",
          tooltip:
            "Use of >=5 prescription drugs is a type of motherfucker bitch",
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
      items: 21,
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
    this.$emit('medicalHistoryItems', this.items)
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-tooltip {
  --bs-tooltip-bg: var(--bs-primary);
}
</style>
