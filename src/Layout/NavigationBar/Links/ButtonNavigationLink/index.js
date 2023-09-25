export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/NavigationLinks/ButtonNavigationLink')

        registerVueComponent(
            'electrician-button-navigation-link',
            require('./Component.vue').default,
            Vue
        )
    }
}
