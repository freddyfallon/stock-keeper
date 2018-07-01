import { constants } from '../../constants';

export default (database: any) => ({
  getAll: () => {
    return database.getAll(constants.MODELNAME);
  }
});
