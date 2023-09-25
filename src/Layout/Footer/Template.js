export default {
    type: 'electrician-footer',
    data: {
        column_sections: [
            {
                type: 'electrician-list-items-content',
                data: {
                    link_sections: [
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '#main_description',
                                navitem_title: '--layout.footer.links.about_us'
                            }
                        },
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '#contact_us',
                                navitem_title: '--layout.footer.links.contact'
                            }
                        },
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '#services',
                                navitem_title: '--layout.footer.links.services'
                            }
                        },
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '/',
                                navitem_title: '--layout.footer.links.privacy_policy'
                            }
                        },
                    ]
                }
            }
        ],
        address: {
            street: '--layout.footer.address.street',
            city: '--layout.footer.address.city',
            email: '--layout.footer.address.email',
            open: '--layout.footer.address.open',
            phone_number: '--layout.footer.address.phone_number'
        },
        copyright: {
            copy: '--layout.footer.copyright.copy',
        },
        bottom_right_section: {
            "type": "wertically-icon-links",
            "data": {
                "icon_sections": [
                    {
                        "type": "electrician-button-icon-link",
                        "data": {
                            "url": "",
                            "icon_class": "fab fa-facebook-f"
                        }
                    },
                    {
                        "type": "electrician-button-icon-link",
                        "data": {
                            "url": "",
                            "icon_class": "fab fa-twitter"
                        }
                    },
                    {
                        "type": "electrician-button-icon-link",
                        "data": {
                            "url": "",
                            "icon_class": "fas fa-envelope"
                        }
                    },
                ]
            }
        }
    }
}
