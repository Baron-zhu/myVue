<template>
    <div>
        hahahaha
        id 是: {{id}}
    </div>
</template>

<script>
    export default {
        name: "Detail",
        // data() {
        //     return {
        //         id: ""
        //     }
        // },
        // watch: {
        //     $route(val){
        //         this.id = val.params.id
        //     }
        // }
        computed: {
            id () {
                return this.$route.params.id
            }
        }
    }
</script>

<style scoped>

</style>