<template lang="pug">
include Template.pug
</template>

<script>
    export default {
        props: {
            cartContent: {
                type: Array
            },
            column_sections: {
                type: Array
            },
            address: {
                type: Object
            },
            copyright: {
                type: Object
            },
            bottom_right_section: {
                type: Object
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
