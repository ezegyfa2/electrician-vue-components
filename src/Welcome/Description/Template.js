export default {
    type: 'section-container',
    data: {
        content_sections: [
            {
                type: 'electrician-description-section',
                data: {
                    text_content_section: {
                        type: 'electrician-article-small-text-content',
                        data: {
                            title: '--description.content1.title',
                            content: '--description.content1.content',
                            left_orientation: false,
                            button_content: '--description.content1.button_content',
                            url: '/',
                            added_classes: {
                                '.content': ['mb-0'],
                            },
                        },
                    },
                    image_url: '/assets/img/alternative-energy-ecological-concept-1500x1000.jpg',
                    image_alt: '...',
                    left_orientation: false,
                }
            },
            {
                type: 'electrician-description-section',
                data: {
                    text_content_section: {
                        type: 'electrician-article-small-text-content',
                        data: {
                            title: '--description.content2.title',
                            content: '--description.content2.content',
                            button_content: '--description.content2.button_content',
                            url: '/',
                            added_classes: {
                                '.content': ['mb-0'],
                            },
                        },
                    },
                    image_url: '/assets/img/man-electrical-technician-working-switchboard-with-fuses-uses-tablet-1500x1000.jpg',
                    image_alt: '...',
                }
            },
            {
                type: 'electrician-description-section',
                data: {
                    text_content_section: {
                        type: 'electrician-article-small-text-content',
                        data: {
                            title: '--description.content3.title',
                            content: '--description.content3.content',
                            left_orientation: false,
                            button_content: '--description.content3.button_content',
                            url: '/',
                            added_classes: {
                                '.content': ['mb-0'],
                            },
                        },
                    },
                    image_url: '/assets/img/male-electrician-works-1500x1000.jpg',
                    image_alt: '...',
                    left_orientation: false,
                }
            },
        ]
    }
}