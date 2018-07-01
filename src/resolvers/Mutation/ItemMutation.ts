import { pool } from '../../database/postgres/connect';

import { constants } from '../../constants';

export default (database: any) => ({
  add: (source: any, args: any, ctx: any) => {
    return database.add(constants.MODELNAME, args.item, args.quantity);
  }
});
