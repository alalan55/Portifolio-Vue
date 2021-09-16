<template>
  <div class="hero">
    <div class="hero-esquerdo">
      <div class="title">
        <h1>
          Olá, eu sou o <br />
          Alan Oliveira :)
        </h1>
      </div>
      <div class="profissao">
        <span>Desenvolvedor front-end</span>
      </div>
      <div class="btns">
        <button class="btn-cv">Dowload CV</button>
        <button class="btn-ctt">Fale Comigo</button>
      </div>
    </div>
    <div class="hero-direito">
      <figure>
        <img src="../../assets/img-capa.svg" alt="" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  height: calc(100vh - 70px);
  display: flex;
  flex-wrap: wrap;

  & > div {
    flex: 1 1 400px;
  }

  .hero-esquerdo {
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;

    &>div{
margin: 0.7rem 0;
    }

    .title{
        color: $branco;
    }

    .profissao {
      span {
        color: $cinza;
      }
    }
    .btns {
      & > button {
        
        padding: 0.8rem 1.5rem;
        border: none;
        border-radius: 0;
        font-weight: 600;
        font-family: "Montserrat";
        cursor: pointer;
      }
      .btn-cv {
        background: $verde;
      }
      .btn-ctt {
        margin-left: 1rem;
        background: none;
        border: 1px solid $cinza;
        color: $branco;
      }
    }
  }
  .hero-direito {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

@media screen and (max-width: 800px) {
  .hero {
    padding: 0.1rem;
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-direito {
      justify-content: center;
    }
  }
}
</style>