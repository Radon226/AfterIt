<template>
  <div
      class="no-tasks"
    >
      <v-icon
        right
        size="100"
        color="cyan"
      >
        mdi-check
      </v-icon>
      <div 
        class="text-h5 ml-2 cyan--text">No tasks</div>
    </div>
</template>

<!--Dont need script tag so got rid of it-->

<style lang="sass">
  .no-tasks
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    opacity: 0.5
</style>