export default {
    install(Vue) {
        registerVueComponent(
            'electrician-footer',
            require('./Component.vue').default,
            Vue
        );
    }
}