export default {
    install() {
        if (!window.templates) {
            window.templates = {}
        }
        window.templates.electrician_products = require('./products').default
        window.templates.electrician_index = require('./index').default

        window.templates.electrician_layout = require('./Layout/layout').default
        window.templates.electrician_navigation_bar = require('./Layout/navigationBar').default
        window.templates.electrician_footer = require('./Layout/footer').default
    }
}
