import React from "react";
import { useTodosIds } from "../global/Queries";

export const Todos = () => {
    const todosIdsQuery = useTodosIds();

    if (todosIdsQuery.error) return <h1>Error: s</h1>
    if (todosIdsQuery.isPending) return <h1>Loading...</h1>

    return (
        <React.Fragment>
            {todosIdsQuery.data.map((todo) => (
                <aside key={todo.id}>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                </aside>
            ))}
        </React.Fragment>
    );
};


