export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Phone').default.install(Vue)

        registerVueComponent(
            'electrician-contact-phone-input',
            require('./Component.vue').default,
            Vue
        )
    }
}