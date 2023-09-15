export default {
    install(Vue) {
        require('./SkewContainer').default.install(Vue)
        require('./SkewTextContentWithIcon').default.install(Vue)
        require('./SkewCarousel').default.install(Vue)
    }
}