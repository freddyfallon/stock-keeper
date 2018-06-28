import { pool } from '../../database';

const create = async (_: any, args: any, ctx: any) => {
  const { item, quantity } = args;
  try {
    const query = {
      text:
        'INSERT INTO stock (item, quantity) VALUES ($1, $2) RETURNING id, item, quantity',
      values: [item, quantity]
    };
    const {
      rows: [newItem]
    } = await pool.query(query);
    return newItem;
  } catch (err) {
    throw new Error(err);
  }
};

export { create };
