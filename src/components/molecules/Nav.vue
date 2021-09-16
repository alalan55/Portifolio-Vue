<template>
  <nav>
    <div class="logo">
      <Logo />
    </div>
    <div class="links">
      <NavLink to="sobre" nomeRota="sobre"  class="link"/>
      <NavLink to="teste" nomeRota="projetos"  class="link"/>
      <NavLink to="teste" nomeRota="serviços" class="link" />
      <NavLink to="teste" nomeRota="skills"  class="link"/>
      <NavLink to="teste" nomeRota="contato"  class="link"/>
    </div>
  </nav>
</template>

<script>
import { NavLink, Logo } from "@/components/atoms";
export default {
  components: {
    NavLink,
    Logo,
  },
};
</script>

<style lang="scss" scoped>

nav{
    height: 100%;
    max-width: $max-width;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .links{
        display: flex;
        align-items: center;
        
        .link{
            margin: 0 .5rem;
        }
    }
}
</style>