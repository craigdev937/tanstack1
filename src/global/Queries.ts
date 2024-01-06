import { useQuery } from "@tanstack/react-query";
import { API } from "./FetchAPI";

export function useTodosIds() {
    return useQuery({
        queryKey: ["todos"],
        queryFn: API.FetchAll
    });
};


