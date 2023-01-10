<template>
  <div class="container mt-3 bg-body-secondary">
    <div class="row">
      <ItemRecap
        v-model:firstResult="MSEresult"
        v-model:secondResult="handgripResult"
        v-model:selectedItems="items"
        sectionTitle="Performance Tests"
      />
    </div>
    <div class="row">
      <div class="col-5">
        <h4>Mental State Examination</h4>
        <input
          type="checkbox"
          @change="(isActive = !isActive), checkSection()"
        />
        <label for="" class="ms-2"> Abiilita sezione</label>
        <input
          type="range"
          class="form-range"
          min="18"
          max="30"
          step="1"
          :value="valoreScelto"
          id="myRange"
          list="myRangeValues"
          @input="(valoreScelto = $event.target.value), inputValueMSE($event)"
          :disabled="!isActive"
        />
        <div class="d-flex justify-content-between">
          <div>{{ minor }}</div>
          <div>{{ valoreScelto }}</div>
          <div>30</div>
        </div>
        <div>Punti: {{ MSEresult }}</div>
      </div>
      <div class="col-5">
        <h4>Dominant Handgrip</h4>
        <input
          type="checkbox"
          @change="(isActiveTwo = !isActiveTwo), checkSection()"
        /><label for="" class="ms-2"> Abiilita sezione</label>
        <div>
          <font-awesome-icon
            class="btn btn-sm"
            :class="[
              maleOrFemale ? 'btn-primary' : 'btn-outline-primary',
              isActiveTwo ? '' : 'disabled',
            ]"
            @click="maleOrFemale = true"
            icon="mars"
          />
          <font-awesome-icon
            class="btn btn-sm"
            :class="[
              maleOrFemale == false ? 'btn-danger' : 'btn-outline-danger',
              isActiveTwo ? '' : 'disabled',
            ]"
            @click="maleOrFemale = false"
            icon="venus"
          />
        </div>
        <div v-if="maleOrFemale == true">
          {{ cutoffMaschile }}
          <button
            class="btn btn-sm"
            :class="maleCheck ? 'btn-danger' : 'btn-outline-danger'"
            @click="
              (maleCheck = true),
                (handgripResult = 1),
                (this.femaleCheck = null)
            "
          >
            Si
          </button>
          <button
            class="btn btn-sm"
            :class="
              maleCheck == null || maleCheck == true
                ? 'btn-outline-success'
                : 'btn-success'
            "
            @click="
              (maleCheck = false),
                (handgripResult = 0),
                (this.femaleCheck = null)
            "
          >
            No
          </button>
        </div>
        <div v-if="maleOrFemale == false">
          {{ cutoffFemminile }}
          <button
            class="btn btn-sm"
            :class="femaleCheck ? 'btn-danger' : 'btn-outline-danger'"
            icon="check"
            @click="
              (femaleCheck = true),
                (handgripResult = 1),
                (this.maleCheck = null)
            "
          >
            Si
          </button>
          <button
            class="btn btn-sm"
            :class="
              femaleCheck == null || femaleCheck == true
                ? 'btn-outline-success'
                : 'btn-success'
            "
            icon="xmark"
            @click="
              (femaleCheck = false),
                (handgripResult = 0),
                (this.maleCheck = null)
            "
          >
            No
          </button>
        </div>
        <div>Risultato Handgrip: {{ handgripResult }}</div>
        <div>Sesso: {{ sexCheck() }}</div>
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
      valoreScelto: "Da selezionare",
      items: 0,
      hover: false,
      isActive: false,
      MSEresult: 0,
      maleOrFemale: null,
      maleCheck: null,
      femaleCheck: null,
      isActiveTwo: false,
      handgripResult: 0,
      minor: "<= 18",
      totalResult: 0,
      cutoffFemminile: "<= 16kg",
      cutoffMaschile: "<= 27kg",
    };
  },
  methods: {
    inputValueMSE: function (el) {
      if (el.target.value) {
        this.calcoloMSEresult(this.valoreScelto);
      }
    },
    calcoloMSEresult: function (el) {
      switch (true) {
        case el <= 20:
          this.MSEresult = 1;
          break;
        case el > 21 && el <= 24:
          this.MSEresult = 0.7;
          break;
        case el > 24 && el <= 27:
          this.MSEresult = 0.3;
          break;
        case el > 27 && el <= 30:
          this.MSEresult = 0;
          break;
        default:
          break;
      }
    },
    checkSection: function () {
      switch (true) {
        case this.isActive && this.isActiveTwo:
          this.items = 2;
          this.$emit("PerformanceItems", this.items);
          break;
        case this.isActive && !this.isActiveTwo:
          this.items = 1;
          this.maleCheck = null;
          this.femaleCheck = null;
          this.handgripResult = 0;
          this.$emit("PerformanceItems", this.items);
          break;
        case !this.isActive && this.isActiveTwo:
          this.items = 1;
          this.MSEresult = 0;
          this.maleOrFemale = null;
          this.$emit("PerformanceItems", this.items);
          break;
        case !this.isActive && !this.isActive:
          this.items = 0;
          this.MSEresult = 0;
          this.maleOrFemale = null;
          this.maleCheck = null;
          this.femaleCheck = null;
          this.handgripResult = 0;
          this.$emit("PerformanceItems", this.items);
          break;
      }
    },
    sexCheck: function () {
      switch (this.maleOrFemale) {
        case true:
          return "Uomo";
        case false:
          return "Donna";
        default:
          return "";
      }
    },
  },
  updated() {
    this.totalResult = this.MSEresult + this.handgripResult;
    this.$emit("performancePoints", this.totalResult);
  },
};
</script>

<style scoped></style>
