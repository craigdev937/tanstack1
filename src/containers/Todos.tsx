import React from "react";
import { useTodos, useTodosIds } from "../global/Queries";

export const Todos = () => {
    const todosIdsQuery = useTodosIds();
    const todosQueries = useTodos(todosIdsQuery.data);

    return (
        <React.Fragment>
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


