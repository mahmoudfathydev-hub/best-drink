"use client";
import React, { createContext, useContext, useRef, ReactNode } from "react";

type ProductImageContextType = {
    productImageRef: React.RefObject<HTMLDivElement | null>;
    aboutContainerRef: React.RefObject<HTMLDivElement | null>;
    menuContainerRef: React.RefObject<HTMLDivElement | null>;
};

const ProductImageContext = createContext<ProductImageContextType | undefined>(
    undefined
);

export function ProductImageProvider({ children }: { children: ReactNode }) {
    const productImageRef = useRef<HTMLDivElement>(null);
    const aboutContainerRef = useRef<HTMLDivElement>(null);
    const menuContainerRef = useRef<HTMLDivElement>(null);

    return (
        <ProductImageContext.Provider value={{ productImageRef, aboutContainerRef, menuContainerRef }}>
            {children}
        </ProductImageContext.Provider>
    );
}

export function useProductImage() {
    const ctx = useContext(ProductImageContext);
    if (!ctx) {
        throw new Error("useProductImage must be used within ProductImageProvider");
    }
    return ctx;
}

export default ProductImageContext;
