<template>
  <nav>
    <div class="logo">
      <Logo />
    </div>
    <div class="links">
      <NavLink to="sobre" nomeRota="sobre" class="link" @click="openOrCloseNav"/>
      <NavLink to="projetos" nomeRota="projetos" class="link" @click="openOrCloseNav"/>
      <NavLink to="servicos" nomeRota="serviços" class="link" @click="openOrCloseNav"/>
      <NavLink to="skills" nomeRota="skills" class="link" @click="openOrCloseNav"/>
      <NavLink to="contato" nomeRota="contato" class="link" @click="openOrCloseNav"/>
    </div>
    <i class="fas" :class="[!open ? 'fa-bars' : 'fa-times']" @click="openOrCloseNav"></i>
  </nav>
</template>

<script>
import { NavLink, Logo } from "@/components/atoms";
export default {
  components: {
    NavLink,
    Logo,
  },
  data(){
    return{
      open: false
    }

  },
  methods:{
    openOrCloseNav(){

      let links = document.querySelector('.links')
      
      this.open == true ? (this.open = false) : (this.open = true);

      this.open ? links.style.left = 0 : links.style.left = '-100%'

    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  height: 100%;
  max-width: $max-width;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .links {
    display: flex;
    align-items: center;
    transition: .3s ease-in-out;

    .link {
      margin: 0 0.5rem;
    }
  }
  .fas {
    color: white;
    display: none;
    cursor: pointer;
  }
}

@media screen and (max-width: 640px) {
  nav {
    padding: 0 0.5rem;
    .links {
      z-index: 10;
      position: absolute;
      width: 100%;
      height: 100vh;
      background: rgba(#000000, 0.98);
      padding: 0 !important;
      margin: 0 !important;
      bottom: 0;
      left: -100%;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .link{
        margin: 1rem 0;
      }
    }
    .logo{
      z-index: 11;
    }
    .fas {
      z-index: 11 ;
      display: block !important;

    }
  }
}
</style>