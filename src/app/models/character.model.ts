import {Gender, Status} from "../common/character.enum";
import {UrlInfo} from "./url-info.model";

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: UrlInfo;
  location: UrlInfo;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
