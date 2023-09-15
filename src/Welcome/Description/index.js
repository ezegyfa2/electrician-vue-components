export default {
    install(Vue) {
        require('description-vue-components/Description').default.install(Vue)

        registerVueComponent(
            'electrician-description-section',
            require('./Component.vue').default,
            Vue
        )
    }
}