export default {
    install(Vue) {
        registerVueComponent(
            'electrician-list-item-link',
            require('./Component.vue').default,
            Vue
        );
    }
}