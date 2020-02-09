<template>
  <div class="container">
    <div>Results</div>
    <div class="ball-container" v-if="powerData.PrimaryNumbers.length">
      <Balls
        v-bind:key="item"
        v-for="item in powerData.PrimaryNumbers"
        v-bind:value="item"
      />
      <Balls
        v-bind:value="powerData.SecondaryNumbers[0]"
        v-bind:isPowerBall="true"
      />
    </div>
    <div v-else>
      <button data-testid="get.results" @click="dataFetch">
        Auto Fill Results
      </button>
      no data
    </div>

    <TicketGrid
      v-bind:powerBalls="powerData.SecondaryNumbers"
      v-bind:ticketNumbers="powerData.PrimaryNumbers"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import _ from "lodash";
import Balls from "./Balls.vue";
import TicketGrid from "./TicketGrid.vue";
import { DataProps, LotteryData, DrawResult } from "./interfaces";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function(): DataProps {
    return {
      powerData: {
        PrimaryNumbers: [],
        SecondaryNumbers: []
      }
    };
  },
  components: {
    Balls,
    TicketGrid
  },
  methods: {
    async dataFetch() {
      const lotteryData = await axios.post<LotteryData>(
        "https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults",
        {
          CompanyId: "GoldenCasket",
          MaxDrawCountPerProduct: 1,
          OptionalProductFiler: ["Powerball"]
        }
      );
      this.powerData = _.find(
        lotteryData.data.DrawResults,
        (result: DrawResult) => result.ProductId === "Powerball"
      );
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ball-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.aligner {
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 320px;
  align-self: center;
}
</style>
