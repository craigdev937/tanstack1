import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "./FetchAPI";
import { ITodo } from "../models/Interfaces";

export function useCreateTodo() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: ITodo) => API.Create(data),
        onMutate: () => console.log("mutate"),
        onError: () => console.log("error"),
        onSuccess: () => console.log("success"),
        onSettled: async (_, error) => {
            console.log("settled");
            if (error) {
                console.log(error);
            } else {
                await queryClient.invalidateQueries({ queryKey: ["todos"] })
            }
        }
    });
};


