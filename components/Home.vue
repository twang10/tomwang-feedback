<template>
  <div>
    <app-bar></app-bar>
    
    <v-container>
      <span>{{welcomeMessage}}</span>
    </v-container>
  </div>
</template>

<script>
module.exports = {
  name: 'Home',
  data() {
    return {
      welcomeMessage: 'Hello, world!'
    }
  },
}
</script>

<style scoped></style>