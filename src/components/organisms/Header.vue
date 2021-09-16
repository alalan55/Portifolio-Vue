<template>
  <header>
    <Nav />
  </header>
</template>

<script>
import { Nav } from "@/components/molecules";
export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
header{
    height: 70px;
    width: 100%;
}
</style>