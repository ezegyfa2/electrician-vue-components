<script>
    import SkewContainer from '../../../../../helper-vue-components/src/Containers/Skew/Component.vue';
    import ClassAdder from './../../../../../helper-vue-components/src/ClassAdder.vue'

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
