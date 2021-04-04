<template>
  <div>
        <v-list-item
          @click="$store.commit('doneTask', task.id)"
          :class="{ 'blue lighten-5' : task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="cyan"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through' : task.done }"
              >
                {{ task.date }}
              </v-list-item-title>

               <v-list-item-subtitle
                :class="{ 'text-decoration-line-through' : task.done }"
              >
                {{ task.description }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action> <!--Edit task button, if clicked, send confirmation dialog-->
              <v-btn 
                @click.stop="dialogs.edit = true"
                icon
              >
                <v-icon color="cyan lighten-1">mdi-pencil-outline</v-icon>
              </v-btn>
            </v-list-item-action>

            <v-list-item-action> <!--Delete task button, if clicked, send confirmation dialog-->
              <v-btn 
                @click.stop="dialogs.delete = true"
                icon
              >
                <v-icon color="cyan">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>

          </template>

        </v-list-item>
        <v-divider></v-divider>

        <!--Closes dialogue, emits 'close' from 'DialogueEdit.vue'-->
        <dialog-edit 
        v-if="dialogs.edit" 
        @close="dialogs.edit = false" 
        :task="task"
        />
        

        <!--Closes dialogue, emits 'close' from 'DialogueDelete.vue'-->
        <dialog-delete 
        v-if="dialogs.delete" 
        @close="dialogs.delete = false" 
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
          edit: false,
          delete: false
        }
      }
    },
    components: {
      'dialog-delete': require('@/components/Todo/DialogDelete.vue').default,
      'dialog-edit': require('@/components/Todo/DialogEdit.vue').default
    }
}
</script>
