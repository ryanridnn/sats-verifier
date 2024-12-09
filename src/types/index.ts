export interface Operation {
  result: Result;
  details: Details;
}

export interface Result {
  overall: string;
  messages: string[];
}

export interface Details {
  _id: string;
  networkId: string;
  siteId: string;
  departmentId: string;
  workAreaId: string;
  workAreaTitle: string;
  departmentTitle: string;
  title: string;
}
