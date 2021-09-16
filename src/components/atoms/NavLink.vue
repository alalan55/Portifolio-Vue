<template>
    <router-link to="#{{to}}" class="nav-link">{{nomeRota}}</router-link>
</template>

<script>
    export default {
        props:{
            to:{type: String, default: ''},
            nomeRota:{type: String, default: ''}
        }
        
    }
</script>

<style lang="scss" scoped>
.nav-link{
    color: $branco;
}

</style>