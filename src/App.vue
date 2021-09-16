<template>
  <div class="wrapper">
    <Header />
    <Container>
      <CapaTemplate />
      <SobreTemplate />
      <ProjetosTemplate :projetos="projetos" />
      <SkillsTemplate />
    </Container>
  </div>
</template>

<script>
import {
  CapaTemplate,
  SobreTemplate,
  ProjetosTemplate,
  SkillsTemplate,
} from "@/components/templates";
import { Container } from "@/components/bosons";
import { Header } from "@/components/organisms";

export default {
  components: {
    Header,
    CapaTemplate,
    SobreTemplate,
    ProjetosTemplate,
    SkillsTemplate,
    Container,
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
  height: auto;
  width: 100%;
  background: $preto1;
}
</style>
