export default {
    install(Vue) {
        window.templates.electrician_small_carousel = require('./Template').default
        require('./SmallCarousel').default.install(Vue)
        require('./SmallCarouselSmallTextContent').default.install(Vue)
        require('helper-vue-components/Carousel/CarouselSlide').default.install(Vue)
    }
}