import { useQuery, useQueries } from "@tanstack/react-query";
import { API } from "./FetchAPI";
import { ITodo } from "../models/Interfaces";

export function useTodosIds() {
    return useQuery({
        queryKey: ["todos"],
        queryFn: API.FetchAll
    });
};

export function useTodos(todos: ITodo[] | undefined) {
    return useQueries({
        queries: (todos ?? []).map((todo) => {
            return {
                queryKey: ["todo", todo],
                queryFn: () => API.GetOne(todo)
            }
        })
    });
};


