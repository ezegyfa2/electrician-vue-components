<template lang="pug">
    include Template.pug
</template>

<script>
    import Form from 'helper-vue-components/Form/Form/Component.vue'

    export default {
        mixins: [
            Form
        ],
        props: {
            id: {
                type: String
            },
            primaryFontFamily: {
                type: String
            },
            title_section: {
                type: Object
            }
        },
        data() {
            return {
                formItemTypePrefix: 'electrician-contact'
            }
        },
        computed: {
            leftFormItemSections() {
                return this.convertedFormItemSections.filter((formItemSection) => {
                    return formItemSection.data.name != 'message'
                })
            },
            rightFormItemSections() {
                return this.convertedFormItemSections.filter((formItemSection) => {
                    return formItemSection.data.name == 'message'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
