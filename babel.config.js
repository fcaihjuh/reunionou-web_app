module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
})

