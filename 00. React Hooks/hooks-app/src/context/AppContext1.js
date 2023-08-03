import { useState } from "react";
import { createContext } from "react";

export const AppContext1 = createContext();

export default function AppContext1Provider({ children }) {
    const [data1, setData1] = useState(0);

    function increment5() {
        setData1(data1 + 5);
    }

    function decrement5() {
        setData1(data1 - 5);
    }

    const value = { data1, setData1, increment5, decrement5 };

    return (
        <AppContext1.Provider value={value}>{children}</AppContext1.Provider>
    );
}
