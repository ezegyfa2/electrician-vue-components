export default {
    install(Vue) {
        registerVueComponent(
            'electrician-brand-image',
            require('./Component.vue').default,
            Vue
        )
    }
}