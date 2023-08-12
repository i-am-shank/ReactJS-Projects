import React from "react";

import { createContext, useReducer } from "react";

import reducer1 from "../reducers/reducer1";
import { initialState } from "../reducers/reducer1";

export const StateContext = createContext();

export default function StateProvider({ children }) {
    // All state-variables in value-object as proverties
    const [state, dispatch] = useReducer(reducer1, initialState);

    const value = { state, dispatch };

    return (
        <StateContext.Provider value={value}>{children}</StateContext.Provider>
    );
}
