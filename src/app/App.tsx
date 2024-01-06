import React from "react";
import "./App.css";
import James from "@public/James Gandolfini.webp";

export const App = () => {
    return (
        <React.Fragment>
            <img
                height="600px" width="auto" 
                src={James} alt="James Gandolfini" 
            />
        </React.Fragment>
    );
};


