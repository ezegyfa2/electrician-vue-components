<template lang="pug">
include Template.pug
</template>

<script>
    import SmallTextContent from 'text-contents-vue-components/SmallTextContent/Component.vue'

    export default {
        mixins: [
            SmallTextContent
        ],
        props: {
            img_url: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>