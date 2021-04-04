<!--This is the addTask component where user inputs task and then add it, must be imported to Home-->
<template> 
  <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Add Task"
      append-icon="mdi-plus"
      hide-details
      clearable
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: '',
    }
  },
  methods: {
    addTask() {
      this.$store.dispatch('addTask', this.newTaskTitle)  //uses the action method in index.js
      this.newTaskTitle = ''                              //now, when add task, notification displays
    }
  },
}
</script>
