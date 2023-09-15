export default {
    install(Vue) {
        window.templates.electrician_skew_carousel = require('./Template').default
        require('./SkewCarousel').default.install(Vue)
        require('./SkewContainer').default.install(Vue)
        require('./SmallCarousel').default.install(Vue)
    }
}