export default {
    install(Vue) {
        require('text-contents-vue-components/SmallTextContent').default.install(Vue)

        registerVueComponent(
            'electrician-skew-text-content-with-icon',
            require('./Component.vue').default,
            Vue
        )
    }
}