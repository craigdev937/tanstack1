import { ITodo } from "../models/Interfaces";
const URL = "http://localhost:5000/todos";

class FetchAPI {
    FetchAll = async (): Promise<ITodo[]> => {
        const res: Response = await fetch(URL);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return [...data];
    };
};

export const API: FetchAPI = new FetchAPI();


