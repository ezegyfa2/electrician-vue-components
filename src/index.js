export default {
	install(Vue) {
		require('helper-vue-components').default.install(Vue)
		require('text-contents-vue-components').default.install(Vue)

		require('./Templates/templateRegister').default.install()

		registerVueComponent(
			'fruits-website-page', 
			require('./LayoutPage/Component.vue').default, 
			Vue,
			'fruits-website-vue-components/src/LayoutPage/Component.vue'
		);

		registerVueComponent(
			'electrician-navigation-bar',
			require('./NavigationBar/NavigationBar/Component.vue').default,
			Vue,
			'electrician-vue-components/src/NavigationBar/NavigationBar/Component.vue'
		);

		registerVueComponent(
            'electrician-brand-image',
            require('./BrandImage/Component.vue').default,
            Vue,
            'electrician-vue-components/src/BrandImage/Component.vue'
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
            require('./SkewContainer/Component.vue').default,
            Vue,
            'electrician-vue-components/src/SkewContainer/Component.vue'
        );

        registerVueComponent(
            'fruits-website-footer',
            require('./Footer/Component.vue').default,
            Vue,
            'fruits-website-vue-components/src/Footer/Component.vue'
        );

		registerVueComponent(
            'fruits-website-button-icon-link',
            require('./ButtonIconLink/Component.vue').default,
            Vue,
            'fruits-website-vue-components/src/ButtonIconLink/Component.vue'
        );
	}
}