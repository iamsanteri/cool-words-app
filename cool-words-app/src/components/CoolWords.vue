<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item href="https://www.lostbookofsales.com/" target="_blank">
          <v-list-item-action>
            <v-icon>mdi-clipboard-text</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="https://github.com/iamsanteri/cool-words-app/tree/master/cool-words-app" target="_blank">
          <v-list-item-action>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>GitHub</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Cool Words App</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-flex class="d-flex justify-center">
          <v-card v-bind:style="{width: responsiveCardWidth}" style="padding-bottom: 50px" tile>
            <v-card-title>Cool Words</v-card-title>
            <v-list-item v-bind:key="item" v-for="item in coolWordsArray">
              <v-list-item-content>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; Santeri Liukkonen 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: function () {
    return {
      drawer: 0,
      coolWordsArray: []
    }
  },
  methods: {
    sortingAlphabetically () {
      this.coolWordsArray.sort(function(a, b) {
        if (a < b) {
          return -1;
        }
        if (b < a) {
          return 1;
        }
        return 0;
      })
    },
    // Method for uploading data to Firebase
    batchUploadData() {
      var originatingList = "Lockdown Marshall Trident Apex  Vector Fusion Uplink Nocturne Desolate Mandrill Point Resort Vox Enclave Boeing Resolve Synergy Redux Vanquish Sentinel Focal Espionage Eagle Deus Shrine United Spire Raptor Sequence Equinox Nonactual Stellar Unity Hawk Cobra Renegade Odin Noctua Martin Abrams Maven Vulcan Maximum Spark Strix Mithril Trust Performance Tracer Osprey Stratus Lockheed Division Pipelines System Flux Array Vanguard Conversion Lean General Dynamics Fidelity Challenger Legacy Vertex Wraith Stabilize Octane Cluster Quartz Velociraptor Struts Varnish Salvo";
      var wordArray = originatingList.split(" ");
      var arrayLength = wordArray.length;
      for (let i = 0; i < arrayLength; i++) {
      // This is a consequential POST request with Axios, intended to only be used when a batch upload is needed. 
        this.axios.post("https://cool-words-app.firebaseio.com/data/words.json", {
          word: wordArray[i]
        }).then(function(response) {
          console.log(response);
        }).catch(function(error) {
          console.log(error);
        });
      }
      console.log("Finshed Upload");
    }
  },
  computed: {
    // Listening for the breakpoint name and reacting on a case basis
    responsiveCardWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs": return "100%"
        case "sm": return "100%"
        case "md": return "50%"
        case "lg": return "30%"
        case "xl": return "25%"
      }
    }
  },
  created: function() {
    // Uncomment BatchUpload method from above in order to upload data
    // this.batchUploadData();

    this.axios.get("https://cool-words-app.firebaseio.com/data.json")
    .then((response) => {
      var temporaryValueStore = Object.values(response.data.words);
        for (let i in temporaryValueStore) {
          this.coolWordsArray.push(temporaryValueStore[i].word);
        }
        // Sorts words alphabetically. 
        this.sortingAlphabetically();
        console.log(this.coolWordsArray);
      }
    )
    .catch(function(error) {
      console.log(error);
    });
  }
  
};
</script>
