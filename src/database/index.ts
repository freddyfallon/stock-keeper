import { Pool, Client } from 'pg';

const connectionString = process.env.POSTGRESQL_URI;

export const pool = new Pool({ connectionString });

export const checkDbConnection = async () => {
  const client = new Client({ connectionString });

  try {
    await client.connect();
    console.log('Database connection check: Successful');
    await client.end();
    console.log('Database connection check: Ended');
  } catch (err) {
    throw Error(`Database connection check: ${err}`);
  }
};
