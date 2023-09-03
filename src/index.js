export default {
	install(Vue) {
		require('helper-vue-components').default.install(Vue)
		require('text-contents-vue-components').default.install(Vue)

		require('./Templates/templateRegister').default.install()

		registerVueComponent(
			'electrician-navigation-bar',
			require('./NavigationBar/NavigationBar/Component.vue').default,
			Vue,
			'electrician-vue-components/src/NavigationBar/NavigationBar/Component.vue'
		);

		registerVueComponent(
            'electrician-brand-image',
            require('./Content/BrandImage/Component.vue').default,
            Vue,
            'electrician-vue-components/src/Content/BrandImage/Component.vue'
        );

		registerVueComponent(
            'electrician-description-section',
            require('./Content/Description/Component.vue').default,
            Vue,
            'electrician-vue-components/src/Content/Description/Component.vue'
        );

		registerVueComponent(
            'electrician-articles-small-text-content',
            require('./Content/ArticlesSmallTextContent/Component.vue').default,
            Vue,
            'electrician-vue-components/src/Content/ArticlesSmallTextContent/Component.vue'
        );

        registerVueComponent(
            'electrician-carousel-small-text-content',
            require('./Content/Carousel/CarouselSmallTextContent/Component.vue').default,
            Vue,
            'electrician-vue-components/src/Content/Carousel/CarouselSmallTextContent/Component.vue'
        );

        registerVueComponent(
            'electrician-services',
            require('./Content/Services/Services/Component.vue').default,
            Vue,
            'fruits-website-vue-components/src/Content/Services/Services/Component.vue'
        );

        registerVueComponent(
            'electrician-carousel',
            require('./Content/Carousel/Carousel/Component.vue').default,
            Vue,
            'electrician-vue-components/src/Content/Carousel/Carousel/Component.vue'
        );

        registerVueComponent(
            'electrician-zoom-carousel-slide',
            require('./Content/Carousel/ZoomCarouselSlide/Component.vue').default,
            Vue,
            'electrician-vue-components/src/Content/Carousel/ZoomCarouselSlide/Component.vue'
        );

        registerVueComponent(
            'electrician-dynamic-zoom-carousel-slide',
            require('./Content/Carousel/DynamicZoomCarouselSlide/Component.vue').default,
            Vue,
            'electrician-vue-components/src/Content/Carousel/DynamicZoomCarouselSlide/Component.vue'
        );

        registerVueComponent(
            'electrician-skew-container',
            require('./Content/SkewContainer/SkewContainer/Component.vue').default,
            Vue,
            'electrician-vue-components/src/Content/SkewContainer/SkewContainer/Component.vue'
        );

        registerVueComponent(
            'electrician-skew-text-content-with-icon',
            require('./Content/SkewContainer/SkewTextContentWithIcon/Component.vue').default,
            Vue,
            'electrician-vue-components/src/Content/SkewContainer/SkewTextContentWithIcon/Component.vue'
        );

        registerVueComponent(
            'electrician-footer',
            require('./Footer/Component.vue').default,
            Vue,
            'electrician-vue-components/src/Footer/Component.vue'
        );

		registerVueComponent(
            'electrician-button-icon-link',
            require('./Content/ButtonIconLink/Component.vue').default,
            Vue,
            'electrician-vue-components/src/Content/ButtonIconLink/Component.vue'
        );

        registerVueComponent(
            'electrician-list-items-content',
            require('./Content/ListItemsContent/Component.vue').default,
            Vue,
            'electrician-vue-components/src/Content/ListItemsContent/Component.vue'
        );

        registerVueComponent(
            'electrician-list-item-link',
            require('./Content/ListItemLink/Component.vue').default,
            Vue,
            'electrician-vue-components/src/Content/ListItemLink/Component.vue'
        );
	}
}