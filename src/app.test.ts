import testUtils from './testUtils';

const { startServer, stopServer, gqlRequest } = testUtils;

describe('query.hello', () => {
  beforeEach(startServer);
  afterEach(stopServer);

  test('returns greeting', async () => {
    const query: string = `
      query {
          hello(name: "Whatever")
      }
    `;
    const { body }: any = await gqlRequest({ query });

    expect(body).not.toHaveProperty('errors');
    expect(body).toEqual({
      data: {
        hello: 'Hello Whatever'
      }
    });
  });
});
