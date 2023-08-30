<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            content_section: {
                type: Object
            },
            activeItem: 0,
            activetedActiveClass: false,
            openInfoItem: 0
        },
        methods: {
            mouseOver(i) {
                this.activeItem = i;
                this.activetedActiveClass = true
            },
            mouseLeave(){
                this.activetedActiveClass = false;
            },
            openInfo(i) {
                this.openInfoItem = i;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>