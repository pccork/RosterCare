export type User = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    _id: string;
  };
  
  export type Agency = {
    AgencyName: string;
    code: string;
    office: string;
    _id: string;
  };
  
  export interface Roster {
    hour: number;
    profession: string;
    agency: Agency | string;
    staff: User | string;
    lat: number;
    lng: number;
  }

  export type Db = {
    userStore: any;
    agencyStore: any;
    rosterStore: any;
  };
  