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
  }
};
