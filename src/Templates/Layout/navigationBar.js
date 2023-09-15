export default {
    "type": "electrician-navigation-bar",
    "data": {
        "brand_section": {
            "type": "electrician-brand-image",
            "data": {
                "title": "--layout.navbar.title",
                "url": "/home",
                "image_url": "++image_url",
                "image_alt": "Brand Image"
            }
        },
        "link_sections": [
            {
                "type": "electrician-navigation-link",
                "data": {
                    "url": "/",
                    "content": "--layout.navbar.about_us",
                }
            },
            {
                "type": "electrician-navigation-link",
                "data": {
                    "url": "/",
                    "content": "--layout.navbar.our_products",
                }
            },
        ],
        "button_title": "--layout.navbar.button_title",
        "language": "-++language",
        "current_url": "-++current_url"
    }
}
