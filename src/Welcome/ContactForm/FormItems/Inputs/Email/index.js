export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Email').default.install(Vue)

        registerVueComponent(
            'electrician-contact-email-input',
            require('./Component.vue').default,
            Vue
        )
    }
}