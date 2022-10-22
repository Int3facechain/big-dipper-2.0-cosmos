import { Categories } from '../types';

class MsgEditFanToken {
  public category: Categories;
  public type: string;
  public json: any;
  public owner: string;

  constructor(payload: any) {
    this.category = 'fantoken';
    this.type = payload.type;
    this.json = payload.json;
    this.owner = payload.owner;
  }

  static fromJson(json: any) {
    return new MsgEditFanToken({
      json,
      type: json['@type'],
      owner: json.owner,
    });
  }
}

export default MsgEditFanToken;