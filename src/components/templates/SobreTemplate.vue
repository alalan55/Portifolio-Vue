<template>
  <div class="sobre" id="sobre">
    <div class="title-sobre">
      <span>Sobre mim</span>
    </div>
    <div class="desc-sobre">
      <p>
        Olá, prazer, me chamo Alan de Oliveira, tenho 23 anos e sou um
        desenvolvedor front-end que tem amor pela tecnologia, atuando na área
        desde 2020, venho acumulando experiências a cada dia que passa. Atualmente trabalhando com o framework VueJs <i class="far fa-heart"></i>
      </p>
    </div>

    <div class="icones">
      <div class="icon-link">
        <div class="icon">
          <i class="far fa-smile-wink"></i>
        </div>
        <div class="text-icon">
          <span class="title-text-icon">Meu nome</span>
          <br />
          <span class="desc-text-icon">Alan Oliveira</span>
        </div>
      </div>

      <div class="icon-link">
        <div class="icon">
          <i class="far fa-envelope"></i>
        </div>
        <div class="text-icon">
          <span class="title-text-icon">E-mail</span>
          <br />
          <span class="desc-text-icon">alla.ao4975@gmail.com</span>
        </div>
      </div>

      <div class="icon-link">
        <div class="icon">
          <i class="fab fa-linkedin-in"></i>
        </div>
        <div class="text-icon">
          <span class="title-text-icon">Linkedin</span>
          <br />
          <span class="desc-text-icon"><a href="https://www.linkedin.com/in/alan-oliveira-a606b31b2/" target="_blank">Alan Oliveira</a></span>
        </div>
      </div>

      <div class="icon-link">
        <div class="icon">
          <i class="fab fa-github"></i>
        </div>
        <div class="text-icon">
          <span class="title-text-icon">GitHub</span>
          <br />
          <span class="desc-text-icon"><a href="https://github.com/alalan55" target="_blank">@alalan55</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sobre {
  color: $branco;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title-sobre {
    margin: 0.9rem 0;
    span {
      font-size: 1.6em;
      font-weight: 600;
    }
  }

  .desc-sobre {
    max-width: 80%;
    margin: 0 auto;
    p {
      color: $cinza;
      line-height: 32px;
    }
  }

  .icones {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 3rem auto;
    justify-content: space-between;

    .icon-link {
      // flex: 0 0 200px;

      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        background: $preto2;
        width: auto;
        border-radius: 50%;
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;

        i {
          color: $verde;
        }
      }
      .text-icon {
        .title-text-icon {
          font-weight: 700;
          display: block;
        }
        .desc-text-icon {
          color: $cinza;
          font-size: 12px;
          display: block;

          a{
            text-decoration: none;
            color: $cinza;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 516px) {
  .sobre {
    height: auto;

    .icones {
      align-items: center;

      .icon-link {
        width: 100% !important;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>