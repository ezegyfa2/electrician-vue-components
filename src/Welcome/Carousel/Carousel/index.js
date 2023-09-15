export default {
    install(Vue) {
        require('helper-vue-components/Carousel/Carousel').default.install(Vue)

        registerVueComponent(
            'electrician-carousel',
            require('./Component.vue').default,
            Vue
        )
    }
}