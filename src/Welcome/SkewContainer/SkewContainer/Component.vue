<script>
    import SkewContainer from 'helper-vue-components/Containers/Skew/Component.vue';
    import ClassAdder from 'helper-vue-components/ClassAdder/Component.vue'

    export default {
        mixins: [
            SkewContainer,
            ClassAdder
        ],
        props: {
            added_classes: {
                type: Object,
                default () {
                    return {
                        '.skew-column': 'col-md-4'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
