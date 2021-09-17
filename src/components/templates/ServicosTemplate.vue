<template>
  <div class="servicos-template" id="servicos">
    <div class="title-servicos">
      <span>Serviços</span>
    </div>
    <div class="cards-servicos">
      <div class="card">
        <div class="icon">
          <i class="fas fa-code"></i>
        </div>
        <div class="text">
          <span
            >Criação <br />
            de Sites</span
          >
        </div>
      </div>
      <div class="card">
        <div class="icon">
          <i class="fas fa-mobile"></i>
        </div>
        <div class="text">
          <span
            >Sites <br />
            responsivos</span
          >
        </div>
      </div>

      <div class="card">
        <div class="icon">
          <i class="fas fa-search"></i>
        </div>
        <div class="text">
          <span>SEO</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.servicos-template {
  margin-top: 2.5rem;
  width: 100%;
  padding: 0.5rem 0;
  text-align: center;
  color: $branco;

  .title-servicos {
    margin: 0.9rem 0 2rem 0;
    span {
      font-size: 1.6em;
      font-weight: 600;
    }
  }

  .cards-servicos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    transition: 0.5s ease-in-out;

    .card {
        text-align: left;
      margin: 0.5rem;
      flex: 1 0 300px;
      padding: 1rem;
      width: 350px;
      height: 240px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: $preto2;
      position: relative;

      .icon {
        margin: 0.8rem 0;
        i {
          font-size: 2.5rem;
          color: $verde;
        }
      }

      .text {
        span {
          color: $cinza;
          font-size: 2rem;
          font-weight: 500;
        }
      }

      &::after {
        content: "";
        position: absolute;
        background: $verde;
        padding: 0.1rem;
        bottom: 0;
        width: 99%;
        left: 0;
      }

      &:hover {
        background: $preto3;
      }
    }
  }
}
</style>