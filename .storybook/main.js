module.exports = {
	// stories: ['../stories/**/*.stories.js'],
	stories: ['../src/components/**/*.stories.js'],
	addons: ['@storybook/addon-actions', '@storybook/addon-links'],
	webpackFinal: async config => {
		// do mutation to the config

		return config;
	}
};
