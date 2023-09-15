export default {
    install() {
        if (!window.templates) {
            window.templates = {}
        }
        window.templates.electrician_welcome = require('./welcome').default
        window.templates.electrician_carousel = require('./carousel.js').default
        window.templates.electrician_description = require('./description.js').default
        window.templates.electrician_skewcarousel = require('./skewCarousel.js').default

        window.templates.electrician_layout = require('./Layout/layout').default
        window.templates.electrician_navigation_bar = require('./Layout/navigationBar').default
        window.templates.electrician_footer = require('./Layout/footer').default
    }
}
