const isEnvDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
	devtool: isEnvDevelopment ? 'eval-source-map' : undefined,
};
