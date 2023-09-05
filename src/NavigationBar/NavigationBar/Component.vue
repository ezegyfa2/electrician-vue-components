<template lang="pug">
include Template.pug
</template>

<script>
    import NavigationBar from '../../../../blue-admin-vue-components/src/NavigationBar/NavigationBar/Component.vue'

    export default {
        mixins: [
            NavigationBar
        ],
        props: {
            navigationBarId: {
                type: String,
                default: 'navigationBarId'
            },
            brand_section: {
                type: Object
            },
            link_sections: {
                type: Array
            },
            button_title: {
                type: String
            },
            language: {
                type: String,
                default: 'RO'
            },
            current_url: {
                type: String,
                default: '/'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
