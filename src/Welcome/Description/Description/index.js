export default {
    install(Vue) {
        require('helper-vue-components/Containers/Section').default.install(Vue)

        registerVueComponent(
            'electrician-description-section',
            require('./Component.vue').default,
            Vue
        )
    }
}