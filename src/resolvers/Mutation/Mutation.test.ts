import testUtils from '../../testUtils';

const { startServer, stopServer, gqlRequest, setUpDb, cleanDb } = testUtils;

describe('mutation.hello', () => {
  beforeEach(startServer);
  beforeAll(setUpDb);
  afterEach(stopServer);
  afterAll(cleanDb);

  test('returns greeting', async () => {
    const query: string = `
      mutation {
        create(item: "bread", quantity: 3) {
          item
        }
      }
    `;
    const { body }: any = await gqlRequest({ query });

    expect(body).not.toHaveProperty('errors');
    expect(body).toEqual({
      data: {
        create: { item: 'bread' }
      }
    });
  });
});
