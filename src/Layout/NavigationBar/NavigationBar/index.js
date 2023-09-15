export default {
    install(Vue) {
        require('blue-admin-vue-components/NavigationBar/NavigationBar').default.install(Vue)
        
        registerVueComponent(
            'electrician-navigation-bar',
            require('./Component.vue').default,
            Vue
        );
    }
}