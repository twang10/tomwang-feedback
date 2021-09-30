<template>
  <div>
    <app-bar></app-bar>
    <v-container>
      
      <!-- TODO: Style appropriately according to requirements doc (with dividers, proper spacing, etc) -->
      <ul> 
        <li v-for="submission in submissionsByDate" :key="submission.id">
          {{ submission.feedback }}  
        </li>
      </ul>
      
    </v-container>
  </div>
</template>

<script>
module.exports = {
  name: 'Submissions',
  data() {
    return {
      submissions: [], // TODO: Migrate to typescript, define and enforce submission type.
    }
  },
  mounted() {
    this.getFeedback();
  },
  methods: {
    getFeedback() {
      // TODO: Subscribe to live document, incase user adds feedback from submission page.
      this.$root.db.collection('feedbackCollection')
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((submission) => {
              this.submissions.push(submission.data());
          });
      });
    }
  },
  computed: {
    submissionsByDate() {
      return this.submissions.sort((a, b) => {
        // Descending order (show the most recent first).
        return b.date - a.date;
      });
    }
  }
}
</script>

<style scoped></style>