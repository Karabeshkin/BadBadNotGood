export type Registration = {
    name:string;
    email:string;
    password:string;
    score: number;
};

export type User = {
    name:string;
    email:string;
    id:number;
    score: number;
}

export type Authorization = {
  name: string;
  password: string;
}
