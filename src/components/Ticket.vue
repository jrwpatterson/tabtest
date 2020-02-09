<template>
  <div>
    <div class="number-container" v-bind:class="{selected: isSelected}">{{ ticketNumber }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";

export default Vue.extend({
  props: {
    ticketNumber: Number,
    prizeNumbers: Array
  },
  computed: {
    isSelected: function() {
      return (
        _.findIndex(
          this.prizeNumbers,
          ticket => ticket === this.ticketNumber
        ) >= 0
      );
    }
  }
});
</script>

<style lang="scss" scoped>
.number-container {
  width: 35px;
  height: 35px;
  border-style: solid;
  border-width: 1px;
  border-color: #d0d0d0;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 12px;
  font-weight: 500;
}
.selected {
  color: #5b3089;
  font-weight: 900;
  background-image: url("https://www.thelott.com/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/ico-strike.svg");
}
</style>