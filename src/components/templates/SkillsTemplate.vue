<template>
  <div class="skills" id="skills">
    <div class="title-skill">
      <span>Algumas de minhas Skills</span>
    </div>
    <div class="cards-skills">
      <div class="skill"><i class="fab fa-html5"></i></div>
      <div class="skill"><i class="fab fa-css3-alt"></i></div>
      <div class="skill"><i class="fab fa-js"></i></div>
      <div class="skill"><i class="fab fa-angular"></i></div>
      <div class="skill"><i class="fab fa-vuejs"></i></div>
      <div class="skill"><i class="fab fa-sass"></i></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.skills {
  margin-top: 2.5rem ;
  padding: 0.5rem 0;
  text-align: center;
  color: $branco;

  .title-skill {
    margin: 0.9rem 0 2rem 0;
    span {
      font-size: 1.6em;
      font-weight: 600;
    }
  }

  .cards-skills {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;

    .skill {
      flex: 1 1 auto;
      margin: 0.2rem;
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $preto2;
      border: 1px solid #333333;
      transition: .2s ease-in-out;
      i {
        color: $verde;
        font-size: 3rem;
      }

      &:hover {
        transform: translateY(-5px);
         background: $preto3;
      }
    }
  }
}
</style>