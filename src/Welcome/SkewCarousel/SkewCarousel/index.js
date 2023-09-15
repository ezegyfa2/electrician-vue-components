export default {
    install(Vue) {
        registerVueComponent(
            'electrician-skew-carousel',
            require('./Component.vue').default,
            Vue
        )
    }
}