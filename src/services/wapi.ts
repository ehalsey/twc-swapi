import { Person } from "../models/person";
import MockPersons from "./mockPersons";

export class wapi {
    public static async getAllPeople(): Promise<Person[]> {
        if(!process.env.NODE_ENV.toLocaleLowerCase().localeCompare('production')) {
            return await this.mockGetAllPeople();
        }
        else {
            return await this.apiGetAllPeople();
        }
    }
    private static async apiGetAllPeople(): Promise<Person[]> {
        let promise = new Promise<Person[]>((resolve, reject) => {
            const fetch = require('node-fetch');
            fetch('http://swapi.dev/api/people')
                .then((res: { json: () => any; }) => res.json())
                .then((json: any) => {resolve(json.results)})
                .catch((err: any)=>reject(err))
        });
        return promise;
    }
    private static async mockGetAllPeople(): Promise<Person[]> {
        let promise = new Promise<Person[]>((resolve, reject) => {
            resolve(MockPersons.persons());
        });
        return promise;
    }

}