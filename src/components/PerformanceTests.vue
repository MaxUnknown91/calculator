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
        <input
          type="range"
          class="form-range"
          min="18"
          max="30"
          step="1"
          :value="valoreScelto"
          id="myRange"
          @input="(valoreScelto = $event.target.value), inputValueMSE($event)"
          :disabled="!isActive"
        />
        <div>Risultato MSE: {{ valoreScelto }}</div>
        <div>Punti: {{ MSEresult }}</div>
      </div>
      <div class="col-5">
        <h4>Dominant Handgrip</h4>
        <input
          type="checkbox"
          @change="(isActiveTwo = !isActiveTwo), checkSection()"
        />
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
          Cutoff Maschile
          <font-awesome-icon
            class="btn btn-sm"
            :class="maleCheck ? 'btn-success' : 'btn-outline-success'"
            icon="check"
            @click="
              (maleCheck = true),
                (handgripResult = 0.27),
                (this.femaleCheck = null)
            "
          />
          <font-awesome-icon
            class="btn btn-sm"
            :class="
              maleCheck == null || maleCheck == true
                ? 'btn-outline-danger'
                : 'btn-danger'
            "
            icon="xmark"
            @click="
              (maleCheck = false),
                (handgripResult = 0),
                (this.femaleCheck = null)
            "
          />
        </div>
        <div v-if="maleOrFemale == false">
          Cutoff Femminile<font-awesome-icon
            class="btn btn-sm"
            :class="femaleCheck ? 'btn-success' : 'btn-outline-success'"
            icon="check"
            @click="
              (femaleCheck = true),
                (handgripResult = 0.16),
                (this.maleCheck = null)
            "
          />
          <font-awesome-icon
            class="btn btn-sm"
            :class="
              femaleCheck == null || femaleCheck == true
                ? 'btn-outline-danger'
                : 'btn-danger'
            "
            icon="xmark"
            @click="
              (femaleCheck = false),
                (handgripResult = 0),
                (this.maleCheck = null)
            "
          />
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
          break;
        case this.isActive && !this.isActiveTwo:
          this.items = 1;
          this.maleCheck = null;
          this.femaleCheck = null;
          this.handgripResult = 0;
          break;
        case !this.isActive && this.isActiveTwo:
          this.items = 1;
          this.MSEresult = 0;
          this.maleOrFemale = null;
          break;
        case !this.isActive && !this.isActive:
          this.items = 0;
          this.MSEresult = 0;
          this.maleOrFemale = null;
          this.maleCheck = null;
          this.femaleCheck = null;
          this.handgripResult = 0;
          break;
      }
    },
    sexCheck: function () {
      switch (this.maleOrFemale) {
        case true:
          return 'Uomo'
        case false:
          return 'Donna'
        default:
          return ''
      }
    },
  },

};
</script>

<style scoped></style>
