import ItemsQuery from './ItemsQuery';

describe('ItemsQuery.getAll', () => {
  test('Should call database.getAll', () => {
    const databaseSpy = { getAll: jest.fn() };
    const Query = ItemsQuery(databaseSpy);
    Query.getAll();
    expect(databaseSpy.getAll).toHaveBeenCalledWith('stock');
  });
});
