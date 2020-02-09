<template>
  <div class="row-outer">
    <Ticket
      v-bind:key="item"
      v-for="item in tickets"
      v-bind:prizeNumbers="prizeNumbers"
      v-bind:ticketNumber="item"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Ticket from "./Ticket.vue";
export default Vue.extend({
  props: {
    tickets: Array,
    prizeNumbers: Array
  },
  components: {
    Ticket
  }
});
</script>

<style scoped lang="scss">
.row-outer {
  display: flex;
  flex-direction: row;
}
</style>
