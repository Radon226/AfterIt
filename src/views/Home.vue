<template>
  <div class="home">
    <add-task />

    <list-tasks 
      v-if="$store.state.tasks.length"
    />

    <no-tasks 
      v-else
    />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    'add-task' : require('@/components/Todo/AddTask.vue').default, //cleaner way to import components
    'list-tasks' : require('@/components/Todo/ListTasks.vue').default,
    'no-tasks' : require('@/components/Todo/NoTasks.vue').default
  }
}
</script>

