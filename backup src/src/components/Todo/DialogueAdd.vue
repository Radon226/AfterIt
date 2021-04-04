<template>
    <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>

        <v-card-title class="headline">
          Add task?
        </v-card-title>

        <v-card-text>
          
          <v-text-field 
          v-model="taskDate"
          full-width
          single-line
          flat
          @keyup.enter="addTask"
          />

          <v-text-field 
          v-model="taskDescription"
          full-width
          single-line
          flat
          @keyup.enter="addTask"
          />
      
        </v-card-text>     
        
        <v-card-actions>
          <v-spacer></v-spacer>

          <!--When 'Cancel" btn is clicked, close dialog-->
          <v-btn
            @click="$emit('close')"
            color="blue"
            text
          >
            Cancel
          </v-btn>

          <!--When 'Save" btn is clicked, save task. Calls saveTask() in DialogEdit.vue-->
          <v-btn
            color="red"
            text
            @click="addTask"  
          >
            Add
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>

export default {
  props: ['task'],
  data() {
    return {
      taskDescription: null,
      taskDate: null
    }
  },
  methods: {
    addTask() {    //Use index.js for addTask()
      let payload = { //think of payload as a placeholder object, this acts as a task
        id: this.task.id,
        description: this.taskDescription,
        date: this.taskDate
      }
      this.$store.commit('addTask', payload) 
      this.$emit('close')
    }
  },
  mounted() {
    this.taskDescription = this.task.description
    this.taskDate = this.task.date
  }
}
</script>
