export default {
    install(Vue) {
        require('./Inputs').default.install(Vue)
        require('./TextArea').default.install(Vue)
    }
}