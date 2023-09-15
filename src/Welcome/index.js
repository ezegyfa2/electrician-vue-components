export default {
    install(Vue) {
        window.templates.electrician_welcome = require('./Template').default
        require('electrician-vue-components/Layout').default.install(Vue)
        
        require('./Carousel').default.install(Vue)
        require('./Description').default.install(Vue)
        require('./SkewCarousel').default.install(Vue)
        require('helper-vue-components/Carousel/CarouselSlide').default.install(Vue)
    }
}