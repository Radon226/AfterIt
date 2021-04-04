<template>
   <v-snackbar
      v-model="$store.state.snackbar.show"
    >
      {{ $store.state.snackbar.text }}  <!--grabs text from index.js-->

      <template v-slot:action="{ attrs }">
        <v-btn
          @click="$store.commit('hideSnackbar')"
          color="blue lighten-3"
          text
          v-bind="attrs"
          
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
  export default {

  }
</script>
