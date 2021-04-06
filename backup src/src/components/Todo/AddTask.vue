<!--This is the addTask btn where DialgoAdd is displayed, must be imported to Home-->
<template> 
  
  <div>
    <v-list-item-action> <!--Add task button, if clicked, send add dialog-->
      <v-btn 
      rounded
      width=200
      height=50
      @click.stop="dialogs.add = true"
      block
      dark
      color="cyan lighten-2"
      >
        Add task
      </v-btn>
    </v-list-item-action>

    <!--Closes dialogue, emits 'close' from 'DialogAdd.vue'-->
    <dialog-add 
    v-if="dialogs.add" 
    @close="dialogs.add = false" 
    :task="task"
    />

  </div>
  
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      dialogs: {
          add: false
      }
    }
  },
  components: {
      'dialog-add': require('@/components/Todo/DialogAdd.vue').default
  }
}
</script>

