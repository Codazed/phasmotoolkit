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
        <v-col sm="6" md="4">
          <v-card class="pa-5">
            <h2>Evidence</h2>
            <v-checkbox class="my-0" v-for="e in evidence" :key="e" v-model="selectedEvidence" :value="e" :disabled="!possibleEvidence.includes(e)">
              <template v-slot:label>
                <div :class="(possibleEvidence.includes(e) ? '' : 'text-decoration-line-through') + (hoveredEvidence.includes(e) ? 'indigo--text' : '')">
                  {{e}}
                </div>
              </template>
            </v-checkbox>
            <v-btn @click="selectedEvidence = []">Reset</v-btn>
          </v-card>
        </v-col>
        <v-col sm="6" md="8">
          <v-expand-transition>`
            <v-card class="pa-5">
              <h2>{{possibleGhostsString}}</h2>
              <v-container>
                <transition-group name="ghosts" tag="v-row">
                  <v-col class="text-center" xs="8" sm="6" md="4" lg="2" v-for="ghost in possibleGhosts" :key="ghost.name" @mouseover="hoveredEvidence = ghost.evidence" @mouseleave="hoveredEvidence = []">
                    <v-card class="pa-2 ghosts-item" :class="(hoveredEvidence == ghost.evidence) ? hoveredColor : nonHoveredColor" style="transition: all 0.5s">
                      {{ghost.name}}
                    </v-card>
                  </v-col>
                </transition-group>
              </v-container>
            </v-card>
          </v-expand-transition>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
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
    hoveredEvidence: [] as Evidence[],
  }),

  computed: {
    possibleGhosts: function() {
      return ghosts.filter(ghost => this.selectedEvidence.every(e => ghost.evidence.includes(e)));
    },
    possibleEvidence: function() {
      const possibleGhosts = ghosts.filter(ghost => this.selectedEvidence.every(e => ghost.evidence.includes(e)));
      return evidence.filter(e => possibleGhosts.some(ghost => ghost.evidence.includes(e)))
    },
    possibleGhostsString: function() {
      if (this.possibleGhosts.length == 1) {
        if (!this.possibleGhosts[0].name.startsWith("The")) {
          const vowelRegex = '^[aeiouAEIOU].*'
          if (this.possibleGhosts[0].name.match(vowelRegex)) {
            return "The ghost is an"
          }
          return "The ghost is a"
        }
        return "The ghost is"
      }
      return "The ghost could be"
    },
    hoveredColor: function() {
      return (this.$vuetify.theme.dark ? 'white black--text' : 'blue darken-3 white--text')
    },
    nonHoveredColor: function() {
      return (this.$vuetify.theme.dark ? 'grey darken-4 white--text' : 'white black--text')
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
  position: absolute !important;
}

.ghosts-move {
  transition: transform 0.5s;
}

</style>
