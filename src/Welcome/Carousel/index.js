export default {
    install(Vue) {
        require('./Carousel').default.install(Vue)
        require('./CarouselSmallTextContent').default.install(Vue)
        require('./DynamicZoomCarouselSlide').default.install(Vue)
        require('./SmallCarousel').default.install(Vue)
        require('./SmallCarouselSmallTextContent').default.install(Vue)
        require('./ZoomCarouselSlide').default.install(Vue)
    }
}