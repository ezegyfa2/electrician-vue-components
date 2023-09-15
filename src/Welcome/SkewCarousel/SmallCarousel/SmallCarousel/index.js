export default {
    install(Vue) {
        require('helper-vue-components/Carousel/Carousel').default.install(Vue)

        registerVueComponent(
            'electrician-small-carousel',
            require('./Component.vue').default,
            Vue
        )
    }
}