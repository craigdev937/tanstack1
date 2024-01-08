import React from "react";
import { useTodos, useTodosIds } from "../global/Queries";
import { useCreateTodo } from "../global/Mutations";
import { SubmitHandler, useForm } from "react-hook-form";
import { ITodo } from "../models/Interfaces";

export const Todos = () => {
    const todosIdsQuery = useTodosIds();
    const todosQueries = useTodos(todosIdsQuery.data);
    const createTodoMutation = useCreateTodo();
    const { register, handleSubmit } = useForm<ITodo>();

    const handleCreateSubmit: SubmitHandler<ITodo> = (data) => {
        createTodoMutation.mutate(data);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(handleCreateSubmit)}>
                <h4>New todo:</h4>
                <input placeholder="Title" {...register("title")} />
                <input placeholder="Description" {...register("description")} />
                <br />
                <br />
                <input 
                    type="submit"
                    disabled={createTodoMutation.isPending} 
                    value={createTodoMutation.isPending ? 
                        "Creating..." : 
                        "Create Todo"
                    }
                />
            </form>

            {todosQueries.map(({ data }) => (
                <li key={data?.id}>
                    <div>ID: {data?.id}</div>
                    <span>
                        <strong>Title:</strong> {data?.title},{" "}
                        <strong>Description:</strong> {data?.description}
                    </span>
                </li>
            ))}
        </React.Fragment>
    );
};


