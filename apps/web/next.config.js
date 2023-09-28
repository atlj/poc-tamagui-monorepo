const { withTamagui } = require('@tamagui/next-plugin')

module.exports = (_phase, { defaultConfig }) => {
  const plugins = [withTamagui(
    {
      config: './tamagui.config.ts',
      components: ['ui', 'tamagui'],
    }
  )]
  return plugins.reduce((acc, plugin) => plugin(acc), { ...defaultConfig })
}
