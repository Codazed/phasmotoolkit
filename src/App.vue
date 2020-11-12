<template>
  <v-app>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <v-checkbox v-for="e in evidence" :key="e" :label="e" v-model="selectedEvidence" :value="e" :disabled="!possibleEvidence.includes(e)"></v-checkbox>
        </div>
        <div class="col-6">
          <h3>Possible Ghost types</h3>
          <p v-for="ghost in possibleGhosts" :key="ghost.name">{{ghost.name}}</p>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import {ghosts, Evidence} from './types';
const evidence = Object.values(Evidence);

export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    evidence: evidence,
    ghosts: ghosts,
    selectedEvidence: [] as Evidence[]
  }),
  computed: {
    possibleGhosts: function() {
      return ghosts.filter(ghost => this.selectedEvidence.every(e => ghost.evidence.includes(e)));
    },
    possibleEvidence: function() {
      const possibleGhosts = ghosts.filter(ghost => this.selectedEvidence.every(e => ghost.evidence.includes(e)));
      return evidence.filter(e => possibleGhosts.some(ghost => ghost.evidence.includes(e)))
    }
  }
});
</script>
