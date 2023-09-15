export default {
    install(Vue) {
        require('helper-vue-components/Carousel/DynamicZoomCarouselSlide').default.install(Vue)

        registerVueComponent(
            'electrician-dynamic-zoom-carousel-slide',
            require('./Component.vue').default,
            Vue
        )
    }
}