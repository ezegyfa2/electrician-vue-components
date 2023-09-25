export default {
    install(Vue) {
        require('helper-vue-components/Form/Form').default.install(Vue)
        require('helper-vue-components/CsrfInput').default.install(Vue)
        
        registerVueComponent(
            'electrician-contact-form',
            require('./Component.vue').default,
            Vue
        )
    }
}