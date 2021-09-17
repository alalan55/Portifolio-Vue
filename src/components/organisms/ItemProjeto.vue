<template>
  <li class="projeto" v-for="projeto in projetos" :key="projeto.id">
    <div class="textos-projeto">
      <span class="title"> {{ projeto.name }}</span>
      <div class="descricao">
        {{ projeto.description }}
      </div>
    </div>
    <div class="btns">
      <a
        @click="goLive(projeto.homepage)"
        class="btn-live"
        v-if="projeto.homepage"
        target="_blank"
        >Ver live <i class="fab fa-chrome"></i
      ></a>
      <a
        @click="goHub(projeto.html_url)"
        class="btn-git"
        target="_blank"
        v-if="projeto.svn_url"
        >Ver no fighub <i class="fab fa-github"></i
      ></a>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    projetos: { type: Array, default: () => [] },
  },
  methods: {
    goHub(e) {
      window.open(`${e}`, "_blank");
    },
    goLive(home) {
      window.open(`https://${home}`, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.projeto {
  margin: 0.5rem 0;

  border-radius: 5px;
  list-style: none;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: $preto2;

  .textos-projeto {
    flex: 1 1 auto;
    .title {
      font-weight: 500;
      font-size: 1.5rem;
    }
    .descricao {
      margin-top: 0.5rem;
      font-size: 12px;
      color: $cinza;
    }
  }

  .btns {
    flex: 1 1 300px;
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
    & > a {
      text-decoration: none;
      margin: 0 0.3rem;
      transition: 0.2s ease-in-out;
    }
    .btn-git {
      background: $verde;
      border: none;
      padding: 1rem 1rem;
      color: white;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background: $verde-hover;
      }
    }
    .btn-live {
      background: $blue;
      border: none;
      padding: 1rem 1rem;
      color: white;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background: $blue-hover;
      }
    }
  }
}

@media screen and (max-width: 732px) {
  .btns {
    justify-content: flex-start !important;
    margin: 1.8rem 0;
  }
}
</style>