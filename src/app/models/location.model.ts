export class Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;

  constructor(id: number, name: string, type: string, dimension: string, residents: string[], url: string, created: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.dimension = dimension;
    this.residents = residents;
    this.url = url;
    this.created = created;
  }
}
