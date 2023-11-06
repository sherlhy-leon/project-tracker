import { Wizard } from "../model/wizard.model";

const DB: Wizard[] = [
    {
        "id": 1,
        "name": "Harry",
        "house": "Gryffindor"
    },
    {
        "id": 2,
        "name": "Ron",
        "house": "Gryffindor"
    },
    {
        "id": 3,
        "name": "Hermione",
        "house": "Gryffindor"
    },
    {
        "id": 4,
        "name": "Draco",
        "house": "Slytherin"
    }
]

export const getData = async (): Promise<Wizard[]> => {
    return new Promise(res => {
        setTimeout(() => {
            res(DB);
        }, 3000);
    });
}