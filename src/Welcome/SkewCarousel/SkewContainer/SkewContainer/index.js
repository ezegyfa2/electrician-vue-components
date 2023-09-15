export default {
    install(Vue) {
        require('helper-vue-components/Containers/Skew').default.install(Vue)
        require('helper-vue-components/ClassAdder').default.install(Vue)

        registerVueComponent(
            'electrician-skew-container',
            require('./Component.vue').default,
            Vue
        )
    }
}