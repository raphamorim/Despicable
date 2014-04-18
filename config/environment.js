/*
 * Config environments.
 */
var Config = {};

/*
 * Set current environment.
 */
Config.env = process.env.NODE_ENV || "development";

/*
 * Environment: Test.
 */
Config.test = {
  name: "test",
  mongo: "mongodb://localhost/despicable_test",
  defaultUrl: "http://localhost",
  serverPort: 8080,
  logNamespace: "test"
};
/*
 * Environment: Development.
 */
Config.development = {
  name: "development",
  mongo: "mongodb://localhost/despicable",
  defaultUrl: "http://localhost",
  serverPort: 8080,
  logNamespace: "development"
};
/*
 * Environment: Staging.
 */
Config.staging = {
    name: "staging",
    mongo: "mongodb://localhost/despicable",
    defaultUrl: "http://localhost",
    serverPort: 8080,
    logNamespace: "staging"
};
/*
 * Environment: Production.
 */
Config.production = {
    name: "production",
    mongo: "mongodb://localhost/despicable",
    defaultUrl: "http://localhost",
    serverPort: 8080,
    logNamespace: "production"
};

config = Config[Config.env];
config.env = Config.env;
exports.config = config;
