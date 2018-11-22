import { UserModel, UserInstance } from "../../models/UserModel";
import { DataLoaderParam } from "../../interfaces/DataLoaderParamInterface";
import { RequestedFields } from "../ast/RequestedFields";

export class UserLoader {
  static batchUsers(User: UserModel, params: DataLoaderParam<number>[], requestedfields: RequestedFields): Promise<UserInstance[]> {

    let ids: number[] = params.map(param => param.key);

    return Promise.resolve(
      User.findAll({
        where: { id: { $in: ids } },
        attributes: requestedfields.getFields(params[0].info, { keep: ['id'], exclude: ['posts'] }),
      })
    )
  }
}
