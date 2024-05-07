var config = {};

config.debug = process.env.DEBUG || true;

config.mqtt  = {};
config.mqtt.namespace = process.env.MQTT_NAMESPACE || '#';
config.mqtt.hostname  = process.env.MQTT_HOSTNAME  || '172.31.86.248'; // Cambiar
config.mqtt.port      = process.env.MQTT_PORT      || 1883;

config.mongodb = {};
config.mongodb.hostname   = process.env.MONGODB_HOSTNAME   || '100.27.200.249'; // Cambiar
config.mongodb.port       = process.env.MONGODB_PORT       || 27017;
config.mongodb.database   = process.env.MONGODB_DATABASE   || 'test';
config.mongodb.collection = process.env.MONGODB_COLLECTION || 'message';

module.exports = config;