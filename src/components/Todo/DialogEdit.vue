<!--This diolog or popup is for editing task. Allows user to input task description and date-->
<template>
    <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>

        <v-card-title class="headline">
          Edit task?
        </v-card-title>

        <v-card-text>
          
          <!--
          Text field where user can input the date
          When user presses 'Enter' key, call saveTask()
          -->
          <v-text-field 
          v-model="taskDate"
          full-width
          single-line
          flat
          @keyup.enter="saveTask"
          />

          <!--
            Text field where user can input the task description
            When user presses 'Enter' key, call saveTask()
          -->
          <v-text-field 
          v-model="taskDescription"
          full-width
          single-line
          flat
          @keyup.enter="saveTask"
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

          <!--
            When 'Save" btn is clicked, save task. Calls saveTask() in DialogEdit.vue
            Disable button if nothing is changed or text fields are empty
          -->
          <v-btn
            color="red"
            text
            @click="saveTask"  
            :disabled="taskInvalid"
          >
            Save
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
  computed: {
    //Returns true or false depending if the task is not edited or field is empty
    taskInvalid() { 
      return !this.taskDescription || !this.taskDate || 
              this.taskDescription === this.task.description && this.taskDate === this.task.date
    }
  },
  methods: {
    saveTask() {    //Use index.js for updateTask()
      if(!this.taskInvalid) { //if task is valid, save task
        let payload = { //think of payload as a placeholder object, this acts as a task
          id: this.task.id,
          description: this.taskDescription,
          date: this.taskDate
        }
        this.$store.dispatch('updateTask', payload) 
        this.$emit('close')
      } 
      else {
        console.log('Empty task field or no edit was done')
      }
    }
  },
  mounted() {
    this.taskDescription = this.task.description
    this.taskDate = this.task.date
  }
}
</script>
