<template>
    <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>

        <v-card-title class="headline">
          Delete task?
        </v-card-title>

        <v-card-text>If deleted, you can not get it back</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <!--When 'No" btn is clicked, close dialog-->
          <v-btn
            @click="$emit('close')"
            color="blue"
            text
          >
            No
          </v-btn>

          <!--When 'Yes" btn is clicked, delete task-->
          <v-btn
            color="red"
            text
            @click="$store.dispatch('deleteTask', task.id)"
          >
            Yes
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>

export default {
  props: ['task']
}
</script>
