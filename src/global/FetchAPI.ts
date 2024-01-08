import { ITodo } from "../models/Interfaces";
const URL = "http://localhost:5000/todos";

class FetchAPI {
    FetchAll = async (): Promise<ITodo[]> => {
        const res: Response = await fetch(URL);
        if (!res.ok) throw new Error(res.statusText);        
        const data = await res.json();
        return data;
    };

    GetOne = async (todo: ITodo): Promise<ITodo> => {
        const res: Response = 
        await fetch(`${URL}/${todo.id}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    };

    Create = async (todo: ITodo): Promise<ITodo> => {
        const res: Response = await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: todo.title,
                description: todo.description,
                checked: todo.checked
            })
        });
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    };
};

export const API: FetchAPI = new FetchAPI();


