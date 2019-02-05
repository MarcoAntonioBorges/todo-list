<template>
  <div>
    <v-container fluid>
      <v-snackbar
        color="green"
        v-model="snackbar"
        :timeout="timeout"
        :top="true"
        :vertical="false"
      >
        {{ textoSnackbar }}
        <v-btn
          color="red accent-4"
          flat
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>

      <v-layout row wrap align-start justify-center class="mb-5">
        <v-flex xs12 md6>
          <h1 class="text-xs-center text-md-center">Criação de Tarefas</h1>
        </v-flex>
      </v-layout>

      <v-layout row wrap align-start justify-center>
        <v-flex xs12 md6>
          <v-card>
            <v-toolbar
              card
              color="blue"
              dark
            >
              <v-toolbar-title>Formulário</v-toolbar-title>
            </v-toolbar>
            <div class="pa-4">
              <v-form ref="form">
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-text-field color="blue" :rules="regras.texto" label="Nome da tarefa" v-model="tarefa.nome" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-textarea color="blue" :rules="regras.texto" label="Descrição da Tarefa" v-model="tarefa.descricao" required></v-textarea>
                  </v-flex>
                  <v-flex xs12>
                    <v-select
                      v-model="tarefa.prioridade"
                      :rules="regras.texto"
                      :items="prioridades"
                      label="Prioridade"
                      color="blue"
                      attach
                      required
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-form>
            </div>
            <v-card-actions>
              <v-btn flat color="red" @click="limparCampos">Cancelar</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!desabilitarBotao"
                color="blue"
                type="submit"
                @click="criarTarefa"
                flat
              >Criar</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      {{ tarefa }}
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'CriarTarefas',
  data: () => ({
    textoSnackbar: 'Tarefa Criada com Sucesso!',
    snackbar: false,
    timeout: 5000,
    form: Object.assign({}),
    regras: {
      texto: [
        val => (val || '').length > 0 || 'Esse campo é obrigatório!'
      ]
    },
    prioridades: ['Alta', 'Média', 'Baixa'],
    tarefa: {
      nome: '',
      descricao: '',
      prioridade: ''
    }
  }),
  computed: {
    desabilitarBotao () {
      return this.tarefa.nome && this.tarefa.descricao && this.tarefa.prioridade
    }
  },
  methods: {
    limparCampos () {
      this.form = Object.assign({})
      this.$refs.form.reset()
    },
    criarTarefa () {
      console.log(this.tarefa)
      this.limparCampos()
      this.snackbar = true
    }
  }
}
</script>
