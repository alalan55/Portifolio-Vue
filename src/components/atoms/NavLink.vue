<template>
    <a :href="$nameRoute" class="nav-link">{{nomeRota}}</a>
</template>

<script>
    export default {
         
        props:{
            to:{type: String, default: ''},
            nomeRota:{type: String, default: ''}
        },
        computed:{
            $nameRoute(){
                return `#${this.to}`
            }
        },
       
        
    }
</script>

<style lang="scss" scoped>
.nav-link{
    color: $branco;
    cursor: pointer;
    text-decoration: none;
    
    &:hover{
        color: $cinza;
    }
}

</style>