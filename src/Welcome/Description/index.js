export default {
    install(Vue) {
        window.templates.electrician_descriptions = require('./Template').default
        require('./Description').default.install(Vue)
        require('electrician-vue-components/GlobalComponents/SmallTextContent').default.install(Vue)
    }
}