<template>
  <v-app-bar id="app-bar">
    <v-toolbar-title id="title">Full-stack App</v-toolbar-title>
    
    <v-spacer></v-spacer>
    
    <give-feedback-btn/>
  </v-app-bar>
</template>

<script>
module.exports = {
  name: "app-bar",
}
</script>

<style scoped>
  #app-bar {
    background: #4285f4;
  }

  #title {
    color: white;
  }
</style>