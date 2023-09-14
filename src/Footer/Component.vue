<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            cartContent: {
                type: Array
            },
            column1_sections: {
                type: Array
            },
            column2_sections: {
                type: Array
            },
            column3_sections: {
                type: Array
            },
            right_sections: {
                type: Object
            },
            bottom_left_section: {
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
