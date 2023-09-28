export default {
    type: "page",
    data: {
        navigation_bar_section: {
            template_type_name: "electrician_navigation_bar",
            params: {
                languages: "-++languages"
            }
        },
        success_message_sections: {
            array_data: "success_messages",
            type: "electrician-success-message",
            direct_paste: true,
            data: {
                content: "++success_messages"
            }
        },
        content_sections: "++content_sections",
        footer_section: {
            template_type_name: "electrician_footer"
        }
    }
}
