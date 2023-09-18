export default {
    install(Vue) {
        require('helper-vue-components/ReactiveProperties/WindowSize').default.install(Vue)

        registerVueComponent(
            'electrician-skew-carousel',
            require('./Component.vue').default,
            Vue
        )
    }
}