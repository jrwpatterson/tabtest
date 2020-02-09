<template>
  <div class="ticket-grid">
    <TicketRow
      v-bind:prizeNumbers="ticketNumbers"
      v-bind:key="item"
      v-for="item in primeNumbers"
      v-bind:tickets="item"
    />
    <div class="select-powerball">SELECT YOUR POWERBALL</div>
    <TicketRow
      v-bind:prizeNumbers="powerBalls"
      v-bind:key="`p${item}`"
      v-for="item in powerNumbers"
      v-bind:tickets="item"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";
import TicketRow from "./TicketRow.vue";

const createChunks = (maxNumber: number) => {
  const numberArray = [];
  for (let i = 1; i <= maxNumber; i++) {
    numberArray.push(i);
  }
  return _.chunk(numberArray, 10);
};

export default Vue.extend({
  name: "TicketGrid",
  components: { TicketRow },
  props: {
    powerBalls: Array,
    ticketNumbers: Array
  },
  computed: {
    primeNumbers: function() {
      return createChunks(35);
    },
    powerNumbers: function() {
      return createChunks(20);
    }
  }
});
</script>

<style lang="scss" scoped>
.ticket-grid {
  width: 370px;
  align-self: center;
  margin-top: 20px;
}
.select-powerball {
  color: #ffffff;
  background-color: #63757f;
  font-size: 12px;
  font-weight: 700;
  padding-top: 3px;
  padding-bottom: 3px;
}
</style>
