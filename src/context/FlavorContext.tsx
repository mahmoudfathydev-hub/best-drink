"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import data from "@/data/data.json";

type Flavor = (typeof data)[0];

type FlavorContextType = {
    currentFlavor: Flavor;
    setCurrentFlavor: (flavor: Flavor) => void;
};

const FlavorContext = createContext<FlavorContextType | undefined>(undefined);

export function FlavorProvider({ children }: { children: ReactNode }) {
    const [currentFlavor, setCurrentFlavor] = useState<Flavor>(data[0]);

    return (
        <FlavorContext.Provider value={{ currentFlavor, setCurrentFlavor }}>
            {children}
        </FlavorContext.Provider>
    );
}

export function useFlavor() {
    const ctx = useContext(FlavorContext);
    if (!ctx) {
        throw new Error("useFlavor must be used within FlavorProvider");
    }
    return ctx;
}

export default FlavorContext;
