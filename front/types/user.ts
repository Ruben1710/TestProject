export interface IUser {
    _id: string | number;
    name: string;
    gender: number;
    links?: Array<string>;
    created_at?: string;
}