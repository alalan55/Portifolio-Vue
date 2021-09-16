<template>
  <div class="capa">
    <Header />
    <Container>
      <Hero />
      <Sobre/>
      <Projetos/>
      <Skills/>
    </Container>
  </div>
</template>

<script>
import {Header, Hero, Sobre, Projetos, Skills} from '@/components/organisms'
import {Container} from '@/components/bosons'
    export default {
        components:{
            Container,
            Header,
            Hero,
            Sobre,
            Projetos,
            Skills
        }
        
    }
</script>

<style lang="scss" scoped>
.capa {
  height: auto;
  width: 100%;
    background: $preto1;
}
</style>