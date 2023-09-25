export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Text').default.install(Vue)

        registerVueComponent(
            'electrician-contact-text-input',
            require('./Component.vue').default,
            Vue
        )
    }
}