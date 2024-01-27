const presets = ['module:metro-react-native-babel-preset']
const plugins = []

plugins.push(
	[
		'module-resolver',
		{
			root: ['.'],
			extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
			alias: {
				'@': './src',
				adapters: './src/adapters',
				assets: './src/assets',
				components: './src/components',
				constants: './src/constants',
				routes: './src/routes',
				views: './src/views',
				store: './src/store',
				services: './src/services',
			},
		},
	],
	'react-native-reanimated/plugin'
)

module.exports = {
	presets,
	plugins,
}
