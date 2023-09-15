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
                                nav_url: '/',
                                navitem_title: '--layout.footer.columns.links1.about_us'
                            }
                        },
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '/',
                                navitem_title: '--layout.footer.columns.links1.privacy_policy'
                            }
                        },
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '/contact',
                                navitem_title: '--layout.footer.columns.links1.contacts'
                            }
                        },
                    ]
                }
            },
            {
                type: 'electrician-list-items-content',
                data: {
                    link_sections: [
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '/products',
                                navitem_title: '--layout.footer.columns.links2.our_products'
                            }
                        },
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '/products',
                                navitem_title: '--layout.footer.columns.links2.services'
                            }
                        },
                    ]
                }
            },
            {
                type: 'electrician-list-items-content',
                data: {
                    link_sections: [
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '/products',
                                navitem_title: '--layout.footer.columns.links3.for_companies'
                            }
                        },
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '/products',
                                navitem_title: '--layout.footer.columns.links3.for_customers'
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
