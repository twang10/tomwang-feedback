
<template>
  <v-dialog v-model="isDialogOpen" width="500">
    <!-- FEEDBACK BUTTON -->
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="white" text v-bind="attrs" v-on="on">
        Give Feedback
      </v-btn>
    </template>

    <!-- FEEDBACK DIALOG -->
    <v-card>
      <v-card-title class="text-h5 lighten-2">
        Give Feedback
      </v-card-title>

      <v-card-text>
        Sharing your experiences with this application will help us better understand what works, what doesn't, and how we can improve your workflows.
          <v-textarea flat 
                      outlined
                      label="Feedback"
                      v-model="input"
                      :error-messages="errorMessage"
                      solo>
        </v-textarea>
      </v-card-text>


      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="isDialogOpen = false">
          Cancel
        </v-btn>
        <v-btn text :disabled="isSharing" @click="shareFeedback()">
          {{shareButtonText}}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
module.exports = {
  name: "give-feedback-btn",
  data() {
    return {
      /** Manage dialog state */
      isDialogOpen: false,
      /** Manages loading state during a share action. */
      isSharing: false,
      /** Textarea value to be saved as feedback. */
      input: '',
      /** Textarea error message to be displayed on error. */
      errorMessage: '',
    }
  },
  methods: {
    /**
     * Persist feedback data via firebase and manage UI state for loading, error, and successful completion.
     */
    shareFeedback() {
      this.isSharing = true;
      this.errorMessage = "";
      
      // TODO: Consider abstracting firebase interaction to util class.
      this.$root.db.collection('feedbackCollection').add({
        feedback: this.input,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
      }).then((doc) => {
        this.isDialogOpen = false;
        this.errorMessage = "";
        this.isSharing = false;
      }).catch(e => {
        this.errorMessage = "Something went wrong. " + e;
        this.isSharing = false;
      });
    },
  },
  computed: {
    shareButtonText: function() {
      return this.isSharing ? "Sharing..." : "Share";
    },
  },
     
}
</script>

<style scoped>
.green {
  color: green;
}
</style>