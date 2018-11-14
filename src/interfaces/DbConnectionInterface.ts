import * as Sequelize from "sequelize";

import { ModelsInterface } from './ModelsInterface';

export interface DbConnectionInterface {
  sequelize: Sequelize.Sequelize
}
