<template>
  <div class="wrapper">
    <Header />
    <Container>
      <CapaTemplate />
      <SobreTemplate />
      <ProjetosTemplate :projetos="projetos" />
      <ServicosTemplate/>
      <SkillsTemplate />
      <ContatoTemplate/>
    </Container>
    <Footer/>
  </div>
</template>

<script>
import {
  CapaTemplate,
  SobreTemplate,
  ProjetosTemplate,
  SkillsTemplate,
  ServicosTemplate,
  ContatoTemplate
} from "@/components/templates";
import { Container } from "@/components/bosons";
import { Header, Footer } from "@/components/organisms";

export default {
  components: {
    Header,
    CapaTemplate,
    SobreTemplate,
    ProjetosTemplate,
    ServicosTemplate,
    SkillsTemplate,
    ContatoTemplate,
    Container,
    Footer
  },

  data(){
    return{
      projetos: undefined
    }
  },
  created(){
    this.init();
  },
  methods:{
    async init(){
      try {
        let req = await fetch(`${process.env.VUE_APP_URL}/alalan55/repos?per_page=7&sort=created:%20asc&client_id=${process.env.VUE_APP_CLIENT_ID}&client_secret=${process.env.VUE_APP_CLIENT_SECRET}`)
        let res = await req.json()
        this.projetos = res
        
      } catch (error) {
        console.error(error)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: auto;
  width: 100%;
  background: $preto1;
}
</style>
