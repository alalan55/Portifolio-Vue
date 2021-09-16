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
        <li class="projeto">
          <div class="textos-projeto">
            <span class="title"> Projeto de Teste</span>
            <div class="descricao">
              Descricao de um projeto aqui que vai ser usado para teste sacou?
            </div>
          </div>
          <div class="btns">
            <a href="#" class="btn-live"
              >Ver live <i class="fab fa-chrome"></i
            ></a>
            <a href="#" class="btn-git"
              >Ver no fighub <i class="fab fa-github"></i
            ></a>
          </div>
        </li>

        <li class="projeto">
          <div class="textos-projeto">
            <span class="title"> Projeto de Teste</span>
            <div class="descricao">
              Descricao de um projeto aqui que vai ser usado para teste sacou?
            </div>
          </div>
          <div class="btns">
            <a href="#" class="btn-live"
              >Ver live <i class="fab fa-chrome"></i
            ></a>
            <a href="#" class="btn-git"
              >Ver no fighub <i class="fab fa-github"></i
            ></a>
          </div>
        </li>
        <li class="projeto">
          <div class="textos-projeto">
            <span class="title"> Projeto de Teste</span>
            <div class="descricao">
              Descricao de um projeto aqui que vai ser usado para teste sacou?
            </div>
          </div>
          <div class="btns">
            <a href="#" class="btn-live"
              >Ver live <i class="fab fa-chrome"></i
            ></a>
            <a href="#" class="btn-git"
              >Ver no fighub <i class="fab fa-github"></i
            ></a>
          </div>
        </li>
        <li class="projeto">
          <div class="textos-projeto">
            <span class="title"> Projeto de Teste</span>
            <div class="descricao">
              Descricao de um projeto aqui que vai ser usado para teste sacou?
            </div>
          </div>
          <div class="btns">
            <a href="#" class="btn-live"
              >Ver live <i class="fab fa-chrome"></i
            ></a>
            <a href="#" class="btn-git"
              >Ver no fighub <i class="fab fa-github"></i
            ></a>
          </div>
        </li>
        <li class="projeto">
          <div class="textos-projeto">
            <span class="title"> Projeto de Teste</span>
            <div class="descricao">
              Descricao de um projeto aqui que vai ser usado para teste sacou?
            </div>
          </div>
          <div class="btns">
            <a href="#" class="btn-live"
              >Ver live <i class="fab fa-chrome"></i
            ></a>
            <a href="#" class="btn-git"
              >Ver no fighub <i class="fab fa-github"></i
            ></a>
          </div>
        </li>
        <li class="projeto">
          <div class="textos-projeto">
            <span class="title"> Projeto de Teste</span>
            <div class="descricao">
              Descricao de um projeto aqui que vai ser usado para teste sacou?
            </div>
          </div>
          <div class="btns">
            <a href="#" class="btn-live"
              >Ver live <i class="fab fa-chrome"></i
            ></a>
            <a href="#" class="btn-git"
              >Ver no fighub <i class="fab fa-github"></i
            ></a>
          </div>
        </li>
        <li class="projeto">
          <div class="textos-projeto">
            <span class="title"> Projeto de Teste</span>
            <div class="descricao">
              Descricao de um projeto aqui que vai ser usado para teste sacou?
            </div>
          </div>
          <div class="btns">
            <a href="#" class="btn-live"
              >Ver live <i class="fab fa-chrome"></i
            ></a>
            <a href="#" class="btn-git"
              >Ver no fighub <i class="fab fa-github"></i
            ></a>
          </div>
        </li>
        <li class="projeto">
          <div class="textos-projeto">
            <span class="title"> Projeto de Teste</span>
            <div class="descricao">
              Descricao de um projeto aqui que vai ser usado para teste sacou?
            </div>
          </div>
          <div class="btns">
            <a href="#" class="btn-live"
              >Ver live <i class="fab fa-chrome"></i
            ></a>
            <a href="#" class="btn-git"
              >Ver no fighub <i class="fab fa-github"></i
            ></a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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

            &:hover {
              background: $blue-hover;
            }
          }
        }
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