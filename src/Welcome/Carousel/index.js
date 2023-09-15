export default {
    install(Vue) {
        window.templates.electrician_carousel = require('./Template').default
        require('./Carousel').default.install(Vue)
        require('./CarouselSmallTextContent').default.install(Vue)
        require('./DynamicZoomCarouselSlide').default.install(Vue)
        require('./ZoomCarouselSlide').default.install(Vue)
    }
}