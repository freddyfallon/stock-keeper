import ItemMutation from './ItemMutation';

describe('ItemsQuery.getAll', () => {
  test('Should call database.add', () => {
    const databaseSpy = { add: jest.fn() };
    const Mutation = ItemMutation(databaseSpy);
    const source = {};
    const args = { item: 'cheese', quantity: 1 };
    const ctx = {};
    Mutation.add(source, args, ctx);
    expect(databaseSpy.add).toHaveBeenCalledWith('stock', 'cheese', 1);
  });
});
