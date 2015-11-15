import config from './server';

config.bundle = 'app';

// Defining port of bundle
// In production we will store this in APP_PORT environment variable
// In development it will be 3500
config.appPort = process.env.APP_PORT || 3500;

export default config;
