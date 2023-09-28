export default {
    template_type_name: 'electrician_layout',
    params: {
        success_messages: '++success_messages',
        content_sections: [
            {
                template_type_name: 'electrician_carousel'
            },
            {
                type: 'electrician-description-section',
                data: {
                    id: 'main_description',
                    text_content_section: {
                        type: 'electrician-small-text-content',
                        data: {
                            title: '--welcome.main_description.title',
                            content: '--welcome.main_description.content',
                            button_content: '--welcome.main_description.button_content',
                            url: '#contact_us',
                            added_classes: {
                                '.content': ['mb-0'],
                            },
                        },
                    },
                    image_url: '/assets/img/male-electrician-works-1500x1000.jpg',
                    image_alt: '...',
                }
            },
            {
                template_type_name: 'electrician_skew_carousel'
            },
            {
                template_type_name: 'electrician_descriptions'
            },
            {
                template_type_name: 'electrician_contact_form'
            }
        ],
    }
}
