<template>
  <v-app>
    <v-sheet id="header">
      <h1>Phasmophobia Evidence Assistant</h1>
      <p>
        Made with 
        <v-icon>mdi-coffee</v-icon>
        and
        <v-icon>mdi-heart</v-icon>
        by
        <a href="https://codazed.dev/">Codazed</a>
      </p>
      <v-switch v-model="$vuetify.theme.dark" inset :label="($vuetify.theme.dark ? 'Dark' : 'Light') + ' Theme'"></v-switch>
    </v-sheet>
    <v-container>
      <v-row>
        <div class="col-6">
          <h2>Evidence</h2>
          <v-checkbox class="my-0" v-for="e in evidence" :key="e" v-model="selectedEvidence" :value="e" :disabled="!possibleEvidence.includes(e)">
            <template v-slot:label>
              <div :class="possibleEvidence.includes(e) ? '' : 'text-decoration-line-through'">
                {{e}}
              </div>
            </template>
          </v-checkbox>
          <v-btn @click="selectedEvidence = []">Reset</v-btn>
        </div>
        <div class="col-6">
          <h2>{{possibleGhosts.length > 1 ? 'Possible Ghost Types' : 'The ghost is a'}}</h2>
          <transition-group name="ghosts">
            <p v-for="ghost in possibleGhosts" :key="ghost.name" class="ghosts-item">{{ghost.name}}</p>
          </transition-group>
        </div>
      </v-row>
    </v-container>
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
    selectedEvidence: [] as Evidence[],
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

<style>

#header {
  text-align: center;
  padding-left: 25px;
  padding-right: 25px;
}

#header>p {
  color: gray;
}

#header>p>a {
  text-decoration: none;
  color: #5555ff;
}

.ghosts-item {
  transition: all 0.5s;
}

.ghosts-enter, .ghosts-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.ghosts-leave-active {
  position: absolute;
}

</style>
