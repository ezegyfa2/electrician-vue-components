export default {
    install(Vue) {
        window.templates.electrician_footer = require('./Template').default
        require('./Footer').default.install(Vue)
        require('./ListItemLink').default.install(Vue)
        require('./ListItemsContent').default.install(Vue)
        require('./ButtonIconLink').default.install(Vue)
        require('helper-vue-components/IconLinks/WerticallyIconLinks').default.install(Vue)
    }
}