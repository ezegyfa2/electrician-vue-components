export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/CollapsableNavigationBar').default.install(Vue)
        
        registerVueComponent(
            'electrician-navigation-bar',
            require('./Component.vue').default,
            Vue
        );
    }
}