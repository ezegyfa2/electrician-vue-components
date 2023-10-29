const ProportionalCutterResizer = require('js-helper-methods/imageMethods/ProportionalCutterResizer.js')

module.exports = {
    generate() {
        const imageCreator = new ProportionalCutterResizer()
        const imageSizes = [
            320, // 320px
            375, // 375px
            425, // 425px
            500, // 768px
            600, // 1024px
        ]
        const imageFolderPath = 'node_modules/electrician-vue-components/src/Welcome/SkewCarousel/SkewContainer/Images/'
        const publicImageFolderPath = 'public/images/skewContainer/'

        imageCreator.createResponsiveVersions(
            imageFolderPath + 'blurMan.jpg', 
            imageSizes,
            publicImageFolderPath + 'blurMan'
        )
        imageCreator.createResponsiveVersions(
            imageFolderPath + 'electricianWork.jpg', 
            imageSizes,
            publicImageFolderPath + 'electricianWork'
        )
        imageCreator.createResponsiveVersions(
            imageFolderPath + 'solarPanel.jpg', 
            imageSizes,
            publicImageFolderPath + 'solarPanel'
        )
    }
}