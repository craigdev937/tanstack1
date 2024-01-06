import React from "react";
import "./App.css";
import { QueryClientProvider, 
    QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Todos } from "../containers/Todos";

const QClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 5,
            retryDelay: 1000
        }
    }
});

export const App = () => {
    return (
        <QueryClientProvider client={QClient}>
            <React.Fragment>
                <Todos />
                <ReactQueryDevtools initialIsOpen={false} />
            </React.Fragment>
        </QueryClientProvider>
    );
};


