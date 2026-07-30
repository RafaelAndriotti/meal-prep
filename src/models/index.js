import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { Sequelize, DataTypes } from 'sequelize';

import configs from '../config/config.json' with { type: 'json' };

const env = process.env.NODE_ENV || 'development';
const config = configs[env];

if (!config) {
  throw new Error(`Nenhuma configuracao de banco encontrada para NODE_ENV="${env}"`);
}

export const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

const modelsDir = import.meta.dirname;
const thisFile = path.basename(import.meta.filename);

const modelFiles = (await readdir(modelsDir)).filter(
  (file) =>
    !file.startsWith('.') &&
    file !== thisFile &&
    file.endsWith('.js') &&
    !file.endsWith('.test.js')
);

const db = {};

for (const file of modelFiles) {
  const { default: defineModel } = await import(pathToFileURL(path.join(modelsDir, file)));
  const model = defineModel(sequelize, DataTypes);
  db[model.name] = model;
}

for (const model of Object.values(db)) {
  if (typeof model.associate === 'function') {
    model.associate(db);
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;