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
          placeholder="Enter date here"
          />

          <v-text-field 
          v-model="taskDescription"
          full-width
          single-line
          flat
          @keyup.enter="addTask"
          placeholder="Enter task here"
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
            :disabled="taskInvalid"
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
   computed: {
    //Returns true or false depending if field is empty
    taskInvalid() { 
      return !this.taskDescription || !this.taskDate 
    }
  },
  methods: {
    addTask() {    //Use index.js for addTask()
      if(!this.taskInvalid) {
        let payload = { //think of payload as a placeholder object, this acts as a task
          description: this.taskDescription,
          date: this.taskDate
        }
        this.$store.dispatch('addTask', payload) 
        this.$emit('close')
      }
      else {
        console.log('Empty task field')
      }
          
    }
  }
}
</script>
