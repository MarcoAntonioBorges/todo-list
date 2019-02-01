<template>
  <div>
    <v-navigation-drawer
      stateless
      dark
      value = "true"
      height="100vh"
    >
      <v-list>
        <v-list-tile @click="redirecionar('home')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          prepend-icon="account_circle"
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Tarefas</v-list-tile-title>
          </v-list-tile>

          <v-list-group
            sub-group
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Ações</v-list-tile-title>
            </v-list-tile>

            <v-list-tile
              v-for="(crud, i) in cruds"
              :key="i"
              @click="redirecionar(crud[2])"
            >
              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    cruds: [
      ['Criar', 'add', 'create'],
      ['Read Files', 'insert_drive_file', 'read']
    ]
  }),
  methods: {
    redirecionar (name) {
      alert(name)
    }
  }
}
</script>
