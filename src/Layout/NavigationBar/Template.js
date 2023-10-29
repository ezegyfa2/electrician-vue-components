export default {
    "type": "electrician-navigation-bar",
    "data": {
        "brand_section": {
            "type": "electrician-brand-image",
            "data": {
                "title": "--layout.navbar.title",
                "url": "/",
                "image_url": "/assets/img/bolt-lightning-solid.svg",
                "image_alt": "Brand Image"
            }
        },
        "link_sections": [
            {
                "type": "electrician-navigation-link",
                "data": {
                    "url": "#main_description",
                    "content": "--layout.navbar.about_us"
                }
            },
            {
                "type": "electrician-navigation-link",
                "data": {
                    "url": "#services",
                    "content": "--layout.navbar.our_services"
                }
            },
            {
                "type": "electrician-button-navigation-link",
                "data": {
                    "url": "#contact_us",
                    "content": "--layout.navbar.button_title"
                }
            },
            {
                "type": "electrician-dropdown-navigation-link",
                "data": {
                    "badge_content": "-++current_language",
                    "dropdown_section": {
                        "type": "electrician-list-dropdown",
                        "data": {
                            "dropdown_item_sections": {
                                "type": "electrician-link-dropdown-item",
                                "array_data": "languages",
                                "data": {
                                    "url": "++languages.url",
                                    "content": "++languages.name"
                                }
                            }
                        }
                    }
                }
            }
        ]
    }
}
