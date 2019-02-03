<template>
    <div>
        <v-container>
          <v-layout row wrap>
            <v-flex>
              <h1>{{ title }}</h1>
              <p>{{ descricao }}</p>
          </v-flex>
          </v-layout>
          <v-layout row wrap justify-center style="margin-top: 10%;">
            <v-flex>
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
