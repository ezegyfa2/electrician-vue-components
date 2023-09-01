<template lang="pug">
	include Template.pug
</template>

<script>
	export default {
		props: {
            nav_icon: {
                type: String
            },
            nav_url: {
                type: String
            },
            navitem_title: {
                type: String
            }
		}
	}
</script>

<style lang="scss" scoped >
    @import "Style.scss";
</style>