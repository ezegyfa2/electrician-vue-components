export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/LinkItem').default.install(Vue)

        registerVueComponent(
            'electrician-link-dropdown-item',
            require('./Component.vue').default,
            Vue
        )
    }
}