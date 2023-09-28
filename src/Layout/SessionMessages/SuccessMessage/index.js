export default {
    install(Vue) {
        require('../MessageBox').default.install(Vue)

        registerVueComponent(
            'electrician-success-message',
            require('./Component.vue').default,
            Vue
        )
    }
}