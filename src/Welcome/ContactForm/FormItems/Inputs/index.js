export default {
    install(Vue) {
		require('./Email').default.install(Vue)
		require('./Phone').default.install(Vue)
		require('./Text').default.install(Vue)
    }
}
