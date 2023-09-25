export default {
    install(Vue) {
        window.templates.electrician_navigation_bar = require('./Template').default
        require('./NavigationBar').default.install(Vue)
        require('./Links').default.install(Vue)
        require('./BrandImage').default.install(Vue)
    }
}