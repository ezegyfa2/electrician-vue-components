export default {
    install(Vue) {
        registerVueComponent(
            'electrician-list-items-content',
            require('./Component.vue').default,
            Vue
        );
    }
}