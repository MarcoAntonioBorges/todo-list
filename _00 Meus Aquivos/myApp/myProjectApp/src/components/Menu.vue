<template>
  <div id="menu">
    <v-btn fab dark color="grey darken-3" left flat absolute @click.stop="drawer = !drawer"
      v-show="!drawer">
      <v-icon dark>list</v-icon>
    </v-btn>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      dark
      height=100vh
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
              v-for="(opcao, i) in opcoes"
              :key="i"
              @click="redirecionar(opcao[2])"
            >
              <v-list-tile-title v-text="opcao[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="opcao[1]"></v-icon>
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
    drawer: true,
    opcoes: [
      ['Criar', 'add', 'create'],
      ['Read Files', 'insert_drive_file', 'read']
    ]
  }),
  methods: {
    redirecionar (nome) {
      if (nome === 'read') {
        this.$router.push('/lista')
      } else if (nome === 'home') {
        this.$router.push('/')
      } else if (nome === 'create') {
        this.$router.push('/criar')
      }
    }
  },
  watch: {
    drawer: function (drawer) {
      if (drawer === true) {
        document.querySelector('#menu').style.zIndex = '1'
      } else {
        document.querySelector('#menu').style.zIndex = '0'
      }
    }
  }
}
</script>

<style>
  #menu{
    position: absolute;
  }
</style>
