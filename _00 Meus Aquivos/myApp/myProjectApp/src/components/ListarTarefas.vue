<template>
  <v-layout xs12 sm6 md12 row wrap style="padding:15px; justify-content: space-between; align-items: flex-start; align-content: flex-start">
    <v-flex xs12 md5 class="mb-5" v-for="tarefa in tarefas" :key="tarefa.id">
      <v-card color="teal lighten-1">
        <div class="dark--text" style="background-color: white;">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">[ {{ tarefa.nomeTarefa }} ]</span>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
        <v-card-title>
          <div class="white--text">
            <span>[ {{ tarefa.descTarefa }} ]</span>
            <br>
            <span>[ Data da Tarefa ]</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="red">Editar</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="indigo darken-4" outline>Finalizar</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    tarefas: [
      {id: 1, nomeTarefa: 'Primeira tarefa', descTarefa: 'desc tarefa', style: 'height: 100px; background-color: blue'},
      {id: 2, nomeTarefa: 'Segunda tarefa', descTarefa: 'Segunda desc tarefa', style: 'height: 100px; background-color: yellow'}
    ]
  })
}
</script>
