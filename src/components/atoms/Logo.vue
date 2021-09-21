<template>
    <div class="logo">
        <span>{{logo}}</span>

    </div>
</template>

<script>
    export default {
        computed:{
            logo(){
                let logo = `<ALAN/>` 
                return  logo.toString()
            }
        }
    }
</script>

<style lang="scss" scoped>
.logo{
    color: $branco;
    font-weight: 700;
}

</style>