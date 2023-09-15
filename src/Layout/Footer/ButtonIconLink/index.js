export default {
    install(Vue) {
        require('helper-vue-components/IconLinks/ButtonIconLinkLight').default.install(Vue)

        registerVueComponent(
            'electrician-button-icon-link',
            require('./Component.vue').default,
            Vue
        );
    }
}