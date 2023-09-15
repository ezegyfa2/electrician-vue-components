export default {
    install(Vue) {
        window.templates.electrician_descriptions = require('./Template').default
        require('./Description').default.install(Vue)
        require('./ArticleSmallTextContent').default.install(Vue)
    }
}