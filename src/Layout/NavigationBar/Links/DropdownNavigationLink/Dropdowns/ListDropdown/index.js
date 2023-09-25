export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/ListDropdown').default.install(Vue)

        registerVueComponent(
            'electrician-list-dropdown',
            require('./Component.vue').default,
            Vue
        )
    }
}