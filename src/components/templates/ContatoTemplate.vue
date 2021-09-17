<template>
  <div class="contato-template" id="contato">
    <div class="title-contato">
      <span>Fale comigo :)</span>
    </div>
    <div class="descricao-contato">
      <span>Só inserir as informações no formulario abaixo!</span>
    </div>
    <div class="card-form">
      <form @submit.prevent="submit">
        <label class="nome"
          >Nome
          <input type="text" placeholder="Alan de Oliveira" v-model="nome" />
        </label>

        <label class="email"
          >E-mail
          <input type="email" placeholder="alan@example.com" v-model="email" />
        </label>

        <label class="mensagem"
          >Mensagem
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            v-model="mensagem"
          ></textarea>
        </label>

        <button type="submit" class="btn-enviar">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: undefined,
      email: undefined,
      mensagem: undefined,
      sucesso: false,
    };
  },
  methods: {
    async submit() {
      let msg = {
        nome: this.nome,
        email: this.email,
        mensagem: this.mensagem,
      };

      try {
        let req = await fetch(process.env.VUE_APP_API_EMAIL, {
          method: "POST",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(msg),
        });

        let result = await req.json();
        console.log(result)
        result.response.includes("OK")
          ? (this.sucesso = true)
          : (this.sucesso = false);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contato-template {
  margin-top: 2.5rem;
  width: 100%;
  padding: 0.5rem 0;
  text-align: center;
  color: $branco;

  .title-contato {
    margin: 0.9rem 0 1rem 0;
    span {
      font-size: 1.6em;
      font-weight: 600;
    }
  }
  .descricao-contato {
    text-align: center;
    color: $cinza;
    margin-bottom: 2rem;
  }

  .card-form {
    background: $preto2;
    padding: 1rem;

    form {
      label {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-bottom: 1.5rem;

        input {
          margin-top: 0.8rem;
          padding: 1rem 0.5rem;
          background: $preto3;
          border: 1px solid $preto2;
          color: white;

          &::placeholder {
            color: $cinza;
          }
          &:focus {
            outline: none;
          }
        }
      }

      .mensagem {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-bottom: 1.5rem;

        textarea {
          margin-top: 0.8rem;
          padding: 0.5rem;
          max-width: 100%;
          min-width: 100%;

          background: $preto3;
          border: 1px solid $preto2;
          color: white;

          &::placeholder {
            color: $cinza;
          }

          &:focus {
            outline: none;
          }
        }
      }

      .btn-enviar {
        padding: 1rem 2.5rem;
        border: none;
        background: $verde;
        color: white;
        transition: 0.2s ease;
        cursor: pointer;

        &:hover {
          background: $verde-hover;
        }
      }
    }
  }
}
</style>