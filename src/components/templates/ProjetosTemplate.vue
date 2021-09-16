<template>
  <div class="projetos" id="projetos">
    <div class="title-projetos">
      <span>Projetos</span>
    </div>

    <div class="descricao-projetos">
      <span
        >Últimos projetos upados no <a href="#" target="_blank">GitHub</a></span
      >
    </div>

    <div class="container-projetos">
      <ul>
        <ItemProjeto :projetos="projetos"/>

      </ul>
    </div>
  </div>
</template>

<script>
import {ItemProjeto} from '@/components/organisms'
export default {
  components:{
    ItemProjeto
  },
  props:{
    projetos:{type: Array, default: () => []}
  }
};
</script>

<style lang="scss" scoped>
.projetos {
  padding: 0.5rem 0;
  height: 100vh;
  color: $branco;

  .title-projetos {
    text-align: center;
    margin: 0.9rem 0;
    span {
      font-size: 1.6em;
      font-weight: 600;
    }
  }
  .descricao-projetos {
    text-align: center;
    color: $cinza;
    a {
      font-weight: 600;
      text-decoration: none;
      color: $cinza;
    }
  }

  .container-projetos {
    margin-top: 1.5rem;

    ul {
      height: 80vh;
      overflow-y: auto;
      padding: 0.3rem;

      &::-webkit-scrollbar {
        width: 8px;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
      }


    }
  }
}

@media screen and (max-width: 732px) {
  ul {
    padding: 0.5rem;
    .btns {
      margin: 1.8rem 0;
    }
  }
}
</style>