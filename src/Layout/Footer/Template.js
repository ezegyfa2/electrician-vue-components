export default {
    type: 'electrician-footer',
    data: {
        column1_sections: [
            {
                type: 'electrician-list-items-content',
                data: {
                    link_sections: [
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '/',
                                navitem_title: 'Rólunk'
                            }
                        },
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '/',
                                navitem_title: 'Adatkezelés'
                            }
                        },
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '/contact',
                                navitem_title: 'Kapcsolat'
                            }
                        },
                    ]
                }
            }
        ],
        column2_sections: [
            {
                type: 'electrician-list-items-content',
                data: {
                    link_sections: [
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '/products',
                                navitem_title: 'Termékeink'
                            }
                        },
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '/products',
                                navitem_title: 'Szolgáltatásaink'
                            }
                        },
                    ]
                }
            }
        ],
        column3_sections: [
            {
                type: 'electrician-list-items-content',
                data: {
                    link_sections: [
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '/products',
                                navitem_title: 'Cégeknek'
                            }
                        },
                        {
                            type: 'electrician-list-item-link',
                            data: {
                                nav_icon: 'fas fa-check',
                                nav_url: '/products',
                                navitem_title: 'Lakossági ügyfeleknek'
                            }
                        },
                    ]
                }
            }
        ],
        right_sections: {
            street: '399 Crowfield Road',
            city: 'Phoenix, Arizona 85012',
            email: 'asff@fdsfsdc.com',
            open: 'Hétfő-Péntek 8:00-17:00',
            phone_number: '+602-926-5809'
        },
        bottom_left_section: {
            copy: 'Copyright @ All Rights Reserved 2023',
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
