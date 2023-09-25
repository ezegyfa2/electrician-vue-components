export default {
    install(Vue) {
        window.templates.electrician_welcome = require('./Template').default
        
        require('./Carousel').default.install(Vue)
        require('./Description').default.install(Vue)
        require('./SkewCarousel').default.install(Vue)
        require('./ContactForm').default.install(Vue)
        require('helper-vue-components/Carousel/CarouselSlide').default.install(Vue)
        require('electrician-vue-components/Layout').default.install(Vue)
    }
}
