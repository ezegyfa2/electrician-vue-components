<template lang="pug">
include Template.pug
</template>

<script>
    export default {
        props: {
            carousel_section: {
                type: Object
            },
            skew_section: {
                type: Object
            }
        },
        data() {
            return {
                windowWidth: 0,
            };
        },
        mounted() {
            this.updateWindowWidth();
            this.onScreenResize();
        },
        methods: {
            onScreenResize() {
            window.addEventListener("resize", () => {
                this.updateWindowWidth();
            });
            },
            updateWindowWidth() {
            this.windowWidth = window.innerWidth;
            },
        },
    }
</script>