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
          <v-card v-bind:style="{width: responsiveCardWidth}" tile>
            <v-card-title class="mb-4">Cool Words</v-card-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Single-line item</v-list-item-title>
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
  data: () => ({
    drawer: 0
  }),
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
  } 
  
};
</script>
