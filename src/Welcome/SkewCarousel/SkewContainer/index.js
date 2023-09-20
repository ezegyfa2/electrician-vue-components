export default {
    install(Vue) {
        require('./SkewContainer').default.install(Vue)
        require('./SkewTextContentWithIcon').default.install(Vue)
        window.templates.electrician_skew_container = require('./Template').default
    }
}