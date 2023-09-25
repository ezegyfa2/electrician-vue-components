export default {
    install(Vue) {
        window.templates.electrician_contact_form = require('./Template').default
        require('./Form').default.install(Vue)
        require('./FormItems').default.install(Vue)
        require('./WhiteMediumTextContent').default.install(Vue)
    }
}