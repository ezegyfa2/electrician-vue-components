export default {
    install(Vue) {
        require('../DynamicZoomCarouselSlide').default.install(Vue)

        registerVueComponent(
            'electrician-zoom-carousel-slide',
            require('./Component.vue').default,
            Vue
        )
    }
}