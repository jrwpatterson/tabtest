<template>
  <div v-bind:class="{ filled: isFilled, powerball: isPowerBall }" class="number-ball">{{ value }}</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    value: Number,
    isPowerBall: Boolean
  },
  computed: {
    isFilled: function() {
      return this.value != null;
    }
  }
});
</script>

<style scoped lang="scss">
.number-ball {
  height: 44px;
  width: 44px;
  border-radius: 22px;
  margin: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: #d0d0d0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -5px 5px -5px #333;

  &.filled {
    color: #ffffff;
    background-color: #1c52a4;
  }

  &.powerball {
    color: #ffffff;
    background-color: #63757f;
  }
}
</style>
