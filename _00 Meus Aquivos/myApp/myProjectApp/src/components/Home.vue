<template>
    <div>
        <v-container>
          <v-layout row wrap align-start justify-center class="mb-5">
            <v-flex xs12 md6 class="text-xs-center text-md-center">
              <h1>{{ title }}</h1>
              <p>{{ descricao }}</p>
          </v-flex>
          </v-layout>
          <v-layout row wrap align-start justify-center>
            <v-flex xs12 md6 text-xs-center text-md-center>
              <v-btn dark outline color="red" to="/criar">Experimentar agora</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Seja Muito Bem Vindo!',
      descricao: 'Facilite sua vida, mantendo suas tarefas organizadas!'
    }
  }
}
</script>
