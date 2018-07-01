import { pool } from './connect';

export default {
  getAll: async (model: string) => {
    try {
      const query = {
        text: `SELECT distinct * FROM ${model}`
      };
      const { rows } = await pool.query(query);
      return rows;
    } catch (err) {
      throw new Error(err);
    }
  },
  add: async (modelName: string, item: 'string', quantity: number) => {
    try {
      const query = {
        text: `INSERT INTO ${modelName} (item, quantity) VALUES ($1, $2) RETURNING id, item, quantity`,
        values: [item, quantity]
      };
      const {
        rows: [newItem]
      } = await pool.query(query);
      return newItem;
    } catch (err) {
      throw new Error(err);
    }
  }
};
