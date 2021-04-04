<!--This is the listTasks component where it displays a list of tasks, should be imported in Home-->
<template>
  <v-list
      class="pt-0"
      flat
  >
    <task         
      v-for="task in $store.state.tasks" 
      :key="task.id"
      :task="task"
    />
    </v-list>
</template>

<script>
export default {
    components: {
    'task' : require('@/components/Todo/Task.vue').default
  }
}
</script>
