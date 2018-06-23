import nock from 'nock';
import request from 'request-promise-native';
import { promisify } from 'util';
import server from './server';

let uri: string;
let http: any;

export default {
  startServer: async (): Promise<void> => {
    nock.cleanAll();
    http = await server.start({ port: 0 });
    const { port } = http.address();
    uri = `http://localhost:${port}`;
  },
  stopServer: async () => {
    nock.cleanAll();
    if (http) {
      await promisify(http.close).call(http);
      http = null;
    }
  },
  uri: (): string => uri,
  gqlRequest: async ({ query }: { query: string }): Promise<Object> => {
    const res = await request({
      uri,
      method: 'POST',
      json: true,
      body: { query },
      resolveWithFullResponse: true
    });
    return res;
  }
};

export const startServer = async () => {};
