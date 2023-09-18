<template lang="pug">
include Template.pug
</template>

<script>
    import ReactiveWindowSize from 'helper-vue-components/ReactiveProperties/WindowSize/Component.vue'

    export default {
        mixins: [
            ReactiveWindowSize,
        ],
        props: {
            carousel_section: {
                type: Object
            },
            skew_section: {
                type: Object
            }
        }
    }
</script>