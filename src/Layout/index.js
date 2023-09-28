export default {
    install(Vue) {
        window.templates.electrician_layout = require('./Template').default
        require('helper-vue-components/Pages/Page').default.install(Vue)
        require('./NavigationBar').default.install(Vue)
        require('./Footer').default.install(Vue)
        require('./SessionMessages').default.install(Vue)
    }
}